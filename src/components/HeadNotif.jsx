import { Divider } from "@aws-amplify/ui-react";
import React from "react";

function HeadNotif() {
  return (
    <div className="flex flex-col text-bmb-blue font-medium px-5">
      <div className="flex flex-row self-stretch py-2 items-center relative gap-8">
        <div><p className="text-sm">Idioma</p></div>
        <div className="flex flex-col grow shrink relative whitespace-pre-wrap">
            <p className="text-sm">Título</p>
            </div>
        <div className={`flex flex-row gap-8`}>
            <div className=""><p className="text-sm">Editar</p></div>
        </div>
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

export default HeadNotif;
