import React from "react";
import HeadTableReport from "./HeadTableReport";
import TableCollReport from "./TableCollReport";

function CollaborLogin({tableAccess}) {
    return (
    <div className="flex flex-col gap-6 w-full">
        <div>
        <HeadTableReport/>
        {tableAccess?.map((colaborator, index) => (
          <TableCollReport
            key={index}
            colaborator={colaborator}
          />
        ))}
        </div>
    </div>
    );
}

export default CollaborLogin;
