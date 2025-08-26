import { Button } from "@aws-amplify/ui-react";
import Iconteam from "../ui-components/Iconteam";
import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import CollaboratorsContext from "../context/collaborators";
import { API } from "aws-amplify";
import { IconProfile } from "../ui-components";

function CardDos({ colaborator, sub, serch="false" }) {
  const { origHireDate, evaluators, myteamViewDetail, usuarioActualDatos, setSubOne} =
    useContext(CollaboratorsContext);
  const [calibracion, setCalibracion] = useState([]);
  const [clasificacion, setClasificacion] = useState("");
  
  function getData(papiName, ppath, pparameters) {
    const apiName = papiName;
    const path = ppath;
    const myInit = {
      headers: {}, // OPTIONAL
      queryStringParameters: pparameters
    };
  
    return API.get(apiName, path, myInit);
  } 
  
const getcalib = async (id) => {
  try{
    let idtemp=id*1;
    let parametros={LANGUAGE: `'${usuarioActualDatos.IDIOMA}'`,
    INTERNAL_ID: idtemp};
    const response = await getData('API PerfPoten', '/getcarddatanew', parametros);
    setCalibracion(response)
    //console.log("Calib",response)
  }catch (error) {
    setCalibracion([]);
    console.log("error:", error);
  }
};

//console.log(sub)

  useEffect(() => {
    getcalib(colaborator.INTERNAL_ID);
    setSubOne(sub);
  }, []);

  const colorMap = {
    1: "bg-clas1-blue border-clas1-blue",
    2: "bg-clas2-blue border-clas2-blue",
    3: "bg-clas3-green border-clas3-green",
    4: "bg-clas4-purple border-clas4-purple",
    5: "bg-clas5-orange border-clas5-orange",
  };
  
  return (
    <div className="card flex flex-col gap-4 justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <img
            className="w-14 h-14 rounded-full"
            src={
              `${colaborator?.FOTO}` != ""
                ? `data:image/jpg;base64,${colaborator?.FOTO}`
                : "https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/Avatar.png"
            }
          />
          <div className="flex flex-col">
            <p className="font-bold">{`${colaborator.NOMBRE} ${colaborator.APELLIDOS}`}</p>
            <div className="flex gap-2">
              <div className="flex gap-1">
              <IconProfile type="id"/>
              <p className="text-xs	text-zinc-600 pt-0.5">{colaborator.ID_COLABORADOR}</p></div>
              <div className="flex gap-1">
              <div className="w-5"><IconProfile type="Job"/></div>
              <p className="text-xs	text-zinc-600 pt-0.5">{colaborator.PUESTO}</p></div>
              <div className="flex gap-1">
              <IconProfile type="Organitation"/>
              <p className="text-xs	text-zinc-600 pt-0.5">{colaborator.ORGANIZACION_ID}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
        {serch === "true" ? (
          <div className="flex gap-2">
            {/* Pill de Clasificación (siempre visible) */}
            <div className={`text-sm text-white px-3 py-1 mb-1 rounded-xl w-fit ${colorMap[calibracion?.[0]?.ID_CLASIFICACION]}`}>
              {calibracion?.[0]?.CLASIFICACION}
            </div>

            {/* Pill de Key Position (solo si existe) */}
            {calibracion?.[0]?.KEY_POSITION && (
              <div className="text-sm text-white font-medium px-3 py-1 mb-1 rounded-xl w-fit bg-black">
                {calibracion?.[0]?.KEY_POSITION}
              </div>
            )}
            
            {/* Pill de ELDP (solo si existe) */}
            {calibracion?.[0]?.ELDP && (
              <div className="text-sm text-white font-medium px-3 py-1 mb-1 rounded-xl w-fit bg-purple-600">
                {calibracion?.[0]?.ELDP}
              </div>
            )}

          </div>
        )
        : (
          <div className="flex gap-2">
            {calibracion?.[0]?.KEY_POSITION && 
              <div className='text-sm text-white font-medium px-3 py-1 mb-1 rounded-xl w-fit bg-black'>
                {calibracion?.[0]?.KEY_POSITION}
              </div>
            }
        
            {calibracion?.[0]?.ELDP && 
              <div className='text-sm text-white font-medium px-3 py-1 mb-1 rounded-xl w-fit bg-purple-600'>
                {calibracion?.[0]?.ELDP}
              </div>
            }
          </div>
        )
          }

          <p>
            <b>{origHireDate}:</b>
            {` ${colaborator.FECHA_CONTRATACION}`}
          </p>
         {/* <p>
            <b>{evaluators}:</b>
            {colaborator.NO_EVALUADORES}
          </p>*/}
          
          {calibracion?.map((cal, index) => (
            <div key={index}>
              <p>
                <b>
                  {cal.TITULO} {cal.ANO_EVAL}:
                </b>{" "}
                {cal.VALORES}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center p-4 bg-bmb-grey-10 justify-between">
        
          {(colaborator.EQUIPO == "1") & (sub === false) ? (
            <Link to={`/myteam/${colaborator.INTERNAL_ID}`}>
              <div className={colaborator.EQUIPO == "1" && "cursor-pointer"}>
                <Iconteam state="Active" />
              </div>
            </Link>
          ) : (
            <Iconteam state="Disabled" />
          )}

          <Link to={`/test/${colaborator.INTERNAL_ID}`}>
            <Button size="small" variation="link">
              {myteamViewDetail}
            </Button>
          </Link>
        </div>
        </div>
    </div>
  );
}

export default CardDos;
