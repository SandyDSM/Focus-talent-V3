/* eslint-disable */
import * as React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFPotencial from "../PDFPotencial";
import IconProfile from "../ui-components/IconProfile";
import { useContext } from "react";
import CollaboratorsContext from "../context/collaborators";

export default function SuccesionTest({ datosUsuario, arrayPreguntas, anios }) {
  const testPreguntas = arrayPreguntas;
  const { potReview, downloadPDF, noData } = useContext(CollaboratorsContext);

  const thisYear = testPreguntas?.filter(
    (c) => c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios,
  );

  const agrupaciones = [
    { key: "Agilidad mental", direction: "row" },
    { key: "Agilidad de personas", direction: "row" },
    { key: "Consciencia de sí mismo", direction: "row" },
    { key: "Agilidad de cambio", direction: "col" },
    { key: "Agilidad de resultados", direction: "col" },
    { key: "PREDICTOR DE LIDERAZGO: Maneja con eficacia la incertidumbre", direction: "col" },
    { key: "PREDICTOR DE LIDERAZGO: Se siente cómodo guiando y dirigiendo a otros", direction: "col" },
    { key: "PREDICTOR DE LIDERAZGO: Se enfoca en hacer crecer el negocio a través de otros", direction: "col" },
    { key: "DESCARRILADOR: Cerrado", direction: "col" },
    { key: "DESCARRILADOR: Volátil", direction: "col" },
    { key: "DESCARRILADOR: Micro-gestión", direction: "col" },
    { key: "Promovible", direction: "row" },
    { key: "Escenario Futuro", direction: "row" },
    { key: "Riesgo de pérdida", direction: "row" },
    { key: "Mapa de potencial", direction: "row" },
    { key: "Fortalezas", direction: "col" },
    { key: "Áreas de oportunidad", direction: "col" },
    { key: "Acciones de desarrollo", direction: "col" },
  ];

  return (
    <div className="flex flex-col gap-5 p-6 bg-white rounded overflow-hidden w-full transition-all">
      <div className="flex flex-row items-center gap-3">
        <img
          src={datosUsuario?.src}
          alt=""
          className="w-24 h-24 rounded-lg object-cover shrink-0"
        />
        <div className="flex flex-col gap-1 flex-1">
          <h2 className="text-xl font-semibold">{`${potReview} ${anios}`}</h2>
          <p className="text-base font-medium text-black/80">{datosUsuario?.nombre}</p>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-1">
              <IconProfile width="20px" height="20px" type="id" />
              <span className="text-xs font-medium">{datosUsuario?.Id}</span>
            </div>
            <div className="flex items-center gap-1">
              <IconProfile width="20px" height="20px" type="Job" />
              <span className="text-xs font-medium">{datosUsuario?.Job}</span>
            </div>
            <div className="flex items-center gap-1">
              <IconProfile width="20px" height="20px" type="Organitation" />
              <span className="text-xs font-medium">{datosUsuario?.Organitation}</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-200 w-full" />
      {thisYear.length > 0 ? (
        <div className="w-full">
          {(() => {
            const filtered = testPreguntas?.filter(
              (c) => c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios,
            );

            if (anios < 2024) {
              return agrupaciones.map(({ key, direction }) =>
                filtered
                  ?.filter((c) => c.AGRUPACION === key)
                  .map((pre, index) => (
                    <div
                      key={`${key}-${index}`}
                      className={`flex ${direction === "row" ? "flex-row items-center" : "flex-col items-start"} gap-3 w-full relative`}
                    >
                      <p className="text-base font-medium text-black/80 text-left whitespace-pre-wrap shrink-0">
                        {pre.TITULO}
                      </p>
                      <p className="text-sm font-normal text-black/80 text-left whitespace-pre-wrap flex-1">
                        {pre.VALORES}
                      </p>
                    </div>
                  )),
              );
            }

            const grouped = filtered?.reduce((acc, pre) => {
              const key = pre.CATEGORIA_ORDEN;
              if (!acc[key]) acc[key] = [];
              acc[key].push(pre);
              return acc;
            }, {});

            return Object.entries(grouped || {}).map(
              ([categoriaOrden, preguntas], groupIndex) => (
                <div key={categoriaOrden} className="w-full">
                  {groupIndex !== 0 && (
                    <hr className="w-full border-t border-gray-300 my-4" />
                  )}
                  <div className="flex flex-col gap-3 w-full">
                    {preguntas.map((pre, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-2 w-full items-start"
                      >
                        <p className="w-full text-base font-medium text-black/80 text-left whitespace-pre-wrap">
                          {pre.TITULO}
                        </p>
                        <p className="w-full text-sm font-normal text-black/80 text-left whitespace-pre-wrap">
                          {pre.VALORES}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            );
          })()}
          <div className="w-full flex justify-end py-2.5">
            <PDFDownloadLink
              document={
                <PDFPotencial
                  DATOS={testPreguntas}
                  anios={anios}
                  datosUsuario={datosUsuario}
                  etiquetas={potReview}
                />
              }
              fileName={`Evaluación_de_potencial_${anios}.pdf`}
            >
              <button className="px-3 py-1.5 bg-bmb-blue text-white rounded text-sm font-medium hover:opacity-90">
                {downloadPDF}
              </button>
            </PDFDownloadLink>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <p>{noData}</p>
        </div>
      )}
    </div>
  );
}
