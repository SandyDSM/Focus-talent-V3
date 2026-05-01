/* eslint-disable */
import * as React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import LoadingSpinner from "./LoadingSpinner";
import IconProfile from "../ui-components/IconProfile";
import PDFLiderazgo from "../PDFLiderazgo";
import { useContext } from "react";
import CollaboratorsContext from "../context/collaborators";
import { useTranslation } from "react-i18next";

export default function LiderazgoTest({ datosUsuario, anios, dataLiderazgo, cmtLiderazgo, load }) {
  const { t } = useTranslation();
  const etiquetas = useContext(CollaboratorsContext);

  const encabezados = [t('evalCompCol'), t('evalCompJef'), t('evalCompPar')];
  const filas = [t('titleCompLid'), t('culturaGB')];

  const tabla = Array(filas.length)
    .fill(null)
    .map(() => Array(encabezados.length).fill("-"));

  const dataLiderazgo_year = dataLiderazgo.filter((c) => c.ANIO_ === anios);

  dataLiderazgo_year.forEach((item) => {
    const filaIndex = item.SECTION_TYPE_ID_ - 1;
    const colIndex = item.RESPONSIBLE_ID_ - 1;
    if (tabla[filaIndex] && tabla[filaIndex][colIndex] !== undefined) {
      tabla[filaIndex][colIndex] = item.RATING_;
    }
  });

  const cmtLiderazgo_year = cmtLiderazgo.filter((c) => c.ANIO_ === anios);

  if (load) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded overflow-hidden w-full transition-all">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-row items-center gap-3">
          <img
            src={datosUsuario?.src}
            alt=""
            className="w-24 h-24 rounded-lg object-cover shrink-0"
          />
          <div className="flex flex-col gap-1 flex-1">
            <h2 className="text-xl font-semibold">{`${t('titleCompLid')} ${anios - 1}`}</h2>
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
      </div>
      {cmtLiderazgo_year.length > 0 || dataLiderazgo_year.length > 0 ? (
        <div className="w-full">
          <div>
            <div className="flex gap-2 items-baseline">
              <p>{t('califGeneral')}</p>
              <h2 className="text-xl font-bold">{dataLiderazgo_year[0]?.RATING_}</h2>
            </div>
            <table className="table-fixed border-spacing-[7px] my-8 w-full">
              <thead className="text-left text-sm">
                <tr>
                  <th className="border-b-2 border-gray-200"></th>
                  {encabezados.map((encabezado, i) => (
                    <th key={i} className="border-b-2 border-gray-200">
                      {encabezado}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tabla.map((fila, i) => (
                  <tr key={i} className="border-b-2 border-gray-200">
                    <td className="font-bold">{filas[i]}</td>
                    {fila.map((valor, j) => (
                      <td key={j}>{valor}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="py-6">
              <p className="font-bold">{t('retroAlimentacion')}</p>
              {cmtLiderazgo_year?.length > 0 ? (
                cmtLiderazgo_year.map((dato, index) => (
                  <div key={index}>
                    <p className="pt-4 pb-3">{dato.ANSWER_}</p>
                    {dato.SHOW_COMMENT === 1 && (
                      <p className="text-xs">{dato.RESPONDER}</p>
                    )}
                    <p className="text-xs pb-2">{dato.RESPONSIBLE_}</p>
                  </div>
                ))
              ) : (
                <p>{t('noData')}</p>
              )}
              <div className="flex flex-col items-end gap-2.5 w-full py-2.5">
                <PDFDownloadLink
                  document={
                    <PDFLiderazgo
                      tabla={tabla}
                      dataLiderazgo={dataLiderazgo_year}
                      coments={cmtLiderazgo_year}
                      anios={anios}
                      datosUsuario={datosUsuario}
                      encabezados={encabezados}
                      filas={filas}
                      etiquetas={etiquetas}
                    />
                  }
                  fileName={`Competencias_de_Liderazgo_${anios}.pdf`}
                >
                  <button className="px-3 py-1.5 bg-bmb-blue text-white rounded text-sm font-medium hover:opacity-90">
                    {t('downloadPDF')}
                  </button>
                </PDFDownloadLink>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <p>{t('noData')}</p>
        </div>
      )}
    </div>
  );
}
