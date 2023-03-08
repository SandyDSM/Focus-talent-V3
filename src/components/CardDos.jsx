import { Button } from "@aws-amplify/ui-react";
import Iconteam from "../ui-components/Iconteam";
import { Link } from "react-router-dom";
import React, {useContext, useState, useEffect } from "react";
import CollaboratorsContext from "../context/collaborators";

function CardDos({colaborator, sub}) {
  const{origHireDate, evaluators, myteamViewDetail} =useContext(CollaboratorsContext);
 const[calibracion, setCalibracion]=useState([]); 
  
  const getcalib= async (id) => {
    try {
      //setIsLoading(true);
      const respdesemp = await fetch(
        `https://talento-itzahuia.com/SAC/gb_info_calib.php?ID=${id}`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json"
          },
        }
      ); 
      const datos = await respdesemp.json();
      setCalibracion(datos);
        } catch (error) {
      setCalibracion([]);
    } 
  };
  
  useEffect(() => {
    getcalib(colaborator.INTERNAL_ID);
  }, []);
  
  
  
  return (
      <div className="card">
        
        <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
            <img className="w-14 h-14 rounded-full" src= {`${colaborator.FOTO}` != "" ? `data:image/jpg;base64,${colaborator?.FOTO}` : "https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/Avatar.png" }/>
            <p className="font-bold">{`${colaborator.NOMBRE} ${colaborator.APELLIDOS}`}</p>                       
        </div>
        <div>
        <p><b>{origHireDate}:</b>{colaborator.FECHA_CONTRATACION}</p>
        <p><b>{evaluators}:</b>{colaborator.NO_EVALUADORES}</p>
          {calibracion?.map((cal, index)=>(
            <>
            <p key={index}><b>{cal.TITULO} {cal.ANO_EVAL}:</b> {cal.VALORES}</p>
            </>
            ))}
            
        </div>
        <div className="flex items-center p-4 bg-bmb-grey-10 justify-between">
          {colaborator.EQUIPO == "1" & sub === false  ? (
            <Link to={`/myteam/${colaborator.INTERNAL_ID}`} >
              <div className={colaborator.EQUIPO == "1"  && "cursor-pointer"}>
                <Iconteam state="Active"/>
              </div>
            </Link>
          ) : <Iconteam state="Disabled"/>}
          
        <Link to={`/test/${colaborator.INTERNAL_ID}`} >
            <Button
            size="small"
            variation="link"
            >{myteamViewDetail}</Button></Link>
        </div>
        </div>
      </div>
    );
  }
  
  export default CardDos;
  