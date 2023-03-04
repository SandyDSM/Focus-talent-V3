import { SelectField } from "@aws-amplify/ui-react";
import React from "react";
import HeadTeam from "../components/HeadTeam";
import { Loader } from "@aws-amplify/ui-react";

import { useContext, useEffect, useState } from "react";
import CollaboratorsContext from "../context/collaborators";
import Tabs from "../components/Tabs";

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
        noteval
  } = useContext(CollaboratorsContext);


  const [option, setOption] = useState(1);
 
  const toggleTab = (index) => {
    setOption(index);
  };

  useEffect(() => {
    if (usuarioActualDatos.ID_COLABORADOR != undefined) {
      getCollaborators(usuarioActualDatos.ID_COLABORADOR, "SetColaborators");
    }
  }, [usuarioActualDatos.ID_COLABORADOR]);

  useEffect(() => { 
    //actualizaBusqueda(collaborators);
  }, [collaborators]);





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
      <HeadTeam title={"Potencial 2022"}  OpcionSelect={option}/>
      {separadosCol?.length === 0  ? (
        <div className="flex justify-center my-10 items-center">
          <h3>Usted no cuenta con reportes directos</h3>
        </div>
      ) : (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 m-5 px-4">
          <div className={`md:rounded-l-lg ${option === 1 ? "tabActive" : "tab"}`} onClick={()=>toggleTab(1)}>Futuro Lider</div>
          <div className={option === 2 ? "tabActive" : "tab"} onClick={()=>toggleTab(2)}>Pilar de negocio</div>
          <div className={option === 3 ? "tabActive" : "tab"} onClick={()=>toggleTab(3)}>Cimiento de negocio</div>
          <div className={option === 4 ? "tabActive" : "tab"} onClick={()=>toggleTab(4)}>No evaluados en potencial</div>
          <div className={`md:rounded-r-lg ${option === 5 ? "tabActive" : "tab"}`} onClick={()=>toggleTab(5)}>No aplica</div>
        </div>
        <div>
          {option === 1 && <Tabs title={"Futuro Líder"} collaborators={futleader}/>}
          {option === 2 && <Tabs title={"Pilar de negocio"} collaborators={pillbusiness}/>}
          {option === 3 && <Tabs title={"Cimiento de negocio"} collaborators={basebusiness}/>}
          {option === 4 && <Tabs title={"No evaluados en potencial"} collaborators={noteval}/>}
          {option === 5 && <Tabs title={"No aplica"} collaborators={noteval}/>}
        </div>
        </>
      )}
    </>
  );
};

export default MyTeam;
