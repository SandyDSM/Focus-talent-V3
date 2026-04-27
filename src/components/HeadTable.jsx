import React from "react";

function HeadTable({col1, col2, col3, col4, classcol2}) {
  return (
    <div className="flex flex-col text-bmb-blue font-medium">
      <div className="flex flex-row self-stretch py-2 px-5 items-center relative gap-8 pr-10">
      <p className="text-sm">{col1}</p>
      <div className={`${classcol2}`}><p className="text-sm">{col2}</p></div>
        <div className="flex flex-col grow shrink relative whitespace-pre-wrap ">
          <p className="text-sm">
            {col3}
          </p>
        </div>
        <p className="text-sm">{col4}</p>
      </div>
      <hr className="border-t border-gray-200 w-full" />
    </div>
  );
}

export default HeadTable;
