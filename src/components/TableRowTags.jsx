import { Divider } from "@aws-amplify/ui-react";
import React from "react";
import { IconActions } from "../ui-components";

function TableRowTags() {
  return (
    <div className="flex flex-col font-medium px-5">
      <div className="flex flex-row self-stretch py-2  items-center justify-between gap-4">
        <div className="w-full"><p className="text-sm">Evaluación</p></div>
        <div className="w-full"><p className="text-sm">Evaluación</p></div>
        <div className="w-full"><p className="text-sm">Test </p></div>
        <div className="w-full"><p className="text-sm">Évaluation</p></div>
        <div className="w-full"><p className="text-sm">Avaliação</p></div>
        <div className="w-full"><p className="text-sm">評估</p></div>
        <div className="w-full flex flex-row gap-8">
            <div className="w-6/12 flex justify-center cursor-pointer"><IconActions name="edit"/></div>
            <div className="w-6/12 flex justify-center cursor-pointer"><IconActions name="delete"/></div>
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

export default TableRowTags;
