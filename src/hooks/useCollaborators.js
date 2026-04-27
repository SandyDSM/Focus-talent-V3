import { useState } from "react";
import { API } from "aws-amplify";

export default function useCollaborators({ usuarioActualDatos, setIsLoading }) {
  const [collaborators, setCollaborators] = useState([]);
  const [subcollaborators, setSubcollaborators] = useState([]);
  const [collDetail, setCollDetail] = useState([]);
  const [collaboratorsPhotos, setCollaboratorsPhotos] = useState([]);
  const [collaboratorsResp, setCollaboratorsResp] = useState([]);
  const [teamOne, setTeamOne] = useState([]);
  const [subOne, setSubOne] = useState(false);
  const [resultsComplete, setResultsComplete] = useState([]);
  const [resultsCompleteOrg, setResultsCompleteOrg] = useState([]);

  // Colaboradores categorizados (nivel principal)
  const [futleader, setFutleader] = useState([]);
  const [respfutleader, setRespfutleader] = useState([]);
  const [pillbusiness, setPillbusiness] = useState([]);
  const [resppillbusiness, setRespillbusiness] = useState([]);
  const [basebusiness, setBasebusiness] = useState([]);
  const [respbasebusiness, setResbasebusiness] = useState([]);
  const [noteval, setNoteval] = useState([]);
  const [respnoteval, setResnoteval] = useState([]);
  const [notaply, setNotaply] = useState([]);
  const [respnotaply, setRespnotaply] = useState([]);

  // Sub-colaboradores categorizados
  const [futleadersub, setFutleadersub] = useState([]);
  const [respfutleadersub, setRespfutleadersub] = useState([]);
  const [pillbusinesssub, setPillbusinesssub] = useState([]);
  const [resppillbusinesssub, setRespillbusinesssub] = useState([]);
  const [basebusinesssub, setBasebusinesssub] = useState([]);
  const [respbasebusinesssub, setResbasebusinesssub] = useState([]);
  const [notevalsub, setNotevalsub] = useState([]);
  const [respnotevalsub, setResnotevalsub] = useState([]);
  const [notaplysub, setNotaplysub] = useState([]);
  const [respnotaplysub, setRespnotaplysub] = useState([]);

  // Paginación
  const [maxPorPagina, setmaxPorPagina] = useState(9);
  const [ObjTrabajo, setObjTrabajo] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  // ── Paginación ──────────────────────────────────────────────────────────────

  function separa(datos) {
    if (datos) {
      let firstpanels = [];
      firstpanels[0] = [...datos].splice(0, maxPorPagina);
      for (let i = 1; i < Math.ceil(datos.length / maxPorPagina); i++) {
        firstpanels[i] = [...datos].splice(i * maxPorPagina, maxPorPagina);
      }
      return firstpanels;
    } else {
      return (datos = 0);
    }
  }

  let separadosCol = separa(collaborators);
  let separadosSub = separa(subcollaborators);

  const datosFiltrados = (val) => {
    setObjTrabajo(ObjTrabajo.concat(val));
    separadosCol = separa(ObjTrabajo);
  };

  const defineMax = (valor) => {
    if (valor === "nueve") {
      setmaxPorPagina(9);
    } else if (valor === "doce") {
      setmaxPorPagina(12);
    } else if (valor === "quince") {
      setmaxPorPagina(15);
    } else if (valor === "dieciocho") {
      setmaxPorPagina(18);
    }
  };

  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);
  const setActual = (value) => setCurrentPage(value);

  // ── Ordenamiento y filtros ───────────────────────────────────────────────────

  const ordena = function (orden) {
    const collatemp = collaborators;
    if (orden === "descendente") {
      const tempdescendente = collatemp.sort((a, b) => {
        if (a.APELLIDOS < b.APELLIDOS) return 1;
        if (a.APELLIDOS > b.APELLIDOS) return -1;
        return 0;
      });
      actualizaBusqueda([...tempdescendente]);
    } else {
      const temascendente = collatemp.sort((a, b) => {
        if (a.APELLIDOS > b.APELLIDOS) return 1;
        if (a.APELLIDOS < b.APELLIDOS) return -1;
        return 0;
      });
      actualizaBusqueda([...temascendente]);
    }
  };

  const actualizaBusqueda = function (users, opcion) {
    if (opcion === 1) {
      setFutleader(users);
    } else if (opcion === 2) {
      setPillbusiness(users);
    } else if (opcion === 3) {
      setBasebusiness(users);
    } else if (opcion === 4) {
      setNoteval(users);
    } else if (opcion === 5) {
      setNotaply(users);
    }
  };

  const actualizaBusquedaSub = function (users, opcion) {
    if (opcion === 1) {
      setFutleadersub(users);
    } else if (opcion === 2) {
      setPillbusinesssub(users);
    } else if (opcion === 3) {
      setBasebusinesssub(users);
    } else if (opcion === 4) {
      setNotevalsub(users);
    } else if (opcion === 5) {
      setNotaplysub(users);
    }
  };

  const restauraUsuarios = function () {
    setCollaborators(collaboratorsResp);
    separadosCol = separa(collaborators);
  };

  const restauraUserClasif = function (value) {
    if (value === 1) {
      setFutleader(respfutleader);
    } else if (value === 2) {
      setPillbusiness(resppillbusiness);
    } else if (value === 3) {
      setBasebusiness(respbasebusiness);
    } else if (value === 4) {
      setNoteval(respnoteval);
    }
  };

  // ── Datos de puestos y organizaciones ───────────────────────────────────────

  function obtenPuesto() {
    let datos = collaboratorsResp;
    let puestos = [];
    for (let i = 0; i < datos.length; i++) {
      puestos[i] = datos[i].PUESTO;
    }
    return puestos.filter((item, index) => puestos.indexOf(item) === index);
  }

  function obtenOrganizacion() {
    let datos = collaboratorsResp;
    let organizaciones = [];
    for (let i = 0; i < datos.length; i++) {
      organizaciones[i] = datos[i].ORGANIZACION;
    }
    return organizaciones.filter((item, index) => organizaciones.indexOf(item) === index);
  }

  // ── API calls ────────────────────────────────────────────────────────────────

  function getCollaboratorsDB(idJefe) {
    const apiName = "Usuarios";
    const path = "/getcollaborators";
    const myInit = {
      headers: {},
      queryStringParameters: {
        idJefe: `'${idJefe}'`,
      },
    };
    return API.get(apiName, path, myInit);
  }

  const getCollaborators = async (idJefe, accion) => {
    try {
      setIsLoading(true);
      const datos = await getCollaboratorsDB(idJefe);

      if (accion === "SetColaborators") {
        setCollaborators(datos);
        setCollaboratorsResp(datos);
        setFutleader(datos?.filter((c) => c.CATEGORIA === "Alto Potencial" || c.CATEGORIA === "Alto Potencial *" || c.CATEGORIA === "High potential" || c.CATEGORIA === "High potential *" || c.CATEGORIA === "Futuro líder *"));
        setRespfutleader(datos?.filter((c) => c.CATEGORIA === "Future leader" || c.CATEGORIA === "Future leader *" || c.CATEGORIA === "Futuro líder" || c.CATEGORIA === "Futuro líder *"));
        setPillbusiness(datos?.filter((c) => c.CATEGORIA === "Talento Promesa" || c.CATEGORIA === "Talento Promesa *" || c.CATEGORIA === "Promising" || c.CATEGORIA === "Promising *" || c.CATEGORIA === "Pilar de negocio *"));
        setRespillbusiness(datos?.filter((c) => c.CATEGORIA === "Business pillar" || c.CATEGORIA === "Business pillar *" || c.CATEGORIA === "Pilar de negocio" || c.CATEGORIA === "Pilar de negocio *"));
        setBasebusiness(datos?.filter((c) => c.CATEGORIA === "Talento Esencial" || c.CATEGORIA === "Talento Esencial *" || c.CATEGORIA === "Essential Talent" || c.CATEGORIA === "Essential Talent *" || c.CATEGORIA === "Cimiento de negocio *"));
        setResbasebusiness(datos?.filter((c) => c.CATEGORIA === "Business foundation *" || c.CATEGORIA === "Business foundation" || c.CATEGORIA === "Cimiento de negocio" || c.CATEGORIA === "Cimiento de negocio *"));
        setNoteval(datos?.filter((c) => c.CATEGORIA === "No evaluados en potencial"));
        setResnoteval(datos?.filter((c) => c.CATEGORIA === "No evaluados en potencial"));
        setNotaply(datos?.filter((c) => c.CATEGORIA === "N/A" || c.CATEGORIA === null));
        setRespnotaply(datos?.filter((c) => c.CATEGORIA === "N/A" || c.CATEGORIA === null));
      } else if (accion === "SetSubColaborators") {
        setSubcollaborators(datos);
        setFutleadersub(datos?.filter((c) => c.CATEGORIA === "Alto Potencial" || c.CATEGORIA === "Alto Potencial *" || c.CATEGORIA === "High potential" || c.CATEGORIA === "High potential *" || c.CATEGORIA === "Futuro líder *"));
        setRespfutleadersub(datos?.filter((c) => c.CATEGORIA === "Future leader" || c.CATEGORIA === "Future leader *" || c.CATEGORIA === "Futuro líder" || c.CATEGORIA === "Futuro líder *"));
        setPillbusinesssub(datos?.filter((c) => c.CATEGORIA === "Talento Promesa" || c.CATEGORIA === "Talento Promesa *" || c.CATEGORIA === "Promising" || c.CATEGORIA === "Promising *" || c.CATEGORIA === "Pilar de negocio *"));
        setRespillbusinesssub(datos?.filter((c) => c.CATEGORIA === "Business pillar" || c.CATEGORIA === "Business pillar *" || c.CATEGORIA === "Pilar de negocio" || c.CATEGORIA === "Pilar de negocio *"));
        setBasebusinesssub(datos?.filter((c) => c.CATEGORIA === "Talento Esencial" || c.CATEGORIA === "Talento Esencial *" || c.CATEGORIA === "Essential Talent" || c.CATEGORIA === "Essential Talent *" || c.CATEGORIA === "Cimiento de negocio *"));
        setResbasebusinesssub(datos?.filter((c) => c.CATEGORIA === "Business foundation *" || c.CATEGORIA === "Business foundation" || c.CATEGORIA === "Cimiento de negocio" || c.CATEGORIA === "Cimiento de negocio *"));
        setNotevalsub(datos?.filter((c) => c.CATEGORIA === "No evaluados en potencial"));
        setResnotevalsub(datos?.filter((c) => c.CATEGORIA === "No evaluados en potencial"));
        setNotaplysub(datos?.filter((c) => c.CATEGORIA === "N/A" || c.CATEGORIA === null));
        setRespnotaplysub(datos?.filter((c) => c.CATEGORIA === "N/A" || c.CATEGORIA === null));
      }
    } catch (error) {
      if (accion === "SetColaborators") {
        setCollaborators([]);
      } else if (accion === "SetSubColaborators") {
        setSubcollaborators([]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  function getCollDetailDB(id) {
    const apiName = "Usuarios";
    const path = "/getcolldetail";
    const myInit = {
      headers: {},
      queryStringParameters: { id },
    };
    return API.get(apiName, path, myInit);
  }

  const getCollDetail = async (id) => {
    setIsLoading(true);
    try {
      const datos = await getCollDetailDB(id);
      setCollDetail(datos[0]);
    } catch (error) {
      console.log("error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  function getDataClic(busqueda) {
    const apiName = "Usuarios";
    const path = "/getallusers";
    const myInit = {
      headers: {},
      queryStringParameters: {
        BUSQUEDA: `${busqueda}`,
        USERID: `${usuarioActualDatos.INTERNAL_ID}`,
      },
    };
    return API.get(apiName, path, myInit);
  }

  const fetchCollAllClic = async (busqueda) => {
    try {
      setIsLoading(true);
      const response = await getDataClic(busqueda);
      setResultsComplete(response);
      setResultsCompleteOrg(response);
    } catch (error) {
      console.log("error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    collaborators,
    setCollaborators,
    subcollaborators,
    setSubcollaborators,
    collDetail,
    setCollDetail,
    collaboratorsPhotos,
    setCollaboratorsPhotos,
    collaboratorsResp,
    setCollaboratorsResp,
    teamOne,
    setTeamOne,
    subOne,
    setSubOne,
    resultsComplete,
    setResultsComplete,
    resultsCompleteOrg,
    setResultsCompleteOrg,
    // categorías principal
    futleader,
    respfutleader,
    pillbusiness,
    resppillbusiness,
    basebusiness,
    respbasebusiness,
    noteval,
    respnoteval,
    notaply,
    respnotaply,
    // categorías sub
    futleadersub,
    respfutleadersub,
    pillbusinesssub,
    resppillbusinesssub,
    basebusinesssub,
    respbasebusinesssub,
    notevalsub,
    respnotevalsub,
    notaplysub,
    respnotaplysub,
    // paginación
    maxPorPagina,
    ObjTrabajo,
    currentPage,
    separadosCol,
    separadosSub,
    // funciones
    getCollaborators,
    getCollDetail,
    ordena,
    actualizaBusqueda,
    actualizaBusquedaSub,
    restauraUsuarios,
    restauraUserClasif,
    datosFiltrados,
    defineMax,
    paginateFront,
    paginateBack,
    setActual,
    obtenPuesto,
    obtenOrganizacion,
    fetchCollAllClic,
  };
}
