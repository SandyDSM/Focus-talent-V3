import { Divider } from "@aws-amplify/ui-react";
import React from "react";
import { IconActions, IconAddsec } from "../ui-components";

function TableRowOrganization() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row self-stretch py-2 px-9 items-center relative gap-8">
        <div className="w-7 h-7 cursor-pointer">
          <IconActions
            width="24px"
            height="24px"
          />
        </div>
        <div className="flex flex-row gap-1 grow shrink relative whitespace-pre-wrap">
          <div className="cursor-pointer"><IconAddsec/></div>
          <p className="text-sm">
          BIM CEDIS METROPOLITANO
          </p>
        </div>
        <p className="text-sm">LAS</p>
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

export default TableRowOrganization;
