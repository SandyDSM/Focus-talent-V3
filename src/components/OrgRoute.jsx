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
  28342, //MERI
  27033, //MECHI
  //255978, //RAFA PAMIAS
  2655237, //LALI
  //10010552,
  1111111,
  332188, //LUCIANA
  //23570, DANIEL S
];

  if (!allowedIds.includes(Number(usuarioActualDatos.INTERNAL_ID))) {
    return <Navigate to="../containers/Forbidden" replace />;
  }

  return <Organigrama />;
}
