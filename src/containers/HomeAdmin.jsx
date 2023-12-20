import React from "react";
import HeadAdminHome from "../ui-components/HeadAdminiHome";
import CardBtn from "../ui-components/CardBtn";
import CollaboratorsContext from "../context/collaborators";
import { useContext, useEffect } from "react";
import { Loader, Button } from "@aws-amplify/ui-react";
import { Link, useNavigate } from "react-router-dom";


function HomeAdmin({signOut}) {
  const { usuarioActualDatos, photo, isAdmin, isLoading, setShowPerson, showPerson } = useContext(CollaboratorsContext);
  const navigate = useNavigate();

  useEffect(() => {
    desmontar();
    return ()=> montar();
  }, []);


  function desmontar(){
    setShowPerson(false)
  }
  function montar(){
    setShowPerson(true)
  }
  //console.log("cols", collaborators.length)
 
  const colaboradores = usuarioActualDatos.EQUIPO;

  const sendOverridesAdmin = {
    ImgCol: { src: photo },
    Name: {
      children: `${usuarioActualDatos.NOMBRE} ${usuarioActualDatos.APELLIDOS}`,
    },
    Job: { children: usuarioActualDatos.PUESTO },
  };

  const sendOverridesCardTest = {
    Title: { children: "Evaluaciones de desempeño y potencial" },
  };
  const sendOverridesCard = {
    Title: { children: "Administración de notificaciones" },
    CardBtn: {
      backgroundColor: "#8CAEF2",
    }
  };
  const sendOverridesCard2 = {
    Title: { children: "Administración de etiquetas" },
    CardBtn: {
      backgroundColor: "#6392ED",
    }
  };
  const sendOverridesCard3 = {
    Title: { children: "Mi equipo" },
    CardBtn: {
      backgroundColor: "#3F78E9",
    }
  };

  const sendOverridesCard4 = {
    Title: { children: "Mi equipo" },
    CardBtn: {
      backgroundColor: "#3F78E9",
    }
  };
  const sendOverridesCard5 = {
    Title: { children: "Administrar permisos de busqueda" },
    CardBtn: {
      backgroundColor: "#315FB9",
    }
  };
  const sendOverridesCard6 = {
    Title: { children: "Reporte de Accesos" },
    CardBtn: {
      backgroundColor: "#203C74",
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <Loader size="large" />
      </div>
    );
  }

  if (usuarioActualDatos.NOMBRE == undefined) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <Loader size="large" />
      </div>
    );
  }
  return (
    <div className="m-auto">
      <div className="m-8 flex self-stretch">
        <HeadAdminHome overrides={sendOverridesAdmin} width={"100%"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5 px-9 lg:px-20">
        <div className="col-start-1 col-span-2 cursor-pointer">
          <Link to="/test">
            <CardBtn width={"100%"} overrides={sendOverridesCardTest} />
          </Link>
        </div>
        <div className=" col-span-2 cursor-pointer">
          <Link to="/notif">
            <CardBtn
              width={"100%"}
              type={"Notificaciones"}
              overrides={sendOverridesCard}
            />
          </Link>
        </div>
        <div className=" col-span-2 ">
          <Link to="/tags">
            <CardBtn
              width={"100%"}
              type={"Etiquetas"}
              overrides={sendOverridesCard2}
            />
          </Link>
        </div>
        <div className=" col-span-2">
          {
            colaboradores == 0 ? <CardBtn width={"100%"} type={"Equipo"} overrides={sendOverridesCard4}/> :
            <Link to="/myteam"><CardBtn width={"100%"} type={"Equipo"} overrides={sendOverridesCard3}/></Link>
          }
        </div>
        <div className="col-span-2 ">
          <Link to="/permissions">
            <CardBtn
              width={"100%"}
              type={"Equipo"}
              overrides={sendOverridesCard5}
            />
          </Link>
        </div>
        <div className="col-span-2 ">
          <Link to="/reportlogin">
            <CardBtn
              width={"100%"}
              overrides={sendOverridesCard6}
            />
          </Link>
        </div>
      </div>
      <div className="my-2 mx-2 md:mx-8">
        <Button onClick={signOut} color="primary">Log Out</Button>
      </div>
    </div>
  );
}

export default HomeAdmin;
