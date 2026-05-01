/* eslint-disable */
import * as React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import LoadingSpinner from "./LoadingSpinner";
import IconProfile from "../ui-components/IconProfile";
import RatingStars from "../ui-components/RatingStars";
import PDFComportamientos from "../PDFComportamientos";
import { useContext } from "react";
import CollaboratorsContext from "../context/collaborators";
import { useTranslation } from "react-i18next";

export default function BehaviorTest({ datosUsuario, anios, dataBehavior, load }) {
  const { t } = useTranslation();
  const etiquetas = useContext(CollaboratorsContext);

  const thisYear = dataBehavior?.filter((c) => c.ANIO === anios);

  const managerData = dataBehavior?.filter(
    (c) => c.ANIO === anios && c.MANAGER_OR_SUBORD === "true"
  );
  const subordinateData = dataBehavior?.filter(
    (c) => c.ANIO === anios && c.MANAGER_OR_SUBORD === "false"
  );

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
            <h2 className="text-xl font-semibold">{`${t('behaReview')} ${anios - 1}`}</h2>
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
      {thisYear.length > 0 ? (
        <div className="w-full">
          <div className="flex flex-col gap-8 w-full">
            {managerData?.map((dato, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col gap-3 w-full">
                  <p className="text-xl font-bold text-black/80 whitespace-pre-wrap">
                    {t('managerReview')}
                  </p>
                  <hr className="border-t border-gray-200 w-full" />
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-row gap-3 items-center bg-gray-100 px-2 py-2 w-full">
                      <p className="text-sm font-bold text-black/80 flex-1">{t('reviewer')}</p>
                      <p className="text-sm font-bold text-black/80 flex-1">{t('rating')}</p>
                    </div>
                    <div className="flex flex-row gap-3 items-center px-2 w-full">
                      <p className="text-sm text-black/80 flex-1 whitespace-pre-wrap">
                        {`${dato.NOMBRE} ${dato.APELLIDOS}`}
                      </p>
                      <div className="flex flex-col gap-1 flex-1 px-2">
                        <RatingStars rating={`${dato.QUEST_RESP_RATING_SCORE}`} />
                        <p className="text-xs text-black/80 whitespace-pre-wrap">
                          {dato.QUEST_RESP_RATING_TITLE}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 w-full px-2">
                    <p className="text-sm font-bold text-black/80 whitespace-pre-wrap">
                      {t('comments')}
                    </p>
                    <p className="text-sm text-black/80 whitespace-pre-wrap">
                      {dato.QUESTION_RESP_COMMENT}
                    </p>
                  </div>
                </div>
                <hr className="border-t border-gray-200 w-full" />
              </React.Fragment>
            ))}
            {subordinateData != 0 && (
              <div className="flex flex-col gap-3 w-full">
                <p className="text-xl font-bold text-black/80 whitespace-pre-wrap">
                  {t('subReview')}
                </p>
                <hr className="border-t border-gray-200 w-full" />
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-row gap-3 items-center bg-gray-100 px-2 py-2 w-full">
                    <p className="text-sm font-bold text-black/80 flex-1">{t('reviewer')}</p>
                    <p className="text-sm font-bold text-black/80 flex-1">{t('rating')}</p>
                  </div>
                  {subordinateData?.map((dato, index) => (
                    <div key={index} className="flex flex-row gap-3 items-center px-2 w-full">
                      <p className="text-sm text-black/80 flex-1 whitespace-pre-wrap">
                        {`${dato.NOMBRE} ${dato.APELLIDOS}`}
                      </p>
                      <div className="flex flex-col gap-1 flex-1 px-2">
                        <RatingStars rating={`${dato.QUEST_RESP_RATING_SCORE}`} />
                        <p className="text-xs text-black/80 whitespace-pre-wrap">
                          {dato.QUEST_RESP_RATING_TITLE}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-row gap-3 items-center bg-gray-100 px-2 py-2 w-full">
                  <p className="text-sm font-bold text-black/80 flex-1">{t('comments')}</p>
                </div>
                {subordinateData?.map((dato, index) => (
                  <div key={index} className="flex flex-col gap-4 w-full px-2">
                    <p className="text-sm font-bold text-black/80 whitespace-pre-wrap">
                      {`${dato.NOMBRE} ${dato.APELLIDOS}`}
                    </p>
                    <p className="text-sm text-black/80 whitespace-pre-wrap">
                      {dato.QUESTION_RESP_COMMENT}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col items-end gap-2.5 w-full py-2.5">
            <PDFDownloadLink
              document={
                <PDFComportamientos
                  DATOS={dataBehavior}
                  anios={anios}
                  datosUsuario={datosUsuario}
                  etiquetas={etiquetas}
                />
              }
              fileName={`Comportamientos_${anios - 1}.pdf`}
            >
              <button className="px-3 py-1.5 bg-bmb-blue text-white rounded text-sm font-medium hover:opacity-90">
                {t('downloadPDF')}
              </button>
            </PDFDownloadLink>
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
