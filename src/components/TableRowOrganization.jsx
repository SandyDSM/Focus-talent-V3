import { Divider } from "@aws-amplify/ui-react";
import React from "react";
import { IconActions, IconAddsec } from "../ui-components";

function TableRowOrganization({organization, setchild, selectorg}) {



  return (
    <div className="flex flex-col">
      <div className="flex flex-row self-stretch py-1 px-9 items-center relative gap-6">
        <div className="w-7 h-6 cursor-pointer" onClick={()=>selectorg(organization)}>
          <IconActions
            width="24px"
            height="24px"
          />
        </div>
        <div className="flex flex-row gap-1 grow shrink relative whitespace-pre-wrap items-center ">
          <div className="cursor-pointer" onClick={()=>setchild(organization.ID)}><IconAddsec/></div>
          <p className="text-xs">
          {organization.NOMBRE}
          </p>
        </div>
        <p className="text-xs">{organization.ID}</p>
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
