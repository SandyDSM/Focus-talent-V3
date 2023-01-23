import CollaboratorsContext from "./index";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { useState } from "react";
import { Auth } from "aws-amplify";

import { listUsers, getUsers } from "../../graphql/queries";

export default function CollaboratorsProvider({ children }) {
  const [collaborators, setCollaborators] = useState([]);
  const [collDetail, setCollDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [logueado, setLogueado] = useState({});
  const [usuarioActualDatos, setUsuarioActualDatos] = useState({});
  const [photo, setPhoto] = useState("");
  const [collaboratorsPhotos, setCollaboratorsPhotos] = useState([]);

  const UserLog = async () => {
    try {
      const coguserdata = await Auth.currentUserInfo();

      setLogueado(coguserdata.attributes);
      console.log(coguserdata.attributes.email);
      getAttribColaborators(coguserdata.attributes.email);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const getAttribColaborators = async (correo) => {
    let filtro = { EMAIL: { eq: correo } };
    try {
      const userData = await API.graphql(
        graphqlOperation(listUsers, { filter: filtro, limit: 10000 })
      );
      let datosUsuario = userData.data.listUsers.items;
      let token = userData.data.listUsers.nextToken;
      while (token != null) {
        let dataTemp = await API.graphql(
          graphqlOperation(listUsers, {
            filter: filtro,
            limit: 10000,
            nextToken: token,
          })
        );
        datosUsuario = dataTemp.data.listUsers.items;
        token = dataTemp.data.listUsers.nextToken;
      }
      setUsuarioActualDatos(datosUsuario[0]);
      PhotoBucket(datosUsuario[0].ID_COLABORADOR);
    } catch (error) {
      console.log("error:", error);
      //setCollaborators([]);
    }
  };

  const getCollaborators = async (msg) => {
    let filtro = { ID_JEFE: { eq: msg } };
    try {
      setIsLoading(true);
      const userData = await API.graphql(
        graphqlOperation(listUsers, { filter: filtro, limit: 10000 })
      );
      let token = userData.data.listUsers.nextToken;
      let resArreglo = [];
      let i = 1;
      resArreglo[0] = userData.data.listUsers.items;

      while (token != null) {
        let dataTemp = await API.graphql(
          graphqlOperation(listUsers, {
            filter: filtro,
            limit: 10000,
            nextToken: token,
          })
        );
        resArreglo[i] = dataTemp.data.listUsers.items;
        i++;
        token = dataTemp.data.listUsers.nextToken;
      }

      let temp = resArreglo[0];
      let temp1 = "";
      for (i = 1; i < resArreglo.length; i++) {
        temp1 = temp.concat(resArreglo[i]);
        temp = temp1;
      }

      const userList = temp;
      setCollaborators(userList);
      //PhotoUsers(userList);
    } catch (error) {
      console.log("error:", error);
      setCollaborators([]);
    } finally {
      setIsLoading(false);
    }
  };
  const getCollDetail = async (id) => {
    if (!id) Promise.reject("Id requerido");
    try {
      setIsLoading(true);
      const userData = await API.graphql(graphqlOperation(getUsers, { id }));
      const collaborator = userData.data.getUsers;
      setCollDetail(collaborator);
    } catch (error) {
      console.log("error detail:", error);
      setCollDetail([]);
    } finally {
      setIsLoading(false);
    }
  };

  const PhotoBucket = async (idPhoto) => {
    const userPhotoPath = `${idPhoto}.png`;
    try {
      const fileAccessURL = await Storage.get(userPhotoPath, {
        level: "public",
        expires: 180,
      });
      //console.log("access url", fileAccessURL)
      setPhoto(fileAccessURL);
    } catch (error) {
      console.log("error photo out: ", error);
    }
  };

  const PhotoUsers = async (userList) => {
    for (let i = 0; i < userList.length; i++) {
      const userPhotoPath = `${userList[i]}.png`;
      try {
        const fileAccessURL = await Storage.get(userPhotoPath.ID_COLABORADOR, { level: 'public' ,expires: 60 });
          const images = {
            img: `${fileAccessURL}`
          }
          let NewCollaborators = {...userList[i], ...images}
          setCollaboratorsPhotos(collaboratorsPhotos.push(NewCollaborators))
      } catch (error) {
        console.log("error photo out: ", error);
      }
    }
    console.log("photosCol",collaboratorsPhotos)
    console.log(typeof(collaboratorsPhotos))
  };


  const [maxPorPagina, setmaxPorPagina] = useState(9);
  const [ObjTrabajo, setObjTrabajo] = useState(null);
  let separados = separa(collaborators);

  const datosFiltrados = (val) => {
    setObjTrabajo(ObjTrabajo.concat(val));
    separados = separa(ObjTrabajo);
  };

  const defineMax = (valor) => {
    if (valor === "nueve") {
      setmaxPorPagina(9);
    } else if (valor === "doce") {
      setmaxPorPagina(12);
    } else if (valor === "quince") {
      setmaxPorPagina(15);
    } else if (valor === "dieciocho") {
      setmaxPorPagina(18);
    }
  };

  const [currentPage, setCurrentPage] = useState(0);

  const paginateFront = () => {
    setCurrentPage(currentPage + 1);
  };
  const paginateBack = () => setCurrentPage(currentPage - 1);
  const setActual = (value) => setCurrentPage(value);

  function separa(datos) {
    if (datos) {
      let firstpanels = [];
      firstpanels[0] = [...datos].splice(0, maxPorPagina);
      //alert("tamaño de datos="+ datos.length+"hojas="+datos.length/maxPorPagina+ "registros="+maxPorPagina);
      for (let i = 1; i < Math.ceil(datos.length / maxPorPagina); i++) {
        firstpanels[i] = [...datos].splice(i * maxPorPagina, maxPorPagina);
      }

      return firstpanels;
    } else {
      return null;
    }
  }

  function obtenPuesto() {
    let datos = collaborators;
    let puestos = [];
    for (let i = 0; i < datos.length; i++) {
      puestos[i] = datos[i].PUESTO;
    }
    let result = puestos.filter((item, index) => {
      return puestos.indexOf(item) === index;
    });
    return result;
  }

  function obtenOrganizacion() {
    let datos = collaborators;
    let organizaciones = [];
    for (let i = 0; i < datos.length; i++) {
      organizaciones[i] = datos[i].ORGANIZACION;
    }
    let result = organizaciones.filter((item, index) => {
      return organizaciones.indexOf(item) === index;
    });
    return result;
  }

  return (
    <CollaboratorsContext.Provider
      value={{
        getCollaborators,
        collaborators,
        getCollDetail,
        collDetail,
        isLoading,
        UserLog,
        logueado,
        separados,
        datosFiltrados,
        obtenPuesto,
        obtenOrganizacion,
        defineMax,
        paginateFront,
        paginateBack,
        setActual,
        usuarioActualDatos,
        currentPage,
        PhotoBucket,
        photo,
        PhotoUsers,
      }}
    >
      {children}
    </CollaboratorsContext.Provider>
  );
}
