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

  const sendOverridesCard = {
    Title: { children: "Administración de notificaciones" },
  };
  const sendOverridesCard2 = {
    Title: { children: "Administración de Etiquetas" },
  };
  const sendOverridesCard3 = {
    Title: { children: "Mi equipo" },
  };

  const sendOverridesCard4 = {
    Title: { children: "Mi equipo" },
    CardBtn: {
      backgroundColor: "#D9D9D9",
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
        <div className="col-start-1 lg:col-start-2 col-span-2 ">
          <Link to="/tags">
            <CardBtn
              width={"100%"}
              type={"Etiquetas"}
              overrides={sendOverridesCard2}
            />
          </Link>
        </div>
        <div className="col-start-1 md:col-start-3 lg:col-start-4 col-span-2">
          {
            colaboradores == 0 ? <CardBtn width={"100%"} type={"Equipo"} overrides={sendOverridesCard4}/> :
            <Link to="/myteam"><CardBtn width={"100%"} type={"Equipo"} overrides={sendOverridesCard3}/></Link>
          }
        </div>
      </div>
      <Button onClick={signOut} color="primary">Log Out</Button>
    </div>
  );
}

export default HomeAdmin;
