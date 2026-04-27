import { Button } from "./ui/Button";
import React from "react";
import { PageArrow } from "../ui-components";
import { Link } from "react-router-dom";

function BreadcrumsTeam({ colaborator }) {
  return (
    <div className="my-2 flex gap-1 items-center">
      <Link to="/myteam">
        <Button size="small">Regresar</Button>
      </Link>
      <Link to="/myteam">
        <Button size="small" variation="link">Mi equipo</Button>
      </Link>
      <PageArrow type="Go" />
      <Button
        variation="link"
        isDisabled={true}
        size="small"
      >{`Equipo de ${colaborator}`}</Button>
    </div>
  );
}

export default BreadcrumsTeam;
