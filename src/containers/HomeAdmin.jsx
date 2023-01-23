import React from "react";
import HeadAdminHome from "../ui-components/HeadAdminiHome";
import CardBtn from "../ui-components/CardBtn";
import CollaboratorsContext from "../context/collaborators";
import { useContext, useEffect } from "react";
import { Loader } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";

function HomeAdmin() {
  const { usuarioActualDatos, photo  } = useContext(CollaboratorsContext);

  const sendOverridesAdmin = {
    ImgCol: { src: photo },
    Name: {
      children: `${usuarioActualDatos.NOMBRE} ${usuarioActualDatos.APELLIDOS}`,
    },
    Job: { children: usuarioActualDatos.PUESTO },
  };

  const sendOverridesCard = {
    Title: { children: "Administración de notificaciones" },
  };
  const sendOverridesCard2 = {
    Title: { children: "Administración de Etiquetas" },
  };
  const sendOverridesCard3 = {
    Title: { children: "Mi equipo" },
  };

  if (usuarioActualDatos.NOMBRE == undefined) {
    return (
      <div className="h-screen flex justify-center items-center ">
        {" "}
        <Loader size="large" />
      </div>
    );
  }
  return (
    <div className="m-auto">
      <div className="m-8 flex self-stretch">
        <HeadAdminHome overrides={sendOverridesAdmin} width={"100%"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5 px-9">
        <div className="col-start-1 lg:col-start-2 col-span-2 cursor-pointer">
          <Link to="/test">
            <CardBtn width={"100%"} />
          </Link>
        </div>
        <div className="col-start-1 md:col-start-3 lg:col-start-4 col-span-2 cursor-pointer">
          <Link to="/notif">
            <CardBtn
              width={"100%"}
              type={"Notificaciones"}
              overrides={sendOverridesCard}
            />
          </Link>
        </div>
        <div className="col-start-1 lg:col-start-2 col-span-2 cursor-pointer">
          <Link to="/tags">
            <CardBtn
              width={"100%"}
              type={"Etiquetas"}
              overrides={sendOverridesCard2}
            />
          </Link>
        </div>
        <div className="col-start-1 md:col-start-3 lg:col-start-4 col-span-2 cursor-pointer">
          <Link to="/myteam">
            <CardBtn
              width={"100%"}
              type={"Equipo"}
              overrides={sendOverridesCard3}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;
