import { useState } from "react";
import { API } from "aws-amplify";

export default function useTranslations() {
  const [banerSearch, setBanerSearch] = useState("Potencial 2022");
  const [busqueda, setBusqueda] = useState("Buscar Colaborador");
  const [myteamOption1, setMyteamOption1] = useState("Futuro Líder");
  const [myteamOption2, setMyteamOption2] = useState("Pilar de negocio");
  const [myteamOption3, setMyteamOption3] = useState("Cimiento de negocio");
  const [myteamOption4, setMyteamOption4] = useState("No evaluados en potencial");
  const [myteamOption5, setMyteamOption5] = useState("No aplica");
  const [myteamViewDetail, setMyteamViewDetail] = useState("Ver detalles");
  const [teamFrom, setTeamFrom] = useState("Equipo de");
  const [evalTxt, setEvalTxt] = useState("Eval. de");
  const [noColaborators, setNoColaborators] = useState("No hay colaboradores en esta categoría");
  const [origHireDate, setOrigHireDate] = useState("Fecha de Contratación");
  const [evaluators, setEvaluators] = useState("Colaboradores que evaluaron");
  const [noData, setNoData] = useState("No existen datos");
  const [filterEvaluations, setFilterEvaluations] = useState("EVALUACIONES");
  const [buttonSelectAll, setButtonSelectAll] = useState("Seleccionar Todo");
  const [buttonClear, setButtonClear] = useState("Limpiar");
  const [buttonView, setButtonView] = useState("Ver");
  const [buttonBack, setButtonBack] = useState("Regresar");
  const [buttonMyTeam, setButtonMyTeam] = useState("Mi Equipo");
  const [downloadPDF, setDownloadPDF] = useState("Descargar PDF");
  const [downloadAllPDF, setDownloadAllPDF] = useState("Descargar todo PDF");
  const [perReview, setPerReview] = useState("Evaluación de Desempeño");
  const [behaReview, setBehaReview] = useState("Comportamientos");
  const [managerReview, setManagerReview] = useState("Evaluación Jefe Directo");
  const [reviewer, setReviewer] = useState("Revisor");
  const [rating, setRating] = useState("Clasificación");
  const [comments, setComments] = useState("Comentarios");
  const [subReview, setSubReview] = useState("Evaluación de Reportes directos");
  const [potReview, setPotReview] = useState("Evaluación de potencial");
  const [resBusq, setResBusq] = useState("Resultado de la Búsqueda");
  const [filtColab, setFiltColab] = useState("Filtrar Colaboradores");
  const [buttonCerrar, setButtonCerrar] = useState("Cerrar");
  const [filtEntLegal, setFiltEntLegal] = useState("Entidad Legal");
  const [filtOrg, setFiltOrg] = useState("Organización");
  const [filtNivel, setFiltNivel] = useState("Nivel");
  const [filtPuesto, setFiltPuesto] = useState("Puesto");
  const [filtUbicGeog, setFiltUbicGeog] = useState("Ubicación Geográfica");
  // eslint-disable-next-line no-unused-vars
  const [filtBorrFiltr, setBorrFiltr] = useState("Borrar Filtros");
  // eslint-disable-next-line no-unused-vars
  const [filtNoSeEncColabs, setNoSeEncColabs] = useState("No se encontraron colaboradores");
  const [myteamOption11, setMyteamOption11] = useState("Alto Potencial");
  const [myteamOption21, setMyteamOption21] = useState("Talento Promesa");
  const [myteamOption31, setMyteamOption31] = useState("Talento Esencial");
  // eslint-disable-next-line no-unused-vars
  const [evalCompCol, setevalCompCol] = useState("Evaluación de Competencias de Liderazgo - Colaborador(es)");
  // eslint-disable-next-line no-unused-vars
  const [evalCompJef, setevalCompJef] = useState("Evaluación de Competencias de Liderazgo - Jefe");
  // eslint-disable-next-line no-unused-vars
  const [evalCompPar, setevalCompPar] = useState("Evaluación de Competencias de Liderazgo - Par(es)");
  // eslint-disable-next-line no-unused-vars
  const [titleCompLid, settitleCompLid] = useState("Competencias de Liderazgo");
  // eslint-disable-next-line no-unused-vars
  const [culturaGB, setculturaGB] = useState("Cultura GB");
  // eslint-disable-next-line no-unused-vars
  const [retroAlimentacion, setretroAlimentacion] = useState("Retroalimentación");
  // eslint-disable-next-line no-unused-vars
  const [califGeneral, setcalifGeneral] = useState("Calificación General:");

  function getData(idioma) {
    const apiName = "API Behaviors";
    const path = "/translations";
    const myInit = {
      headers: {},
      queryStringParameters: {
        LANGUAGE: `'${idioma}'`,
      },
    };
    return API.get(apiName, path, myInit);
  }

  const fetcLanguage = async (idioma) => {
    try {
      const response = await getData(idioma);

      response?.filter((c) => c.ETIQUETA === "banersearch").map((trad) => setBanerSearch(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "busqueda").map((trad) => setBusqueda(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "myteamoption1").map((trad) => setMyteamOption1(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "myteamoption2").map((trad) => setMyteamOption2(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "myteamoption3").map((trad) => setMyteamOption3(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "myteamoption4").map((trad) => setMyteamOption4(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "myteamoption5").map((trad) => setMyteamOption5(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "myteamviewdetail").map((trad) => setMyteamViewDetail(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "teamfrom").map((trad) => setTeamFrom(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "nocollaborators").map((trad) => setNoColaborators(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "orighiredate").map((trad) => setOrigHireDate(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "evaluators").map((trad) => setEvaluators(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "nodata").map((trad) => setNoData(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "filterevaluations").map((trad) => setFilterEvaluations(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "buttonselectall").map((trad) => setButtonSelectAll(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "buttonclear").map((trad) => setButtonClear(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "buttonview").map((trad) => setButtonView(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "buttonback").map((trad) => setButtonBack(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "buttonmyteam").map((trad) => setButtonMyTeam(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "downloadpdf").map((trad) => setDownloadPDF(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "downloadallpdf").map((trad) => setDownloadAllPDF(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "perreview").map((trad) => setPerReview(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "behareview").map((trad) => setBehaReview(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "managerreview").map((trad) => setManagerReview(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "reviewer").map((trad) => setReviewer(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "rating").map((trad) => setRating(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "comments").map((trad) => setComments(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "subreview").map((trad) => setSubReview(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "potreview").map((trad) => setPotReview(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "resbusq").map((trad) => setResBusq(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "filtcolab").map((trad) => setFiltColab(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "buttoncerrar").map((trad) => setButtonCerrar(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "filtentlegal").map((trad) => setFiltEntLegal(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "filtorg").map((trad) => setFiltOrg(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "filtnivel").map((trad) => setFiltNivel(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "filtpuesto").map((trad) => setFiltPuesto(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "filtubicgeog").map((trad) => setFiltUbicGeog(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "evaltxt").map((trad) => setEvalTxt(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "borrfiltr").map((trad) => setBorrFiltr(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "noseenccolabs").map((trad) => setNoSeEncColabs(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "myteamoption11").map((trad) => setMyteamOption11(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "myteamoption21").map((trad) => setMyteamOption21(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "myteamoption31").map((trad) => setMyteamOption31(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "evalCompCol").map((trad) => setevalCompCol(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "evalCompJef").map((trad) => setevalCompJef(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "evalCompPar").map((trad) => setevalCompPar(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "titleCompLid").map((trad) => settitleCompLid(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "culturaGB").map((trad) => setculturaGB(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "retroAlimentacion").map((trad) => setretroAlimentacion(trad.TRADUCCION));
      response?.filter((c) => c.ETIQUETA === "califGeneral").map((trad) => setcalifGeneral(trad.TRADUCCION));
    } catch (error) {
      console.log("error:", error);
    }
  };

  return {
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
    resBusq,
    filtColab,
    buttonCerrar,
    filtEntLegal,
    filtOrg,
    filtNivel,
    filtPuesto,
    filtUbicGeog,
    filtBorrFiltr,
    filtNoSeEncColabs,
    myteamOption11,
    myteamOption21,
    myteamOption31,
    evalCompCol,
    evalCompJef,
    evalCompPar,
    titleCompLid,
    culturaGB,
    retroAlimentacion,
    califGeneral,
    fetcLanguage,
  };
}
