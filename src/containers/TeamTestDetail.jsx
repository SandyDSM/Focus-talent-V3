import React from "react";
import { useParams } from "react-router-dom";
import TestCheck from "../components/TestCheck";
import {
  HeadCollaborator,
  PerformanceTest,
  SuccesionTest,
} from "../ui-components";
import { useEffect, useContext } from "react";
import CollaboratorsContext from "../context/collaborators";
import BreadCrums from "../components/BreadCrums";
import { Loader } from "@aws-amplify/ui-react";
import {PDFDownloadLink} from "@react-pdf/renderer";

//import PDFDesenpeno from "../components/PDFDesenpeno";
import PDFPotencial from "../components/PDFPotencial"

function TeamTestDetail() {
  const { id } = useParams();
  const { getCollDetail, collDetail, isLoading } = useContext(CollaboratorsContext);

  useEffect(() => {
    getCollDetail(id).catch(null);
  }, [id]);

 
  const sendOverridesHeadColl = {
    NameColl: { children: `${collDetail.NOMBRE} ${collDetail.APELLIDOS} ` },
    Id: { children: collDetail.ID_COLABORADOR },
    Job: { children: collDetail.PUESTO },
    Organitation: { children: collDetail.ORGANIZACION },
  };

  const sendOverridesPerformanceTest = {
    nameColl: { children: `${collDetail.NOMBRE} ${collDetail.APELLIDOS} ` },
    Id: { children: collDetail.ID_COLABORADOR },
    Job: { children: collDetail.PUESTO },
    Organitation: { children: collDetail.ORGANIZACION },
    Profile: { src: `https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/10002460.png` }, 
  };

  const sendOverridesSuccesionTest = {
    nameColl: { children: `${collDetail.NOMBRE} ${collDetail.APELLIDOS} ` },
    Id: { children: collDetail.ID_COLABORADOR },
    Job: { children: collDetail.PUESTO },
    Organitation: { children: collDetail.ORGANIZACION },
    "image 4": { src: `https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/10002460.png` }, 
  };
  if( isLoading){
    return(
        <div className="h-screen flex justify-center items-center "> <Loader size="large"/></div>
    )
  }

  return (
    <div>
      <div className="mt-2 flex flex-col gap-2">
        <div className="mx-4">
            <BreadCrums text="Evaluación de" colaborator ={collDetail.ID_COLABORADOR }/>
        </div>
        <div>
          <HeadCollaborator width={"100%"} overrides={sendOverridesHeadColl} />
        </div>
      </div>

<PDFDownloadLink document={<PDFPotencial DATOS="xxxx"/>} fileName="EvalPotencial.pdf">  
<button>Descargar Potencial</button>
</PDFDownloadLink>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4 m-5">
        <div className="mt-4 w-full">
          <TestCheck />
        </div>
        <div className="col-span-1 md:col-span-3">
          <div className="flex flex-col gap-4">
            <PerformanceTest width={"100%"} overrides={sendOverridesPerformanceTest} />
            <SuccesionTest width={"100%"} overrides={sendOverridesSuccesionTest} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamTestDetail;
