import React from "react";
import LoadingSpinner from './LoadingSpinner';
import { useEffect, useContext } from "react";
import CollaboratorsContext from "../context/collaborators";
import { useNavigate } from "react-router-dom";


function Validations() {
  const { usuarioActualDatos, isAdmin } = useContext(CollaboratorsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(usuarioActualDatos.ID_COLABORADOR!= undefined){
      isAdminister();
    }
  }, [usuarioActualDatos.ID_COLABORADOR]);

  //console.log(isAdmin);
  //console.log(usuarioActualDatos);

  function isAdminister() {
    if (isAdmin) {
      navigate("/home");
    } else {
      navigate("/myteam");
    }
  }
  return (
    <div className="h-screen flex justify-center items-center ">
      <LoadingSpinner size="large" />
    </div>
  );
}

export default Validations;
