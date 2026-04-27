// OrgRoutes.js
import React from "react";
import { Navigate } from "react-router-dom";
import Organigrama from  "../containers/Organigrama";
import CollaboratorsContext from "../context/collaborators";
import { useContext } from "react";

 

export default function OrgRoute() {
 const {usuarioActualDatos} = useContext(CollaboratorsContext);
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

  if (!allowedIds.includes(Number(usuarioActualDatos.INTERNAL_ID))) {
    return <Navigate to="../containers/Forbidden" replace />;
  }

  return <Organigrama />;
}
