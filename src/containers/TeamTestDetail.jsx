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

function TeamTestDetail() {
  const { id } = useParams();
  const { getCollDetail, collDetail, isLoading, usuarioActualDatos } =
    useContext(CollaboratorsContext);

  const [testPreguntas, setTestPreguntas] = useState();
  const [aniosFill, setAniosFill] = useState([]);
  const [selall, setSelall]=useState(false);
  const [load, setLoad] = useState(true)

//////////////////////////////////////////////////////////////////////////////////
const [dataBehavior, setDataBehavior] =useState([])

  function getData() {
    const apiName = 'API Behaviors';
    const path = '/behaviors';
    const myInit = {
      headers: {}, // OPTIONAL
      queryStringParameters: {
        LANGUAGE: `${usuarioActualDatos.IDIOMA}`,
        USER_ID: `${collDetail.ID_COLABORADOR}` // OPTIONAL
      }
    };
  
    return API.get(apiName, path, myInit);
  }

  const fetcBehaviors = async () => {
    try{
      setLoad(true)
      const response = await getData();
      setDataBehavior(response)
      //console.log(response)
    }catch (error) {
      console.log("error:", error);
    }finally{
      setLoad(false)
    }
  };


////////////////////////////////////////////////////////////////////////////////////
  const fetchDesemp = async () => {
    const respdesemp = await fetch(
      `https://talento-itzahuia.com/SAC/gb_info.php?ID=${id}`,
      {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    ); //.then(respdesemp => {setTestPreguntas(respdesemp.json);})
    const datos = await respdesemp.json();
    obtenMaxAnio(datos);
    setTestPreguntas(datos);
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
   // fetcBehaviors();
    fetchDesemp();
  }, [id,selall]);
  

  const sendOverridesHeadColl = {
    NameColl: { children: `${collDetail.NOMBRE} ${collDetail.APELLIDOS} ` },
    Id: { children: collDetail.ID_COLABORADOR },
    Job: { children: collDetail.PUESTO },
    Organitation: { children: collDetail.ORGANIZACION },
    Profile: { src: `data:image/jpg;base64,${collDetail.FOTO}` },
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
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <Loader size="large" />
      </div>
    );
  }

  return (
    <div>
      <div className="mt-2 flex flex-col gap-2">
        <div className="mx-4">
          <BreadCrums
            text="Evaluación de"
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
              load={load}
              sendOverridesBehavior={sendOverridesBehavior}
              sendOverridesPerformanceTest={sendOverridesPerformanceTest}
              testPreguntas={testPreguntas}
              sendOverridesSuccesionTest={sendOverridesSuccesionTest}
              datosUsuario={vardatosusuario}
              usuarioActualDatos={usuarioActualDatos}
              collDetail={collDetail}
              dataBehavior={dataBehavior}
            />
        </div>
      </div>
    </div>
  );
}

export default TeamTestDetail;