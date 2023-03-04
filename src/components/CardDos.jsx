import { Button } from "@aws-amplify/ui-react";
import Iconteam from "../ui-components/Iconteam";
import { Link } from "react-router-dom";

function CardDos({colaborator}) {
    return (
      <div className="card">
        
        <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
            <img className="w-14 h-14 rounded-full" src= {`${colaborator.FOTO}` != "" ? `data:image/jpg;base64,${colaborator?.FOTO}` : "https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/Avatar.png" }/>
            <p className="font-bold">{`${colaborator.NOMBRE} ${colaborator.APELLIDOS}`}</p>
        </div>
        <div>
            <p>Calibración: 4</p>
            <p>Calibración desempeño: 4</p>
            <p>Comportamientos: 4</p>
            <p>Colaboradores que evaluaron: 8/10</p>
        </div>
        <div className="flex items-center p-4 bg-bmb-grey-10 justify-between">
          {colaborator.EQUIPO == "1" ? (
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
            >Ver detalles</Button></Link>
        </div>
        </div>
      </div>
    );
  }
  
  export default CardDos;
  