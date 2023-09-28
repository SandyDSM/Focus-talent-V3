import { Button } from "@aws-amplify/ui-react";
import React from "react";
import { PageArrow } from "../ui-components";
import { Link } from "react-router-dom";

import { useContext,  } from "react";
import CollaboratorsContext from "../context/collaborators";

function BreadCrums({ text, user, colaborator=null }) {
  const{buttonBack, buttonMyTeam, teamFrom, teamOne, subOne} =useContext(CollaboratorsContext);

  console.log("----",teamOne, subOne);
  return (
    <div className="my-2 flex gap-1 items-center">
      <Link to="/myteam">
        <Button size="small">{buttonBack}</Button>
      </Link>
      <Link to="/myteam">
        <Button size="small" variation="link">{buttonMyTeam}</Button>
      </Link>
      <PageArrow type="Go" />
      {colaborator != null & subOne ? 
      (<>
      <Link to={`/myteam/${teamOne?.INTERNAL_ID}`}>
      <Button
        variation="link"
        isDisabled={false}
        size="small"
      >{`${teamFrom} ${teamOne?.NOMBRE}`}</Button></Link>
      <PageArrow type="Go" />
      <Button
        variation="link"
        isDisabled={true}
        size="small"
      >{`${text} ${colaborator}`}</Button>
      </>):
      <Button
      variation="link"
      isDisabled={true}
      size="small"
    >{colaborator != null ? `${text} ${colaborator}` : `${text} ${user}`}</Button>}
    </div>
  );
}

export default BreadCrums;
