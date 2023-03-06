import CollaboratorsContext from "./index";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";


//import { listUsers, getUsers } from "../../graphql/queries";

export default function CollaboratorsProvider({ children, signOut }) {
  const [collaborators, setCollaborators] = useState([]);
  const [subcollaborators, setSubcollaborators] = useState([]);
  const [collDetail, setCollDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [logueado, setLogueado] = useState({});
  const [usuarioActualDatos, setUsuarioActualDatos] = useState({});
  const [photo, setPhoto] = useState("");
  const [collaboratorsPhotos, setCollaboratorsPhotos] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [collaboratorsResp, setCollaboratorsResp] = useState([]);
  const [showPerson, setShowPerson] = useState(true)
  const [sendCode, setSendCode] = useState(false);
//estados de usuario categorizado
  const [futleader, setFutleader] = useState([]);
  const [respfutleader, setRespfutleader] = useState([]);
  const [pillbusiness, setPillbusiness] = useState([]);
  const [resppillbusiness, setRespillbusiness] = useState([]);
  const [basebusiness, setBasebusiness] = useState([]);
  const [respbasebusiness, setResbasebusiness] = useState([]);
  const [noteval, setNoteval] = useState([]);
  const [respnoteval, setResnoteval] = useState([]);
//estados de subusuario categorizado
const [futleadersub, setFutleadersub] = useState([]);
const [respfutleadersub, setRespfutleadersub] = useState([]);
const [pillbusinesssub, setPillbusinesssub] = useState([]);
const [resppillbusinesssub, setRespillbusinesssub] = useState([]);
const [basebusinesssub, setBasebusinesssub] = useState([]);
const [respbasebusinesssub, setResbasebusinesssub] = useState([]);
const [notevalsub, setNotevalsub] = useState([]);
const [respnotevalsub, setResnotevalsub] = useState([]);
  
const navigate = useNavigate();

  const UserLog = async () => {
    try {
      setIsLoading(true);
      const coguserdata = await Auth.currentUserInfo();
      setLogueado(coguserdata.attributes);
     // console.log(coguserdata.attributes.email);
      getAttribColaborators(coguserdata.attributes.email);
    } catch (error) {
      console.log("error:", error);
    }
  };

 
  const getAttribColaborators = async (correo) => {
    try {
      setIsLoading(true);
      const respdesemp = await fetch(
        `https://talento-itzahuia.com/SAC/gb_UserInfo.php?EMAIL=${correo}`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            token: "8da9aebd984ef3897b280ff7efabf83d931f591b",
          },
        }
      ); //.then(respdesemp => {setTestPreguntas(respdesemp.json);})
      const datos = await respdesemp.json();
      //console.log("Usuario logueado: ", datos[0]);
      setUsuarioActualDatos(datos[0]);
      const esAdmin = datos[0].ADMIN;
      if(esAdmin === "1") {
        setIsAdmin(true);
      }else {
        setIsAdmin(false);
      }
      setPhoto(`data:image/jpg;base64,${datos[0].FOTO}`);

    } catch (error) {
      console.log("error aqui:", error);
      navigate("/forbidden");
      signOut();

    }finally {
      setIsLoading(false);
    }
  };

  
  const ordena=function(orden){
    const collatemp=collaborators;
    if(orden==="descendente"){
       const tempdescendente=collatemp.sort((a, b) => {
       if (a.APELLIDOS.toUpperCase() < b.APELLIDOS.toUpperCase()) return 1
       if (a.APELLIDOS.toUpperCase() > b.APELLIDOS.toUpperCase()) return -1
       return 0
     });
     
     actualizaBusqueda([...tempdescendente]); //a 
     
    }else{
    const temascendente= collatemp.sort((a, b) => {
       if (a.APELLIDOS.toUpperCase() > b.APELLIDOS.toUpperCase()) return 1
       if (a.APELLIDOS.toUpperCase() < b.APELLIDOS.toUpperCase()) return -1
       return 0
     });
     actualizaBusqueda([...temascendente]);  
          
    }
     
   };
   


  //const UserPromise = UserLog().then(getAttribColaborators(logueado.email)) 

  const actualizaBusqueda=function(users, opcion){
    if(opcion===1){
    setFutleader(users);
    }else if(opcion===2){
      setPillbusiness(users);
    }else if(opcion===3){
      setBasebusiness(users);
    }else if(opcion===4){
      setNoteval(users);
    }

     
  }

  const restauraUsuarios=function(){
    setCollaborators(collaboratorsResp);

    separadosCol=separa(collaborators);
    console.log("log de colabora: ", collaborators)
  }

