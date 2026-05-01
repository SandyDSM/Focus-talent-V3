import { Button } from "./ui/Button";
import React from "react";
import { PageArrow } from "../ui-components";
import { Link } from "react-router-dom";

import { useContext,  } from "react";
import CollaboratorsContext from "../context/collaborators";
import { useTranslation } from "react-i18next";

function BreadCrums({ text, user, colaborator=null }) {
  const { teamOne, subOne } = useContext(CollaboratorsContext);
  const { t } = useTranslation();

  //console.log("----",teamOne, subOne);
  return (
    <div className="my-2 flex gap-1 items-center">
      <Link to="/myteam">
        <Button size="small">{t('buttonBack')}</Button>
      </Link>
      <Link to="/myteam">
        <Button size="small" variation="link">{t('buttonMyTeam')}</Button>
      </Link>
      <PageArrow type="Go" />
      {colaborator != null & subOne ? 
      (<>
      <Link to={`/myteam/${teamOne?.INTERNAL_ID}`}>
      <Button
        variation="link"
        isDisabled={false}
        size="small"
      >{`${t('teamFrom')} ${teamOne?.NOMBRE}`}</Button></Link>
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
