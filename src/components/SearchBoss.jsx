import React from "react";
import { Heading, Divider } from "@aws-amplify/ui-react";
import HeadTableColl from "./HeadTableColl";
import TableColl from "./TableColl";
import CollaboratorsContext from "../context/collaborators";
import { useContext, useState } from "react";

function SearchBoss() {
  const { resultsComplete } = useContext(CollaboratorsContext);
  const [collSelect, setCollSelect] = useState([]);
  const [carray, setCarray] = useState([]);

  const pullOrg = (indice) => {
    let orgtemp = collSelect;
    orgtemp.splice(indice, 1);
    setCollSelect([...orgtemp]);
   // alert("El indice dice ", indice);
  };

  const pushOrg = (obj) => {
    let orgtemp = collSelect;
    let orgval = [];
    orgval = orgtemp.filter((element) => element.INTERNAL_ID === obj.INTERNAL_ID);
    if (orgval.length === 0) {
      orgtemp.push(obj);
    }
    setCollSelect([...orgtemp]);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div>
        <div className="flex flex-col gap-1 my-2">
          <Heading level={6}> Colaboradores seleccionados </Heading>
          <Divider />
        </div>
        <HeadTableColl />
        {collSelect?.map((colaborator, index) => (
              <TableColl
                key={index}
                colaborator={colaborator}
                selectorg={pullOrg}
                indice={index}
              />
            ))
       }
      </div>
      <div>
        <div className="flex flex-col gap-1 my-2">
          <Heading level={6}> Colaboradores </Heading>
          <Divider />
        </div>
        <HeadTableColl />
        {resultsComplete != null ? (
          resultsComplete.length <= 0 ? (
            <p className="col-span-3 items-center text-center mt-6">
              "No se encontraron colaboradores"
            </p>
          ) : (
            resultsComplete?.map((colaborator, index) => (
              <TableColl
                key={index}
                colaborator={colaborator}
                selectorg={pushOrg}
                add="true"
              />
            ))
          )
        ) : (
          <p className="col-span-3 items-center text-center mt-6">
            No se encontraron colaboradores
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchBoss;
