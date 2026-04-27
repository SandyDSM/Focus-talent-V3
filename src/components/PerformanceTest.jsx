/* eslint-disable */
import * as React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFdesempeno from "../PDFDesenpeno.js";
import IconProfile from "../ui-components/IconProfile";
import { useContext } from "react";
import CollaboratorsContext from "../context/collaborators";

export default function PerformanceTest({ datosUsuario, arrayPreguntas, anios }) {
  const { perReview, noData, downloadPDF } = useContext(CollaboratorsContext);

  const testPreguntas = arrayPreguntas;
  const thisYear = testPreguntas?.filter(
    (c) => c.CATEGORIA === "Desempeño" && c.ANO_EVAL === anios,
  );

  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded overflow-hidden w-full transition-all">
      <div className="flex flex-row items-center gap-3">
        <img
          src={datosUsuario?.src}
          alt=""
          className="w-24 h-24 rounded-lg object-cover shrink-0"
        />
        <div className="flex flex-col gap-1 flex-1">
          <h2 className="text-xl font-semibold">{`${perReview} ${anios - 1}`}</h2>
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
              (c) => c.CATEGORIA === "Desempeño" && c.ANO_EVAL === anios,
            );

            const grouped = filtered?.reduce((acc, pre) => {
              const key = pre.CATEGORIA_ORDEN;
              if (!acc[key]) acc[key] = [];
              acc[key].push(pre);
              return acc;
            }, {});

            return Object.entries(grouped || {}).map(
              ([categoriaOrden, preguntas], groupIndex) => (
                <div key={categoriaOrden} className="w-full mb-2">
                  {groupIndex !== 0 && (
                    <hr className="w-full border-t border-gray-300 my-4" />
                  )}
                  {preguntas.map((pre, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-2 w-full items-start justify-start relative"
                    >
                      <p className="w-full text-base font-medium text-black/80 text-left whitespace-pre-wrap">
                        {pre.TITULO}
                      </p>
                      <p className="w-full text-sm font-normal text-black/80 text-left whitespace-pre-wrap -mt-1 mb-4">
                        {pre.VALORES}
                      </p>
                    </div>
                  ))}
                </div>
              ),
            );
          })()}
          <div className="w-full text-end">
            <PDFDownloadLink
              document={
                <PDFdesempeno
                  DATOS={testPreguntas}
                  anios={anios}
                  datosUsuario={datosUsuario}
                  etiquetas={perReview}
                />
              }
              fileName={`Evaluación_de_desempeño_${anios - 1}.pdf`}
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