const restauraUserClasif=function(value){
  if(value===1){
    setFutleader(respfutleader);  
  }else if(value===2){
    setPillbusiness(resppillbusiness);  
  }else if(value===3){
    setBasebusiness(respbasebusiness);  
  }else if(value===4){
    setNoteval(respnoteval);
  }
}




  const getCollaborators = async (idJefe, accion) => {
    //console.log("El id de jefe es:", idJefe);
    try {
      setIsLoading(true);
      const respdesemp = await fetch(
        `https://talento-itzahuia.com/SAC/gb_UserInfo.php?IdJefe=${idJefe}`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            token: "8da9aebd984ef3897b280ff7efabf83d931f591b",
          },
        }
      ); //.then(respdesemp => {setTestPreguntas(respdesemp.json);})
      const datos = await respdesemp.json();
      //console.log("Resultado de team: ", datos);
      if(accion==="SetColaborators"){
        setCollaborators(datos);
        setCollaboratorsResp(datos);
        setFutleader(datos?.filter(c => (c.CATEGORIA === "Future leader" || c.CATEGORIA === "Future leader *" || c.CATEGORIA === "Futuro líder" || c.CATEGORIA === "Futuro líder *")));
        setRespfutleader(datos?.filter(c => (c.CATEGORIA === "Future leader" || c.CATEGORIA === "Future leader *" || c.CATEGORIA === "Futuro líder" || c.CATEGORIA === "Futuro líder *")));
        setPillbusiness(datos?.filter(c => (c.CATEGORIA === "Business pillar" || c.CATEGORIA === "Business pillar *" || c.CATEGORIA === "Pilar de negocio" || c.CATEGORIA === "Pilar de negocio *")));
        setRespillbusiness(datos?.filter(c => (c.CATEGORIA === "Business pillar" || c.CATEGORIA === "Business pillar *" || c.CATEGORIA === "Pilar de negocio" || c.CATEGORIA === "Pilar de negocio *")));
        setBasebusiness(datos?.filter(c => (c.CATEGORIA === "Business foundation *" || c.CATEGORIA === "Business foundation" || c.CATEGORIA === "Cimiento de negocio" || c.CATEGORIA === "Cimiento de negocio *")));
        setResbasebusiness(datos?.filter(c => (c.CATEGORIA === "Business foundation *" || c.CATEGORIA === "Business foundation" || c.CATEGORIA === "Cimiento de negocio" || c.CATEGORIA === "Cimiento de negocio *")));
        setNoteval(datos?.filter(c => (c.CATEGORIA === "" || c.CATEGORIA === null)));
        setResnoteval(datos?.filter(c => (c.CATEGORIA === "" || c.CATEGORIA === null)));
        }else if(accion==="SetSubColaborators"){
          setSubcollaborators(datos);
          setFutleadersub(datos?.filter(c => (c.CATEGORIA === "Future leader" || c.CATEGORIA === "Future leader *" || c.CATEGORIA === "Futuro líder" || c.CATEGORIA === "Futuro líder *")));
          setRespfutleadersub(datos?.filter(c => (c.CATEGORIA === "Future leader" || c.CATEGORIA === "Future leader *" || c.CATEGORIA === "Futuro líder" || c.CATEGORIA === "Futuro líder *")));
          setPillbusinesssub(datos?.filter(c => (c.CATEGORIA === "Business pillar" || c.CATEGORIA === "Business pillar *" || c.CATEGORIA === "Pilar de negocio" || c.CATEGORIA === "Pilar de negocio *")));
          setRespillbusinesssub(datos?.filter(c => (c.CATEGORIA === "Business pillar" || c.CATEGORIA === "Business pillar *" || c.CATEGORIA === "Pilar de negocio" || c.CATEGORIA === "Pilar de negocio *")));
          setBasebusinesssub(datos?.filter(c => (c.CATEGORIA === "Business foundation *" || c.CATEGORIA === "Business foundation" || c.CATEGORIA === "Cimiento de negocio" || c.CATEGORIA === "Cimiento de negocio *")));
          setResbasebusinesssub(datos?.filter(c => (c.CATEGORIA === "Business foundation *" || c.CATEGORIA === "Business foundation" || c.CATEGORIA === "Cimiento de negocio" || c.CATEGORIA === "Cimiento de negocio *")));
          setNotevalsub(datos?.filter(c => (c.CATEGORIA === "" || c.CATEGORIA === null)));
          setResnotevalsub(datos?.filter(c => (c.CATEGORIA === "" || c.CATEGORIA === null)));

        }
    } catch (error) {
      if(accion==="SetColaborators"){
        setCollaborators([]);
        }else if(accion==="SetSubColaborators"){
          setSubcollaborators([]);
        }
    } finally {
      setIsLoading(false);
    }
  };

  const getCollDetail = async (id) => {
    //console.log("El id de jefe es:", id);
    try {
      setIsLoading(true);
      const respdesemp = await fetch(
        `https://talento-itzahuia.com/SAC/gb_UserInfo.php?ID=${id}`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            token: "8da9aebd984ef3897b280ff7efabf83d931f591b",
          },
        }
      );
      const datos = await respdesemp.json();
      setCollDetail(datos[0]);
      //console.log(datos[0])
    } catch (error) {
      console.log("error:", error);
      setCollDetail([]);
    }finally {
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
        const fileAccessURL = await Storage.get(userPhotoPath.ID_COLABORADOR, {
          level: "public",
          expires: 60,
        });
        const images = {
          img: `${fileAccessURL}`,
        };
        let NewCollaborators = { ...userList[i], ...images };
        setCollaboratorsPhotos(collaboratorsPhotos.push(NewCollaborators));
      } catch (error) {
        console.log("error photo out: ", error);
      }
    }
    console.log("photosCol", collaboratorsPhotos);
    console.log(typeof collaboratorsPhotos);
  };

  const [maxPorPagina, setmaxPorPagina] = useState(9);
  const [ObjTrabajo, setObjTrabajo] = useState(null);
  let separadosCol = separa(collaborators);
  let separadosSub = separa(subcollaborators);

  const datosFiltrados = (val) => {
    setObjTrabajo(ObjTrabajo.concat(val));
    separadosCol = separa(ObjTrabajo);
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
      return (datos = 0);
    }
  }

  function obtenPuesto() {
    let datos = collaboratorsResp;
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
    let datos = collaboratorsResp;
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
        getAttribColaborators,
        collaborators,
        collaboratorsResp,
        subcollaborators,
        getCollDetail,
        collDetail,
        isLoading,
        UserLog,
        logueado,
        separadosCol,
        separadosSub,
        datosFiltrados,
        obtenPuesto,
        obtenOrganizacion,
        defineMax,
        paginateFront,
        paginateBack,
        setActual,
        usuarioActualDatos,
        currentPage,
        photo,
        isAdmin,
        actualizaBusqueda,
        restauraUsuarios, 
        showPerson,
        setShowPerson,
        ordena,
        setIsLoading,
        sendCode, setSendCode,
        restauraUserClasif,
        futleader,
        pillbusiness,
        basebusiness,
        noteval,
        respfutleader,
        resppillbusiness,
        respbasebusiness,
        respnoteval, 
        //datos clasificados subcolaboradores
        futleadersub,
        respfutleadersub,
        pillbusinesssub,
        resppillbusinesssub,
        basebusinesssub,
        respbasebusinesssub,
        notevalsub,
        respnotevalsub

      }}
    >
      {children}
    </CollaboratorsContext.Provider>
  );
}
