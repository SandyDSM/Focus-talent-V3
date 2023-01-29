import { Divider } from "@aws-amplify/ui-react";
import React from "react";

function HeadTable() {
  return (
    <div className="flex flex-col text-bmb-blue font-medium">
      <div className="flex flex-row self-stretch py-2 px-5 items-center relative gap-8 pr-10">
      <p className="text-sm">Notificar</p>
      <p className="text-sm">Estatus</p>
        <div className="flex flex-col grow shrink relative whitespace-pre-wrap">
          <p className="text-sm">
            Nombre
          </p>
        </div>
        <p className="text-sm">Año</p>
      </div>
      <Divider
        width="unset"
        shrink="0"
        alignSelf="stretch"
        size="small"
        orientation="horizontal"
      />
    </div>
  );
}

export default HeadTable;
