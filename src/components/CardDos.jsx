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
    const response = await getData('API PerfPoten', '/getcarddata', parametros);
    setCalibracion(response)
    //console.log("Calib",response)
  }catch (error) {
    setCalibracion([]);
    console.log("error:", error);
  }
};

  useEffect(() => {
    getcalib(colaborator.INTERNAL_ID);
    setSubOne(sub);
  }, []);

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
            <p className="font-bold">{`${colaborator.NOMBRE.toUpperCase()} ${colaborator.APELLIDOS.toUpperCase()}`}</p>
            <div className="flex items-center gap-1">
            <IconProfile type="id"/>
            <p className="text-xs	text-zinc-600">{colaborator.ID_COLABORADOR}</p>
            </div>
          </div>
        </div>
        <div>
          {serch === "true" && <div className="text-sm	px-3 py-1 mb-1 bg-bmb-secundary text-white rounded-xl	w-fit	">{calibracion?.[0]?.CLASIFICACION}</div>}
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
