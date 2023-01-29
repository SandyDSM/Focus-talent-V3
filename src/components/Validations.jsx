import React from "react";
import { useEffect, useContext } from "react";
import CollaboratorsContext from "../context/collaborators";
import { Loader } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

function Validations() {
  const { usuarioActualDatos, isAdmin, getCollaborators } = useContext(CollaboratorsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (usuarioActualDatos.ID_COLABORADOR != undefined) {
      getCollaborators(usuarioActualDatos.ID_COLABORADOR, "SetColaborators")
      .then(isAdminister())
    }
  }, [usuarioActualDatos.ID_COLABORADOR]);

  function isAdminister() {
    if (isAdmin) {
      navigate("/home");
    } else {
      navigate("/myteam");
    }
  }
  return (
    <div className="h-screen flex justify-center items-center ">
      <Loader size="large" />
    </div>
  );
}

export default Validations;
