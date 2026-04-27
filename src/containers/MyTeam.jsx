import LoadingSpinner from '../components/LoadingSpinner';
import React from "react";
import HeadTeam from "../components/HeadTeam";
import { API } from "aws-amplify";
import i18n from "../i18n";

//import Configuration from '../utils/Configuration'

import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CollaboratorsContext from "../context/collaborators";
import Tabs from "../components/Tabs";
import SearchTeam from "./SearchTeam";
import BannersImg from "../components/BannersImg";
import BannerUser from "../components/BannerUser";
import { Workflow } from "lucide-react";
import { useTranslation } from "react-i18next";

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
    myteamOption11,
    myteamOption21,
    myteamOption31,
    myteamOption1,
    myteamOption2,
    myteamOption3,
    myteamOption4,
    myteamOption5,
    downloadAllPDF,
    setSubOne,
  } = useContext(CollaboratorsContext);

  const navigate = useNavigate();

  const [option, setOption] = useState(1);
  const [all, setAll] = useState("false");
  const [closeSerchAll, setCloseSerchAll] = useState(0);

  const toggleTab = (index) => {
    setOption(index);
  };

  console.log("de my team", usuarioActualDatos);
    const { t } = useTranslation();


  function getData() {
    const apiName = "API Behaviors";
    const path = "/translations";
    const myInit = {
      headers: {}, // OPTIONAL
      queryStringParameters: {
        LANGUAGE: `'${usuarioActualDatos.IDIOMA}'`,
      },
    };

    return API.get(apiName, path, myInit);
  }

  const fetcLanguage = async () => {
    try {
      const response = await getData();
      // console.log("Languaje",response)
    } catch (error) {
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
    setAll(usuarioActualDatos.BUSQUEDA_GLOBAL);
  }, [usuarioActualDatos]);

  function cambia(evento) {
    ordena(evento);
    //console.log(collaborators);//x
  }

  console.log("usuario", usuarioActualDatos);
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <LoadingSpinner size="large" />
      </div>
    );
  }

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

  const allowedIds = [
    3000024,
    3000006,
    3000007,
    3000000,
    3000038,
    361170, //araceli
    28342, //MERI
    27033, //MECHI
    255978, //RAFA PAMIAS
    2655237, //LALI
    //10010552,
    1111111,
    332188, //LUCIANA
    23570, //DANIEL
    26370, //jorge zarate Lupercio
    25144, //raul ignacio obregon
    220467, //diego graxiola
    26627, //jose manuel
    27317, //fernando lerdo
    118254, //anthony gavin
    720818, //mark bendix
    24746, //muldoon
    1883259, //alejandro rodriguez
    120173, //topboss
    25730, //urrutia ruiz
    25732, //angeles pozo
    27342, // UGARTECHEA GALLARDO
    355623, // ALEJANDRO JUAN PINTADO LOPEZ
    1238448, // ALFONSO argudin
    3276, //Gregory P
  ];

  return (
    <>
      <div className="my-3">
        <BannerUser />
      </div>
      <BannersImg language={usuarioActualDatos.IDIOMA} version={all} />
      <HeadTeam
        title={banerSearch}
        OpcionSelect={option}
        all={all}
        setCloseSerchAll={setCloseSerchAll}
      />
      {closeSerchAll === 1 ? (
        <SearchTeam setCloseSerchAll={setCloseSerchAll} sub={false} />
      ) : (
        <>
          {separadosCol?.length === 0 ? (
            <div className="flex justify-center my-10 items-center">
              <h3>Usted no cuenta con reportes directos</h3>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 m-5 px-0 md:px-4">
                <div
                  className={`md:rounded-l-lg ${
                    option === 1
                      ? `tabActive ${colorMapActive[1]}`
                      : `tab ${colorMap[1]}`
                  }`}
                  onClick={() => toggleTab(1)}
                >
                  {myteamOption11}
                </div>
                <div
                  className={
                    option === 2
                      ? `tabActive ${colorMapActive[2]}`
                      : `tab ${colorMap[2]}`
                  }
                  onClick={() => toggleTab(2)}
                >
                  {myteamOption21}
                </div>
                <div
                  className={
                    option === 3
                      ? `tabActive ${colorMapActive[3]}`
                      : `tab ${colorMap[3]}`
                  }
                  onClick={() => toggleTab(3)}
                >
                  {myteamOption31}
                </div>
                <div
                  className={
                    option === 4
                      ? `tabActive ${colorMapActive[4]}`
                      : `tab ${colorMap[4]}`
                  }
                  onClick={() => toggleTab(4)}
                >
                  {myteamOption4}
                </div>
                <div
                  className={`md:rounded-r-lg ${
                    option === 5
                      ? `tabActive ${colorMapActive[5]}`
                      : `tab ${colorMap[5]}`
                  }`}
                  onClick={() => toggleTab(5)}
                >
                  {myteamOption5}
                </div>
              </div>
              <div>
                {option === 1 && (
                  <Tabs
                    title={myteamOption11}
                    collaborators={futleader}
                    sub={false}
                  />
                )}
                {option === 2 && (
                  <Tabs
                    title={myteamOption21}
                    collaborators={pillbusiness}
                    sub={false}
                  />
                )}
                {option === 3 && (
                  <Tabs
                    title={myteamOption31}
                    collaborators={basebusiness}
                    sub={false}
                  />
                )}
                {option === 4 && (
                  <Tabs
                    title={myteamOption4}
                    collaborators={noteval}
                    sub={false}
                  />
                )}
                {option === 5 && (
                  <Tabs
                    title={myteamOption5}
                    collaborators={notaply}
                    sub={false}
                  />
                )}
              </div>
            </>
          )}
        </>
      )}
      {/* Botón regresar a inicio */}
      <div className="navigation-button fixed bottom-6 right-6 z-30">
  {allowedIds.includes(Number(usuarioActualDatos.INTERNAL_ID)) && (
    <button
      onClick={() => navigate("/org")}
      className="
        group
        flex items-center gap-3 
        bg-blue-800 text-white 
        rounded-full shadow-xl
        h-14         /* 56px de alto */
        w-56        /* Ancho extendido por defecto */
        pr-6 pl-4
        transition-all duration-200
        hover:bg-blue-700   /* Resaltado */
        hover:shadow-2xl
      "
    >
      {/* ICONO */}
      <div className="flex justify-center items-center w-14 h-14 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          fill="white"
          className="w-7 h-7"
        >
          <g transform="translate(0, 0) scale(1.4)">
            <rect x="40" y="4" width="16" height="16" rx="2" />
            <line x1="48" y1="20" x2="48" y2="40" stroke="white" strokeWidth="4" />
            <line x1="16" y1="40" x2="80" y2="40" stroke="white" strokeWidth="4" />
            <line x1="24" y1="40" x2="24" y2="60" stroke="white" strokeWidth="4" />
            <line x1="48" y1="40" x2="48" y2="60" stroke="white" strokeWidth="4" />
            <line x1="72" y1="40" x2="72" y2="60" stroke="white" strokeWidth="4" />
            <rect x="16" y="60" width="16" height="16" rx="2" />
            <rect x="40" y="60" width="16" height="16" rx="2" />
            <rect x="64" y="60" width="16" height="16" rx="2" />
          </g>
        </svg>
      </div>

      {/* TEXTO */}
      <span className="font-semibold text-sm whitespace-nowrap">
        {t('Organigrama').toUpperCase()}
      </span>
    </button>
  )}
</div>

    </>
  );
};

export default MyTeam;
