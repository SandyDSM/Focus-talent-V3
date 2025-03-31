import React from "react";
import { useParams } from "react-router-dom";
import TestCheck from "../components/TestCheck";
import HeadCollaborator from "../components/HeadCollaborator";
import { useEffect, useContext, useState } from "react";
import CollaboratorsContext from "../context/collaborators";
import BreadCrums from "../components/BreadCrums";
import { Button, Loader } from "@aws-amplify/ui-react";
import  PerformaceAndSucesion from "./PerformaceAndSucesion";
import Configuration from '../utils/Configuration'
import { API } from 'aws-amplify';
import BannerUser from "../components/BannerUser";


function TeamTestDetail() {
  const { id } = useParams();
  const { getCollDetail, collDetail, isLoading, usuarioActualDatos, evalTxt } =
    useContext(CollaboratorsContext);
  //console.log("Datos de usario actual", usuarioActualDatos);
  const [testPreguntas, setTestPreguntas] = useState();
  const [aniosFill, setAniosFill] = useState([]);
  const [selall, setSelall]=useState(false);
  const [load, setLoad] = useState(true)

//////////////////////////////////////////////////////////////////////////////////
const [dataBehavior, setDataBehavior] =useState([])
const [dataLiderazgo, setDataLiderazgo] =useState([])
const [cmtLiderazgo, setCmtLiderazgo] =useState([])
const [cmtLid, setCmtLid] =useState([])


  function getData(papiName, ppath, pparameters) {
    const apiName = papiName;
    const path = ppath;
    const myInit = {
      headers: {}, // OPTIONAL
      queryStringParameters: pparameters
    };
  
    return API.get(apiName, path, myInit);
  }

  const fetcBehaviors = async () => {
    setLoad(true);
    try{
      let parametros={LANGUAGE: `${usuarioActualDatos.IDIOMA}`,
      USER_ID: `${collDetail.ID_COLABORADOR}`};
      const response = await getData('API Behaviors', '/behaviors', parametros);
      setDataBehavior(response)
      //console.log(response)
    }catch (error) {
      console.log("error:", error);
    }finally{
      setLoad(false)
    }
  };

  const datosLiderazgo = async () => {
    setLoad(true);
    try{
      let parametros={LANGUAGE: `${usuarioActualDatos.IDIOMA}`,
      USER_ID: `${collDetail.ID_COLABORADOR}`};
      const response = await getData('API Behaviors', '/competliderazgo', parametros);
      setDataLiderazgo(response)
      //console.log("liderazgo",response)
    }catch (error) {
      console.log("error:", error);
    }finally{
      setLoad(false)
    }
  };

  const comentsLiderazgo = async () => {
    setLoad(true);
    try{
      let parametros={LANGUAGE: `${usuarioActualDatos.IDIOMA}`,
      USER_ID: `${collDetail.ID_COLABORADOR}`,
      VP_USER_ID:`${usuarioActualDatos.ID_COLABORADOR}`};
      const response = await getData('API Behaviors', '/competliderazgocoment', parametros);
      setCmtLiderazgo(response)
      console.log("Coments",response)
    }catch (error) {
      console.log("error:", error);
    }finally{
      setLoad(false)
    }
  };

const fetchDesemp = async () => {
  
  let idtemp=id*1;
  
  let parametros={INTERNAL_ID: idtemp,
  LANGUAGE: `'${localStorage.getItem("IdiomaUsuario")}'`
};
  //console.log("los parametros van XXXXXXXXXXXXXXXXXXXXXXXXXX", parametros);
  try{
    const response = await getData('API PerfPoten', '/perfpot', parametros);
   //console.log("La data que llega es ", response);
    obtenMaxAnio(response);
    setTestPreguntas(response);

  }catch (error) {
  
    console.log("error aaa:", error);
  }
};

  const obtenMaxAnio=(datos)=>
  {
    let filtros = datos;
    if(datos!==undefined){    
    filtros.sort((a, b) => {
          if (a.ANO_EVAL < b.ANO_EVAL) return 1;
          if (a.ANO_EVAL > b.ANO_EVAL) return -1;
          return 0;
        });
      }
        setAniosFill([filtros[0].ANO_EVAL]);
  }


  useEffect(() => {
    getCollDetail(id).catch(null);
    fetchDesemp();
  }, [id,selall]);

  useEffect(() => {
    //setCmtLiderazgo([]);
    datosLiderazgo();
    comentsLiderazgo();
  }, [id, collDetail.ID_COLABORADOR, aniosFill]);
/*
  useEffect(() => {
    setCmtLiderazgo([]); // Limpia los comentarios antes de cargar nuevos
    getCollDetail(id).catch(null);
  if (collDetail?.ID_COLABORADOR) {
    comentsLiderazgo();
  }
  }, [id,selall,collDetail.ID_COLABORADOR]);
  */

  const sendOverridesHeadColl = {
    NameColl: { children: `${collDetail.NOMBRE} ${collDetail.APELLIDOS} ` },
    Id: { children: collDetail.ID_COLABORADOR },
    Job: { children: collDetail.PUESTO },
    Organitation: { children: collDetail.ORGANIZACION },
    Profile: { src: `data:image/jpg;base64,${collDetail.FOTO}` },
    txt: { children: `${evalTxt}`  },
  };

  const sendOverridesBehavior = {
    nameColl: { children: `${collDetail.NOMBRE} ${collDetail.APELLIDOS} ` },
    Id: { children: collDetail.ID_COLABORADOR },
    Job: { children: collDetail.PUESTO },
    Organitation: { children: collDetail.ORGANIZACION },
    "image 4": {
      src:
        `${collDetail.FOTO}` != ""
          ? `data:image/jpg;base64,${collDetail?.FOTO}`
          : "https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/Avatar.png",
    },

  }

  const sendOverridesPerformanceTest = {
    nameColl: { children: `${collDetail.NOMBRE} ${collDetail.APELLIDOS} ` },
    Id: { children: collDetail.ID_COLABORADOR },
    Job: { children: collDetail.PUESTO },
    Organitation: { children: collDetail.ORGANIZACION },
    Profile: {
      src:
        `${collDetail.FOTO}` != ""
          ? `data:image/jpg;base64,${collDetail?.FOTO}`
          : "https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/Avatar.png",
    },
  };

  const vardatosusuario = {
    nombre: `${collDetail.NOMBRE} ${collDetail.APELLIDOS} `,
    Id: collDetail.ID_COLABORADOR,
    Job: collDetail.PUESTO,
    Organitation: collDetail.ORGANIZACION,
    src: `data:image/jpg;base64,${collDetail.FOTO}`,
  };

  const sendOverridesSuccesionTest = {
    nameColl: { children: `${collDetail.NOMBRE} ${collDetail.APELLIDOS} ` },
    Id: { children: collDetail.ID_COLABORADOR },
    Job: { children: collDetail.PUESTO },
    Organitation: { children: collDetail.ORGANIZACION },
    "image 4": {
      src:
        `${collDetail.FOTO}` != ""
          ? `data:image/jpg;base64,${collDetail?.FOTO}`
          : "https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/Avatar.png",
    },
  };
  if (load) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <Loader size="large" />
      </div>
    );
  }

  return (
    <div>
      <div className="my-3"><BannerUser/></div>
      <div className="mt-2 flex flex-col gap-2">
        <div className="mx-4">
          <BreadCrums
            text={evalTxt}
            colaborator={collDetail.NOMBRE}
          />
        </div>
        <div>
          <HeadCollaborator
            width={"100%"}
            overrides={sendOverridesHeadColl}
            datosUsuario={vardatosusuario}
            aniosFill={aniosFill}
            testPreguntas={testPreguntas}
            dataBehavior={dataBehavior}
            dataLiderazgo={dataLiderazgo}
            cmtLiderazgo={cmtLiderazgo}

          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4 m-5">
        <div className="mt-4 w-full">
          <TestCheck
            ElementosFiltro={testPreguntas}
            defineAnios={setAniosFill}
            Setselectall={setSelall}
            selecall={selall}
          />
        </div>
        <div className="col-span-1 md:col-span-3">
            <PerformaceAndSucesion
              aniosFill={aniosFill}
              fetcBehaviors={fetcBehaviors}
              datosLiderazgo={datosLiderazgo}
              comentsLiderazgo={comentsLiderazgo}
              load={load}
              sendOverridesBehavior={sendOverridesBehavior}
              sendOverridesPerformanceTest={sendOverridesPerformanceTest}
              testPreguntas={testPreguntas}
              sendOverridesSuccesionTest={sendOverridesSuccesionTest}
              datosUsuario={vardatosusuario}
              usuarioActualDatos={usuarioActualDatos}
              collDetail={collDetail}
              dataBehavior={dataBehavior}
              dataLiderazgo={dataLiderazgo}
              cmtLiderazgo={cmtLiderazgo}
            />
        </div>
      </div>
    </div>
  );
}

export default TeamTestDetail;