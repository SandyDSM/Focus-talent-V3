import { SelectField } from "@aws-amplify/ui-react";
import React from "react";
import HeadTeam from "../components/HeadTeam";
import { Loader } from "@aws-amplify/ui-react";
import { API } from 'aws-amplify';
import Configuration from '../utils/Configuration'


import { useContext, useEffect, useState } from "react";
import CollaboratorsContext from "../context/collaborators";
import Tabs from "../components/Tabs";
import SearchTeam from "./SearchTeam";
import BannersImg from "../components/BannersImg";
import BannerUser from "../components/BannerUser";

const MyTeam = () => {
  const {
    collaborators,
    getCollaborators,
    isLoading,
    separadosCol,
    usuarioActualDatos, 
    ordena,
    actualizaBusqueda,
    futleader,
        pillbusiness,
        basebusiness,
        noteval,
        notaply,
//etiquetas
banerSearch,
myteamOption1,
myteamOption2,
myteamOption3,
myteamOption4,
myteamOption5,
downloadAllPDF,
setSubOne

  } = useContext(CollaboratorsContext);


  const [option, setOption] = useState(1);
  const [all, setAll] = useState("false");
  const [closeSerchAll, setCloseSerchAll] = useState(0);
 
  const toggleTab = (index) => {
    setOption(index);
  };

  console.log(usuarioActualDatos.BUSQUEDA_GLOBAL)

  function getData() {
    const apiName = 'API Behaviors';
    const path = '/translations';
    const myInit = {
      headers: {}, // OPTIONAL
      queryStringParameters: {
        LANGUAGE: `'${usuarioActualDatos.IDIOMA}'`,
      }
    };
  
    return API.get(apiName, path, myInit);
  }

  const fetcLanguage = async () => {
    try{
      const response = await getData();
     // console.log("Languaje",response)
    }catch (error) {
      console.log("error:", error);
    }
  };


  useEffect(() => {
    if (usuarioActualDatos.ID_COLABORADOR != undefined) {
      getCollaborators(usuarioActualDatos.ID_COLABORADOR, "SetColaborators");
    }
  }, [usuarioActualDatos.ID_COLABORADOR]);

  useEffect(() => { 
    //actualizaBusqueda(collaborators);
    setSubOne(false);
    fetcLanguage();
    setAll(usuarioActualDatos.BUSQUEDA_GLOBAL)
  }, [usuarioActualDatos]);


function cambia(evento){
  ordena(evento);
  //console.log(collaborators);//x
}

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <Loader size="large" />
      </div>
    );
  }
  return (
    <>
      <div className="my-3"><BannerUser/></div>
      <BannersImg language={usuarioActualDatos.IDIOMA} version={usuarioActualDatos.BUSQUEDA_GLOBAL}/>
      <HeadTeam title={banerSearch}  OpcionSelect={option} all={all} setCloseSerchAll={setCloseSerchAll}/>
      {closeSerchAll === 1 ? <SearchTeam setCloseSerchAll={setCloseSerchAll}  sub={false}/> :(
        <> 
      {separadosCol?.length === 0  ? (
        <div className="flex justify-center my-10 items-center">
          <h3>Usted no cuenta con reportes directos</h3>
        </div>
      ) : (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 m-5 px-0 md:px-4">
          <div className={`md:rounded-l-lg ${option === 1 ? "tabActive" : "tab"}`} onClick={()=>toggleTab(1)}>{myteamOption1}</div>
          <div className={option === 2 ? "tabActive" : "tab"} onClick={()=>toggleTab(2)}>{myteamOption2}</div>
          <div className={option === 3 ? "tabActive" : "tab"} onClick={()=>toggleTab(3)}>{myteamOption3}</div>
          <div className={option === 4 ? "tabActive" : "tab"} onClick={()=>toggleTab(4)}>{myteamOption4}</div>
          <div className={`md:rounded-r-lg ${option === 5 ? "tabActive" : "tab"}`} onClick={()=>toggleTab(5)}>{myteamOption5}</div>
        </div>
        <div>
          {option === 1 && <Tabs title={myteamOption1} collaborators={futleader} sub={false}/>}
          {option === 2 && <Tabs title={myteamOption2} collaborators={pillbusiness} sub={false}/>}
          {option === 3 && <Tabs title={myteamOption3} collaborators={basebusiness} sub={false}/>}
          {option === 4 && <Tabs title={myteamOption4} collaborators={noteval} sub={false}/>}
          {option === 5 && <Tabs title={myteamOption5} collaborators={notaply} sub={false}/>}
        </div>
        </>
      )}</>
      )}
    </>
  );
};

export default MyTeam;
