import { useState } from "react";
import { API } from "aws-amplify";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import i18n from "../i18n";

export default function useAuth({ onUserResolved, signOut }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [logueado, setLogueado] = useState({});
  const [usuarioActualDatos, setUsuarioActualDatos] = useState({});
  const [photo, setPhoto] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPerson, setShowPerson] = useState(true);
  const [sendCode, setSendCode] = useState(false);

  const UserLog = async () => {
    try {
      setIsLoading(true);
      const coguserdata = await Auth.currentUserInfo();
      setLogueado(coguserdata.attributes);
      getAttribColaborators(coguserdata.attributes.email);
    } catch (error) {
      console.log("error:", error);
    }
  };

  function getAttribColaboratorsDB(correo) {
    const apiName = "Usuarios";
    const path = "/getattribcolaborators";
    const myInit = {
      headers: {},
      queryStringParameters: {
        correo: `'${correo}'`,
      },
    };
    return API.get(apiName, path, myInit);
  }

  const getAttribColaborators = async (correo) => {
    try {
      setIsLoading(true);
      const datos = await getAttribColaboratorsDB(correo);
      setUsuarioActualDatos(datos[0]);

      if (
        localStorage.getItem("IdiomaUsuario") === null ||
        localStorage.getItem("IdiomaUsuario") === "undefined"
      ) {
        localStorage.setItem("IdiomaUsuario", datos[0].IDIOMA);
      }

      const esAdmin = datos[0].ADMIN;
      const langMap = { EN: "en", ES: "es", "English (US)": "en", "Spanish (Latin America)": "es" };
      i18n.changeLanguage(langMap[datos[0].IDIOMA] || "es");
      onUserResolved(datos[0].IDIOMA);

      if (esAdmin === "1") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }

      setPhoto(`data:image/jpg;base64,${datos[0].FOTO}`);
    } catch (error) {
      console.log("error aqui:", error);
      navigate("/forbidden");
      signOut();
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    setIsLoading,
    logueado,
    setLogueado,
    usuarioActualDatos,
    setUsuarioActualDatos,
    photo,
    setPhoto,
    isAdmin,
    setIsAdmin,
    showPerson,
    setShowPerson,
    sendCode,
    setSendCode,
    UserLog,
    getAttribColaborators,
  };
}
