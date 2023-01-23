import CollaboratorsContext from "./index";
import { API, graphqlOperation } from "aws-amplify";
import { useState } from "react";
import { Auth } from "aws-amplify";

import { listUsers, getUsers } from "../../graphql/queries";

export default function CollaboratorsProvider({children}){
    const [collaborators, setCollaborators] = useState([]);
    const [collDetail, setCollDetail] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [logueado, setLogueado] = useState({})


    const UserLog = async () => {
      try {
        const coguserdata = await Auth.currentUserInfo();
        setLogueado(coguserdata.attributes);
      } catch (error) {
        console.log("error:", error);
      }
    };

    const getCollaborators = async () => {
      try {
        setIsLoading(true);
        const userData = await API.graphql(graphqlOperation(listUsers));
        const userList = userData.data.listUsers.items;
        setCollaborators(userList)
      } catch (error) {
        console.log("error:", error);
        setCollaborators([])
      } finally{
        setIsLoading(false);
      }
    };
    const getCollDetail = async (id) => {
      if(!id) Promise.reject("Id requerido");
      try {
        setIsLoading(true);
        const userData = await API.graphql(graphqlOperation(getUsers, {id}));
        const collaborator = userData.data.getUsers;
        setCollDetail(collaborator)
      } catch (error) {
        console.log("error detail:", error);
        setCollDetail([])
      } finally{
        setIsLoading(false);
      }
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
      //separados=separa(collaborators);
    };
  
    const [currentPage, setCurrentPage] = useState(0);
  
    const paginateFront = () => {
      setCurrentPage(currentPage + 1);
    };
    const paginateBack = () => setCurrentPage(currentPage - 1);
    const setActual = (value) => setCurrentPage(value);
  
    
    function separa(datos) {
      let firstpanels = [];
      firstpanels[0] = [...datos].splice(0, maxPorPagina);
      //alert("tamaño de datos="+ datos.length+"hojas="+datos.length/maxPorPagina+ "registros="+maxPorPagina);
      for (let i = 1; i < Math.ceil(datos.length / maxPorPagina); i++) {
        firstpanels[i] = [...datos].splice(i * maxPorPagina, maxPorPagina);
      }
  
      return firstpanels;
    }
  
function prueba1(){
  return "aaaaaaaaaaaaaaaabbbbbbbbbbbbb";
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
  

    return(
        <CollaboratorsContext.Provider value={{
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
          currentPage,
          prueba1
          }}>
        {children}
        </CollaboratorsContext.Provider>
    );
}