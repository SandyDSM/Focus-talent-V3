import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CollaboratorsContext from "../context/collaborators";
import { HeadTeamFrom } from "../ui-components";
import BreadCrums from "../components/BreadCrums";
import Tabs from "../components/Tabs";
import BannerUser from "../components/BannerUser";
import { useTranslation } from "react-i18next";


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
        notaply,
        notaplysub, teamOne, setTeamOne, setSubOne
  } = useContext(CollaboratorsContext);
  const { t } = useTranslation();

  const [option, setOption] = useState(1);

  const toggleTab = (index) => {
    setOption(index);
  };
  console.log("subs",subcollaborators)

  useEffect(() => {
    getCollDetail(id)
    .then(getCollaborators(collDetail.ID_COLABORADOR, "SetSubColaborators"))
    .catch(null);
    setTeamOne(collDetail)
    setSubOne(true);
  }, [collDetail.ID_COLABORADOR]);

  const sendOverridesTeamFrom = {
    nameColl: { children: `${collDetail.NOMBRE} ${collDetail.APELLIDOS} ` },
    txt:{ children: `${t('teamFrom')}:` },
    SearchField: {display: 'none'}
  };

const colorMapActive = {
  1: "bg-clas1-blue border-clas1-blue",
  2: "bg-clas2-blue border-clas2-blue",
  3: "bg-clas3-green border-clas3-green",
  4: "bg-clas4-purple border-clas4-purple",
  5: "bg-clas5-orange border-clas5-orange",
};

const colorMap = {
  1: "border-clas1-blue",
  2: "border-clas2-blue",
  3: "border-clas3-green",
  4: "border-clas4-purple",
  5: "border-clas5-orange",
};

  return (
    <>
    <div className="my-3"><BannerUser/></div>
      <div className="mx-4">
        <BreadCrums text={t('teamFrom')} user={collDetail.NOMBRE} />
      </div>
      <HeadTeamFrom width={"100%"} overrides={sendOverridesTeamFrom} />
      <>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 m-5 px-0 md:px-4">
          <div className={`md:rounded-l-lg ${option === 1 ? `tabActive ${colorMapActive[1]}` : `tab ${colorMap[1]}`}`} onClick={() => toggleTab(1)}>{t('myteamOption11')}</div>
          <div className={option === 2 ? `tabActive ${colorMapActive[2]}` : `tab ${colorMap[2]}`} onClick={()=>toggleTab(2)}>{t('myteamOption21')}</div>
          <div className={option === 3 ? `tabActive ${colorMapActive[3]}`  : `tab ${colorMap[3]}`} onClick={()=>toggleTab(3)}>{t('myteamOption31')}</div>
          <div className={option === 4 ? `tabActive ${colorMapActive[4]}`  : `tab ${colorMap[4]}`} onClick={()=>toggleTab(4)}>{t('myteamOption4')}</div>
          <div className={`md:rounded-r-lg ${option === 5 ? `tabActive ${colorMapActive[5]}`  : `tab ${colorMap[5]}`}`} onClick={()=>toggleTab(5)}>{t('myteamOption5')}</div>
        </div>
        <div>
          {option === 1 && <Tabs title={t('myteamOption11')} collaborators={futleadersub} sub={true}/>}
          {option === 2 && <Tabs title={t('myteamOption21')} collaborators={pillbusinesssub} sub={true}/>}
          {option === 3 && <Tabs title={t('myteamOption31')} collaborators={basebusinesssub} sub={true}/>}
          {option === 4 && <Tabs title={t('myteamOption4')} collaborators={notevalsub} sub={true}/>}
          {option === 5 && <Tabs title={t('myteamOption5')} collaborators={notaplysub} sub={true}/>}
        </div>
        </>

    </>
  );
}

export default TeamSub;
