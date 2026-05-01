import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import CollaboratorsContext from "../context/collaborators";
import { API } from "aws-amplify";
import { useTranslation } from "react-i18next";
import { Fingerprint, Briefcase, Building2, Globe, Users } from "lucide-react";

const AVATAR = "https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/Avatar.png";

const clasVariant = { 1: "clas1", 2: "clas2", 3: "clas3", 4: "clas4", 5: "clas5" };

function CardDos({ colaborator, sub, serch = "false" }) {
  const { usuarioActualDatos, setSubOne } = useContext(CollaboratorsContext);
  const { t } = useTranslation();
  const [calibracion, setCalibracion] = useState([]);

  function getData(papiName, ppath, pparameters) {
    return API.get(papiName, ppath, { headers: {}, queryStringParameters: pparameters });
  }

  const getcalib = async (id) => {
    try {
      const response = await getData("API PerfPoten", "/getcarddatanew", {
        LANGUAGE: `'${usuarioActualDatos.IDIOMA}'`,
        INTERNAL_ID: id * 1,
      });
      setCalibracion(response);
    } catch {
      setCalibracion([]);
    }
  };

  useEffect(() => {
    getcalib(colaborator.INTERNAL_ID);
    setSubOne(sub);
  }, []);

  const foto = colaborator?.FOTO
    ? `data:image/jpg;base64,${colaborator.FOTO}`
    : AVATAR;

  const clasId = calibracion?.[0]?.ID_CLASIFICACION;
  const badgeVariant = clasVariant[clasId] || "muted";

  return (
    <div className="bg-white rounded-card shadow-card border border-border-subtle flex flex-col justify-between hover:shadow-card-hover transition-shadow duration-180">
      {/* Body */}
      <div className="p-4 flex flex-col gap-3">
        {/* Avatar + nombre */}
        <div className="flex gap-3 items-center">
          <img
            src={foto}
            alt={`${colaborator.NOMBRE} ${colaborator.APELLIDOS}`}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-bmb-blue-light shrink-0"
          />
          <div className="min-w-0">
            <p className="font-semibold text-text-primary leading-tight truncate">
              {colaborator.NOMBRE} {colaborator.APELLIDOS}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
              <span className="flex items-center gap-1 text-xs text-text-secondary">
                <Fingerprint size={12} className="text-bmb-secundary shrink-0" />
                {colaborator.ID_COLABORADOR}
              </span>
              <span className="flex items-center gap-1 text-xs text-text-secondary">
                <Briefcase size={12} className="text-bmb-secundary shrink-0" />
                <span className="truncate max-w-[140px]">{colaborator.PUESTO}</span>
              </span>
              <span className="flex items-center gap-1 text-xs text-text-secondary">
                <Building2 size={12} className="text-bmb-secundary shrink-0" />
                {colaborator.ORGANIZACION_ID}
              </span>
              <span className="flex items-center gap-1 text-xs text-text-secondary">
                <Globe size={12} className="text-bmb-secundary shrink-0" />
                {colaborator?.PAIS || "NA"}
              </span>
            </div>
          </div>
        </div>

        {/* Pills / badges */}
        <div className="flex flex-wrap gap-1.5">
          {serch === "true" && clasId && (
            <Badge variant={badgeVariant}>{calibracion[0].CLASIFICACION}</Badge>
          )}
          {calibracion?.[0]?.KEY_POSITION && (
            <Badge variant="muted" className="bg-gray-800 text-white border-gray-700">
              {calibracion[0].KEY_POSITION}
            </Badge>
          )}
          {calibracion?.[0]?.ELDP && (
            <Badge variant="clas4">{calibracion[0].ELDP}</Badge>
          )}
        </div>

        {/* Datos */}
        <div className="text-sm text-text-secondary space-y-0.5">
          <p>
            <span className="font-medium text-text-primary">{t("origHireDate")}:</span>{" "}
            {colaborator.FECHA_CONTRATACION}
          </p>
          {calibracion?.map((cal, index) => (
            <p key={index}>
              <span className="font-medium text-text-primary">
                {cal.TITULO} {cal.ANO_EVAL}:
              </span>{" "}
              {cal.VALORES}
            </p>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 bg-surface-muted border-t border-border-subtle rounded-b-card">
        {colaborator.EQUIPO === "1" && !sub ? (
          <Link to={`/myteam/${colaborator.INTERNAL_ID}`} className="text-bmb-secundary hover:text-bmb-blue transition-colors">
            <Users size={20} aria-label="Ver equipo" />
          </Link>
        ) : (
          <Users size={20} className="text-gray-300" aria-hidden />
        )}
        <Link to={`/test/${colaborator.INTERNAL_ID}`}>
          <Button variation="link" className="text-sm font-medium text-bmb-secundary hover:text-bmb-blue">
            {t("myteamViewDetail")}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CardDos;
