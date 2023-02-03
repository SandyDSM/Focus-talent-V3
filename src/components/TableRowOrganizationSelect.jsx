import { Divider, CheckboxField } from "@aws-amplify/ui-react";
import React from "react";
import { IconActions } from "../ui-components";

function TableRowOrganizationSelect({organization}) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center pr-9 relative justify-between">
        <div className="flex flex-row justify-start self-stretch py-1 px-9 items-center relative gap-8 w-7/12">
          <div className="flex flex-col w-7 h-6 cursor-pointer items-center">
            <IconActions width="20px" height="20px" name="delete" />
          </div>
          <div className="flex flex-row gap-1 grow shrink relative whitespace-pre-wrap">
            <p className="text-xs">{organization.NOMBRE}</p>
          </div>
          <div className="flex justify-end whitespace-pre-wrap "><p className="text-xs">organization.ID</p></div>
        </div>
        <CheckboxField
          label="Incluir subordinados"
          name="subordinados"
          value="yes"
          size="small"
          defaultChecked
        />
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

export default TableRowOrganizationSelect;
