import { Button } from "@aws-amplify/ui-react";
import Iconteam from "../ui-components/Iconteam";

function CardDos() {
    return (
      <div className="card">
        <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
            <img className="w-14 h-14 rounded-full" src="https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/Avatar.png"/>
            <p className="font-bold">Nombre del colaborador</p>
        </div>
        <div>
            <p>Calibración 2022: 4</p>
            <p>Calibración desempeño 2021: 4</p>
            <p>Comportamientos 2022: 4</p>
            <p>Colaboradores que evaluarion: 8/10</p>
        </div>
        <div className="flex items-center p-4 bg-bmb-grey-10 justify-between">
            <Iconteam/>
            <Button
            size="small"
            variation="link"
            >Ver detalles</Button>
        </div>
        </div>
      </div>
    );
  }
  
  export default CardDos;
  