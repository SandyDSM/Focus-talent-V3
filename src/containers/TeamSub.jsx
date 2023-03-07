import { SelectField } from "@aws-amplify/ui-react";
import { Loader } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CollaboratorsContext from "../context/collaborators";
import { HeadTeamFrom } from "../ui-components";
import BreadCrums from "../components/BreadCrums";
import Tabs from "../components/Tabs";

function TeamSub() {
  const { id } = useParams();
  const {
    getCollaborators,
    subcollaborators,
    getCollDetail,
    collDetail,
    isLoading,
    futleadersub,
        respfutleadersub,
        pillbusinesssub,
        resppillbusinesssub,
        basebusinesssub,
        respbasebusinesssub,
        notevalsub,
        respnotevalsub,
        notaply
  } = useContext(CollaboratorsContext);

  const [option, setOption] = useState(1);

  const toggleTab = (index) => {
    setOption(index);
  };
  console.log("subs",subcollaborators)

  useEffect(() => {
    getCollDetail(id)
    .then(getCollaborators(collDetail.ID_COLABORADOR, "SetSubColaborators"))
    .catch(null);
  }, [collDetail.ID_COLABORADOR]);

  const sendOverridesTeamFrom = {
    nameColl: { children: `${collDetail.NOMBRE} ${collDetail.APELLIDOS} ` },
    SearchField: {display: 'none'}
  };

  const Loader = (()=>{
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <Loader size="large" />
      </div>
    );
  }
})

Loader();
  return (
    <>
      <div className="mx-4">
        <BreadCrums text="Equipo de" colaborator={collDetail.NOMBRE} />
      </div>
      <HeadTeamFrom width={"100%"} overrides={sendOverridesTeamFrom} />
      <>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 m-5 px-4">
          <div className={`md:rounded-l-lg ${option === 1 ? "tabActive" : "tab"}`} onClick={()=>toggleTab(1)}>Futuro Lider</div>
          <div className={option === 2 ? "tabActive" : "tab"} onClick={()=>toggleTab(2)}>Pilar de negocio</div>
          <div className={option === 3 ? "tabActive" : "tab"} onClick={()=>toggleTab(3)}>Cimiento de negocio</div>
          <div className={option === 4 ? "tabActive" : "tab"} onClick={()=>toggleTab(4)}>No evaluados en potencial</div>
          <div className={`md:rounded-r-lg ${option === 5 ? "tabActive" : "tab"}`} onClick={()=>toggleTab(5)}>No aplica</div>
        </div>
        <div>
          {option === 1 && <Tabs title={"Futuro Líder"} collaborators={futleadersub} sub={true}/>}
          {option === 2 && <Tabs title={"Pilar de negocio"} collaborators={pillbusinesssub} sub={true}/>}
          {option === 3 && <Tabs title={"Cimiento de negocio"} collaborators={basebusinesssub} sub={true}/>}
          {option === 4 && <Tabs title={"No evaluados en potencial"} collaborators={notevalsub} sub={true}/>}
          {option === 5 && <Tabs title={"No aplica"} collaborators={notaply}/>}
        </div>
        </>

    </>
  );
}

export default TeamSub;
