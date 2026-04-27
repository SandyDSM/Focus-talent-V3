import * as React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFConjunto from "../PDFConjunto";
import { useContext } from "react";
import CollaboratorsContext from "../context/collaborators";
import { Button } from "./ui/Button";
import IconProfile from "../ui-components/IconProfile";

export default function HeadCollaborator({ datosUsuario, aniosFill, testPreguntas, dataBehavior, dataLiderazgo, cmtLiderazgo, style, className }) {
  const { downloadAllPDF, evalTxt } = useContext(CollaboratorsContext);
  const etiquetas = useContext(CollaboratorsContext);

  return (
    <div
      className={`flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-white rounded shadow-sm w-full transition-all ${className || ""}`}
      style={style}
    >
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xl font-light text-gray-800">{evalTxt}</span>
          <span className="text-xl font-medium text-gray-800">{datosUsuario?.nombre}</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-1">
            <IconProfile width="20px" height="20px" type="id" />
            <span className="text-xs font-medium text-gray-700">{datosUsuario?.Id}</span>
          </div>
          <div className="flex items-center gap-1">
            <IconProfile width="20px" height="20px" type="Job" />
            <span className="text-xs font-medium text-gray-700">{datosUsuario?.Job}</span>
          </div>
          <div className="flex items-center gap-1">
            <IconProfile width="20px" height="20px" type="Organitation" />
            <span className="text-xs font-medium text-gray-700">{datosUsuario?.Organitation}</span>
          </div>
        </div>
      </div>
      <PDFDownloadLink
        document={
          <PDFConjunto
            DATOS={testPreguntas}
            anios={aniosFill}
            datosUsuario={datosUsuario}
            comportamientos={dataBehavior}
            etiquetas={etiquetas}
            dataLiderazgo={dataLiderazgo}
            cmtLiderazgo={cmtLiderazgo}
          />
        }
        fileName="Evaluación_de_desempeño_potencial.pdf"
      >
        <Button variation="primary">{downloadAllPDF}</Button>
      </PDFDownloadLink>
    </div>
  );
}
