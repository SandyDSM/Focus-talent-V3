import CollaboratorsContext from "./index";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";


//import { listUsers, getUsers } from "../../graphql/queries";

export default function CollaboratorsProvider({ children, signOut }) {
  const [collaborators, setCollaborators] = useState([]);
  const [subcollaborators, setSubcollaborators] = useState([]);
  const [collDetail, setCollDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [logueado, setLogueado] = useState({});
  const [usuarioActualDatos, setUsuarioActualDatos] = useState({});
  const [photo, setPhoto] = useState("");
  const [collaboratorsPhotos, setCollaboratorsPhotos] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [collaboratorsResp, setCollaboratorsResp] = useState([]);
  const [showPerson, setShowPerson] = useState(true)
  const [sendCode, setSendCode] = useState(false);
  const [teamOne, setTeamOne] = useState([]);
  const [subOne, setSubOne] = useState(false);
  const [resultsComplete, setResultsComplete] = useState([])
  const [resultsCompleteOrg, setResultsCompleteOrg] = useState([])
  
//estados de usuario categorizado
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

//estados de subusuario categorizado
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
//Etiquetas web
const[banerSearch, setBanerSearch]=useState('Potencial 2022');
const[busqueda, setBusqueda]=useState('Buscar Colaborador');
const[myteamOption1, setMyteamOption1]=useState('Futuro Líder');
const[myteamOption2, setMyteamOption2]=useState('Pilar de negocio');
const[myteamOption3, setMyteamOption3]=useState('Cimiento de negocio');
const[myteamOption4, setMyteamOption4]=useState('No evaluados en potencial');
const[myteamOption5, setMyteamOption5]=useState('No aplica');
const[myteamViewDetail, setMyteamViewDetail]=useState('Ver detalles');
const[teamFrom, setTeamFrom]=useState('Equipo de');
const[evalTxt, setEvalTxt]=useState('Eval. de');
const[noColaborators, setNoColaborators]=useState('No hay colaboradores en esta categoría');
const[origHireDate, setOrigHireDate]=useState('Fecha de Contratación');
const[evaluators, setEvaluators ]=useState('Colaboradores que evaluaron');
const[noData, setNoData]=useState('No existen datos');
const[filterEvaluations, setFilterEvaluations]=useState('EVALUACIONES');
const[buttonSelectAll, setButtonSelectAll]=useState('Seleccionar Todo');
const[buttonClear, setButtonClear]=useState('Limpiar');
const[buttonView, setButtonView]=useState('Ver');
const[buttonBack, setButtonBack]=useState('Regresar');
const[buttonMyTeam, setButtonMyTeam]=useState('Mi Equipo');
const[downloadPDF, setDownloadPDF]=useState('Descargar PDF');
const[downloadAllPDF, setDownloadAllPDF]=useState('Descargar todo PDF');
const[perReview, setPerReview]=useState('Evaluación de Desempeño');
const [behaReview, setBehaReview]=useState('Comportamientos');
const [managerReview, setManagerReview]=useState('Evaluación Jefe Directo');
const [reviewer, setReviewer]=useState('Revisor');
const [rating, setRating]=useState('Clasificación');
const [comments, setComments]=useState('Comentarios');
const [subReview, setSubReview]=useState('Evaluación de Reportes directos');
const [potReview, setPotReview]=useState('Evaluación de potencial');




const navigate = useNavigate();

  const UserLog = async () => {
    try {
      setIsLoading(true);
      const coguserdata = await Auth.currentUserInfo();
      setLogueado(coguserdata.attributes);
      //console.log("mail",coguserdata.attributes.email);
      getAttribColaborators(coguserdata.attributes.email);
    } catch (error) {
      console.log("error:", error);
    }
  };
////////////////////////////////////////7
function getData(idioma) {
  const apiName = 'API Behaviors';
  const path = '/translations';
  const myInit = {
    headers: {}, // OPTIONAL
    queryStringParameters: {
      LANGUAGE: `'${idioma}'`,
    }
  };

  return API.get(apiName, path, myInit);
}

const fetcLanguage = async (idioma) => {
  try{
    const response = await getData(idioma);
   // console.log("Languajeeeee",response);
   
   response?.filter((c)=>(c.ETIQUETA=='banersearch')).map((trad)=>(setBanerSearch(trad.TRADUCCION)));
   response?.filter((c)=>(c.ETIQUETA=='busqueda')).map((trad)=>(setBusqueda(trad.TRADUCCION)));
   response?.filter((c)=>(c.ETIQUETA=='myteamoption1')).map((trad)=>(setMyteamOption1(trad.TRADUCCION)));
   response?.filter((c)=>(c.ETIQUETA=='myteamoption2')).map((trad)=>(setMyteamOption2(trad.TRADUCCION)));
   response?.filter((c)=>(c.ETIQUETA=='myteamoption3')).map((trad)=>(setMyteamOption3(trad.TRADUCCION)));
   response?.filter((c)=>(c.ETIQUETA=='myteamoption4')).map((trad)=>(setMyteamOption4(trad.TRADUCCION)));
   response?.filter((c)=>(c.ETIQUETA=='myteamoption5')).map((trad)=>(setMyteamOption5(trad.TRADUCCION)));
   response?.filter((c)=>(c.ETIQUETA=='myteamviewdetail')).map((trad)=>(setMyteamViewDetail(trad.TRADUCCION)));
   response?.filter((c)=>(c.ETIQUETA=='teamfrom')).map((trad)=>(setTeamFrom(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='nocollaborators')).map((trad)=>(setNoColaborators(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='orighiredate')).map((trad)=>(setOrigHireDate(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='evaluators')).map((trad)=>(setEvaluators(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='nodata')).map((trad)=>(setNoData(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='filterevaluations')).map((trad)=>(setFilterEvaluations(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='buttonselectall')).map((trad)=>(setButtonSelectAll(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='buttonclear')).map((trad)=>(setButtonClear(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='buttonview')).map((trad)=>(setButtonView(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='buttonback')).map((trad)=>(setButtonBack(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='buttonmyteam')).map((trad)=>(setButtonMyTeam(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='downloadpdf')).map((trad)=>(setDownloadPDF(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='downloadallpdf')).map((trad)=>(setDownloadAllPDF(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='perreview')).map((trad)=>(setPerReview(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='behareview')).map((trad)=>(setBehaReview(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='managerreview')).map((trad)=>(setManagerReview(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='reviewer')).map((trad)=>(setReviewer(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='rating')).map((trad)=>(setRating(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='comments')).map((trad)=>(setComments(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='subreview')).map((trad)=>(setSubReview(trad.TRADUCCION)));
response?.filter((c)=>(c.ETIQUETA=='potreview')).map((trad)=>(setPotReview(trad.TRADUCCION)));

  }catch (error) {
    console.log("error:", error);
  }
};
/////////////////////////////////////
function getAttribColaboratorsDB(correo) {
  //console.log(correo)
  const apiName = 'Usuarios';
  const path = '/getattribcolaborators';
  const myInit = {
    headers: {}, // OPTIONAL
    queryStringParameters: {
      correo: `'${correo}'`,
    }
  };

  return API.get(apiName, path, myInit);
}


/////////////////////////////////////
 
  const getAttribColaborators = async (correo) => {
    //console.log(correo);
    try{
      const datos = await getAttribColaboratorsDB(correo);
      setUsuarioActualDatos(datos[0])
    //console.log("AQUI",datos[0]);
if(localStorage.getItem("IdiomaUsuario")===null || localStorage.getItem("IdiomaUsuario")==="undefined"){
  localStorage.setItem("IdiomaUsuario", datos[0].IDIOMA);
}      
      const esAdmin = datos[0].ADMIN;
      fetcLanguage(datos[0].IDIOMA);
      if(esAdmin === "1") {
        setIsAdmin(true);
      }else {
        setIsAdmin(false);
      }
      setPhoto(`data:image/jpg;base64,${datos[0].FOTO}`);

    } catch (error) {
      console.log("error aqui:", error);
      navigate("/forbidden");
      signOut();

    }finally {
      setIsLoading(false);
    }
  };

  
  const ordena=function(orden){
    const collatemp=collaborators;
    if(orden==="descendente"){
       const tempdescendente=collatemp.sort((a, b) => {
       if (a.APELLIDOS.toUpperCase() < b.APELLIDOS.toUpperCase()) return 1
       if (a.APELLIDOS.toUpperCase() > b.APELLIDOS.toUpperCase()) return -1
       return 0
     });
     
     actualizaBusqueda([...tempdescendente]); //a 
     
    }else{
    const temascendente= collatemp.sort((a, b) => {
       if (a.APELLIDOS.toUpperCase() > b.APELLIDOS.toUpperCase()) return 1
       if (a.APELLIDOS.toUpperCase() < b.APELLIDOS.toUpperCase()) return -1
       return 0
     });
     actualizaBusqueda([...temascendente]);       
    }
   };
  //const UserPromise = UserLog().then(getAttribColaborators(logueado.email)) 

  const actualizaBusqueda=function(users, opcion){
    if(opcion===1){
    setFutleader(users);
    }else if(opcion===2){
      setPillbusiness(users);
    }else if(opcion===3){
      setBasebusiness(users);
    }else if(opcion===4){
      setNoteval(users);
    }else if(opcion===5){
      setNotaply(users);
    }     
  }

  const actualizaBusquedaSub=function(users, opcion){
    if(opcion===1){
    setFutleadersub(users);
    }else if(opcion===2){
      setPillbusinesssub(users);
    }else if(opcion===3){
      setBasebusinesssub(users);
    }else if(opcion===4){
      setNotevalsub(users);
    }else if(opcion===5){
      setNotaplysub(users);
    }

     
  }

  const restauraUsuarios=function(){
    setCollaborators(collaboratorsResp);

    separadosCol=separa(collaborators);
    console.log("log de colabora: ", collaborators)
  }

const restauraUserClasif=function(value){
  if(value===1){
    setFutleader(respfutleader);  
  }else if(value===2){
    setPillbusiness(resppillbusiness);  
  }else if(value===3){
    setBasebusiness(respbasebusiness);  
  }else if(value===4){
    setNoteval(respnoteval);
  }
}

function getCollaboratorsDB(idJefe) {
  const apiName = 'Usuarios';
  const path = '/getcollaborators';
  const myInit = {
    headers: {}, // OPTIONAL
    queryStringParameters: {
      idJefe: `'${idJefe}'`,
    }
  };

  return API.get(apiName, path, myInit);
}

  const getCollaborators = async (idJefe, accion) => {
    //console.log("El id de jefe es:", idJefe);
    try {
      setIsLoading(true);
      const datos = await getCollaboratorsDB(idJefe);
      //console.log("Resultado de team: ", datos);
      if(accion==="SetColaborators"){
        setCollaborators(datos);
        setCollaboratorsResp(datos);
        setFutleader(datos?.filter(c => (c.CATEGORIA === "Future leader" || c.CATEGORIA === "Future leader *" || c.CATEGORIA === "Futuro líder" || c.CATEGORIA === "Futuro líder *")));
        setRespfutleader(datos?.filter(c => (c.CATEGORIA === "Future leader" || c.CATEGORIA === "Future leader *" || c.CATEGORIA === "Futuro líder" || c.CATEGORIA === "Futuro líder *")));
        setPillbusiness(datos?.filter(c => (c.CATEGORIA === "Business pillar" || c.CATEGORIA === "Business pillar *" || c.CATEGORIA === "Pilar de negocio" || c.CATEGORIA === "Pilar de negocio *")));
        setRespillbusiness(datos?.filter(c => (c.CATEGORIA === "Business pillar" || c.CATEGORIA === "Business pillar *" || c.CATEGORIA === "Pilar de negocio" || c.CATEGORIA === "Pilar de negocio *")));
        setBasebusiness(datos?.filter(c => (c.CATEGORIA === "Business foundation *" || c.CATEGORIA === "Business foundation" || c.CATEGORIA === "Cimiento de negocio" || c.CATEGORIA === "Cimiento de negocio *")));
        setResbasebusiness(datos?.filter(c => (c.CATEGORIA === "Business foundation *" || c.CATEGORIA === "Business foundation" || c.CATEGORIA === "Cimiento de negocio" || c.CATEGORIA === "Cimiento de negocio *")));
        setNoteval(datos?.filter(c => (c.CATEGORIA === "No evaluados en potencial" )));
        setResnoteval(datos?.filter(c => (c.CATEGORIA === "No evaluados en potencial")));
        setNotaply(datos?.filter(c => (c.CATEGORIA === "N/A" || c.CATEGORIA ===null)));
        setRespnotaply(datos?.filter(c => (c.CATEGORIA === "N/A" || c.CATEGORIA ===null)));
        }else if(accion==="SetSubColaborators"){
          setSubcollaborators(datos);
          setFutleadersub(datos?.filter(c => (c.CATEGORIA === "Future leader" || c.CATEGORIA === "Future leader *" || c.CATEGORIA === "Futuro líder" || c.CATEGORIA === "Futuro líder *")));
          setRespfutleadersub(datos?.filter(c => (c.CATEGORIA === "Future leader" || c.CATEGORIA === "Future leader *" || c.CATEGORIA === "Futuro líder" || c.CATEGORIA === "Futuro líder *")));
          setPillbusinesssub(datos?.filter(c => (c.CATEGORIA === "Business pillar" || c.CATEGORIA === "Business pillar *" || c.CATEGORIA === "Pilar de negocio" || c.CATEGORIA === "Pilar de negocio *")));
          setRespillbusinesssub(datos?.filter(c => (c.CATEGORIA === "Business pillar" || c.CATEGORIA === "Business pillar *" || c.CATEGORIA === "Pilar de negocio" || c.CATEGORIA === "Pilar de negocio *")));
          setBasebusinesssub(datos?.filter(c => (c.CATEGORIA === "Business foundation *" || c.CATEGORIA === "Business foundation" || c.CATEGORIA === "Cimiento de negocio" || c.CATEGORIA === "Cimiento de negocio *")));
          setResbasebusinesssub(datos?.filter(c => (c.CATEGORIA === "Business foundation *" || c.CATEGORIA === "Business foundation" || c.CATEGORIA === "Cimiento de negocio" || c.CATEGORIA === "Cimiento de negocio *")));
          setNotevalsub(datos?.filter(c => (c.CATEGORIA === "No evaluados en potencial" )));
          setResnotevalsub(datos?.filter(c => (c.CATEGORIA === "No evaluados en potencial" )));
          setNotaplysub(datos?.filter(c => (c.CATEGORIA === "N/A" || c.CATEGORIA ===null)));
          setRespnotaplysub(datos?.filter(c => (c.CATEGORIA === "N/A" || c.CATEGORIA ===null)));
          
        }
    } catch (error) {
      if(accion==="SetColaborators"){
        setCollaborators([]);
        }else if(accion==="SetSubColaborators"){
          setSubcollaborators([]);
        }
    } finally {
      setIsLoading(false);
    }
  };

  function getCollDetailDB(id) {
    const apiName = 'Usuarios';
    const path = '/getcolldetail';
    const myInit = {
      headers: {}, // OPTIONAL
      queryStringParameters: {
        id: id,
      }
    };
  
    return API.get(apiName, path, myInit);
  }
  

  const getCollDetail = async (id) => {
    try {
      setIsLoading(true);
      const datos = await getCollDetailDB(id);
      setCollDetail(datos[0]);
     // console.log("coll detail",datos[0])
    } catch (error) {
      console.log("error:", error);
      setCollDetail([]);
    }finally {
      setIsLoading(false);
    }
  };

  const PhotoBucket = async (idPhoto) => {
    const userPhotoPath = `${idPhoto}.png`;
    try {
      const fileAccessURL = await Storage.get(userPhotoPath, {
        level: "public",
        expires: 180,
      });
      //console.log("access url", fileAccessURL)
      setPhoto(fileAccessURL);
    } catch (error) {
      console.log("error photo out: ", error);
    }
  };

  const PhotoUsers = async (userList) => {
    for (let i = 0; i < userList.length; i++) {
      const userPhotoPath = `${userList[i]}.png`;
      try {
        const fileAccessURL = await Storage.get(userPhotoPath.ID_COLABORADOR, {
          level: "public",
          expires: 60,
        });
        const images = {
          img: `${fileAccessURL}`,
        };
        let NewCollaborators = { ...userList[i], ...images };
        setCollaboratorsPhotos(collaboratorsPhotos.push(NewCollaborators));
      } catch (error) {
        console.log("error photo out: ", error);
      }
    }
    console.log("photosCol", collaboratorsPhotos);
    console.log(typeof collaboratorsPhotos);
  };

  const [maxPorPagina, setmaxPorPagina] = useState(9);
  const [ObjTrabajo, setObjTrabajo] = useState(null);
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

  const [currentPage, setCurrentPage] = useState(0);

  const paginateFront = () => {
    setCurrentPage(currentPage + 1);
  };
  const paginateBack = () => setCurrentPage(currentPage - 1);
  const setActual = (value) => setCurrentPage(value);

  function separa(datos) {
    if (datos) {
      
      let firstpanels = [];
      firstpanels[0] = [...datos].splice(0, maxPorPagina);
      //alert("tamaño de datos="+ datos.length+"hojas="+datos.length/maxPorPagina+ "registros="+maxPorPagina);
      for (let i = 1; i < Math.ceil(datos.length / maxPorPagina); i++) {
        firstpanels[i] = [...datos].splice(i * maxPorPagina, maxPorPagina);
      }

      return firstpanels;
    } else {
      return (datos = 0);
    }
  }

  function obtenPuesto() {
    let datos = collaboratorsResp;
    let puestos = [];
    for (let i = 0; i < datos.length; i++) {
      puestos[i] = datos[i].PUESTO;
    }
    let result = puestos.filter((item, index) => {
      return puestos.indexOf(item) === index;
    });
    return result;
  }

  function obtenOrganizacion() {
    let datos = collaboratorsResp;
    let organizaciones = [];
    for (let i = 0; i < datos.length; i++) {
      organizaciones[i] = datos[i].ORGANIZACION;
    }
    let result = organizaciones.filter((item, index) => {
      return organizaciones.indexOf(item) === index;
    });
    return result;
  }
/////////////////BUSQUEDA DE TODOS ////////////////////////////
function getDataClic(busqueda) {
  const apiName = 'Usuarios';
  const path = '/getallusers';
  const myInit = {
    headers: {}, // OPTIONAL
    queryStringParameters: {
      BUSQUEDA: `${busqueda}`,
    }
  };

  return API.get(apiName, path, myInit);
}

const fetchCollAllClic = async (busqueda) => {
  //console.log(busqueda);
    try{
      setIsLoading(true);
    const response = await getDataClic(busqueda);
    console.log(response);
    setResultsComplete(response)
    setResultsCompleteOrg(response)
  }catch (error) {
    console.log("error:", error);
  }finally {
  setIsLoading(false);
}
};

  return (
    <CollaboratorsContext.Provider
      value={{
        getCollaborators,
        getAttribColaborators,
        collaborators,
        collaboratorsResp,
        subcollaborators,
        getCollDetail,
        collDetail,
        isLoading,
        UserLog,
        logueado,
        separadosCol,
        separadosSub,
        datosFiltrados,
        obtenPuesto,
        obtenOrganizacion,
        defineMax,
        paginateFront,
        paginateBack,
        setActual,
        usuarioActualDatos,
        currentPage,
        photo,
        isAdmin,
        actualizaBusqueda,
        actualizaBusquedaSub,
        restauraUsuarios, 
        showPerson,
        setShowPerson,
        ordena,
        setIsLoading,
        sendCode, setSendCode,
        restauraUserClasif,
        futleader,
        pillbusiness,
        basebusiness,
        noteval,
        notaply,
        respfutleader,
        resppillbusiness,
        respbasebusiness,
        respnoteval,
        respnotaply,
        //datos clasificados subcolaboradores
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
        //etiquetas
banerSearch,
busqueda,
myteamOption1,
myteamOption2,
myteamOption3,
myteamOption4,
myteamOption5,
myteamViewDetail,
teamFrom,
evalTxt,
noColaborators,
origHireDate,
evaluators,
noData,
filterEvaluations,
buttonSelectAll,
buttonClear,
buttonView,
buttonBack,
buttonMyTeam,
downloadPDF,
downloadAllPDF,
perReview,
behaReview,
managerReview,
reviewer,
rating,
comments,
subReview,
potReview,
teamOne,
setTeamOne, subOne, setSubOne,
fetchCollAllClic,
resultsComplete,
setResultsComplete,
resultsCompleteOrg

      }}
    >
      {children}
    </CollaboratorsContext.Provider>
  );
}
