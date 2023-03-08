import { Button } from "@aws-amplify/ui-react";
import React from "react";
import { PageArrow } from "../ui-components";
import { Link } from "react-router-dom";

import { useContext,  } from "react";
import CollaboratorsContext from "../context/collaborators";

function BreadCrums({ text, colaborator }) {
  const{buttonBack, buttonMyTeam} =useContext(CollaboratorsContext);
  return (
    <div className="my-2 flex gap-1 items-center">
      <Link to="/myteam">
        <Button size="small">{buttonBack}</Button>
      </Link>
      <Link to="/myteam">
        <Button size="small" variation="link">{buttonMyTeam}</Button>
      </Link>
      <PageArrow type="Go" />
      <Button
        variation="link"
        isDisabled={true}
        size="small"
      >{`${text} ${colaborator}`}</Button>
    </div>
  );
}

export default BreadCrums;
