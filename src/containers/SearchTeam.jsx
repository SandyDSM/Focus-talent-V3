import React from "react";
import { Icon, Loader } from "@aws-amplify/ui-react";
import {Button } from '@aws-amplify/ui-react';
import Filters from "../components/Filters";
import CardDos from "../components/CardDos";

import { useContext, useEffect, useState } from "react";
import CollaboratorsContext from "../context/collaborators";

const SearchTeam = ({sub, setCloseSerchAll}) => {
  const {isLoading, resultsComplete, resBusq, buttonCerrar} = useContext(CollaboratorsContext);

  const onClose = () => {
    setCloseSerchAll(0)
  };
 
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <Loader size="large" />
      </div>
    );
  }
  return (
    <div className="mt-4">
      <div className='cardTitle col-span-1 sm:col-span-2 md:col-span-3 bg-bmb-secundary flex flex-row items-center gap-6 justify-between mx-8'>
        <p>{resBusq}</p>
        <Button variation="link" style={{ color: "#FFF" }}onClick={() => onClose()}>
        <p className="mx-2">{buttonCerrar}</p>
        <Icon
            width="12px"
            height="12px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 15.7099609375,
              height: 15.710247039794922,
            }}
            paths={[
              {
                d: "M0.43918 0.43918C0.720471 0.157973 1.10193 0 1.49968 0C1.89743 0 2.27889 0.157973 2.56018 0.43918L7.86418 5.74318L13.1682 0.43918C13.4511 0.165942 13.83 0.0147509 14.2233 0.0181686C14.6166 0.0215862 14.9928 0.17934 15.2709 0.457452C15.549 0.735564 15.7068 1.11178 15.7102 1.50508C15.7136 1.89837 15.5624 2.27728 15.2892 2.56018L9.98518 7.86418L15.2892 13.1682C15.5624 13.4511 15.7136 13.83 15.7102 14.2233C15.7068 14.6166 15.549 14.9928 15.2709 15.2709C14.9928 15.549 14.6166 15.7068 14.2233 15.7102C13.83 15.7136 13.4511 15.5624 13.1682 15.2892L7.86418 9.98518L2.56018 15.2892C2.27728 15.5624 1.89837 15.7136 1.50508 15.7102C1.11178 15.7068 0.735564 15.549 0.457452 15.2709C0.17934 14.9928 0.0215862 14.6166 0.0181686 14.2233C0.0147509 13.83 0.165942 13.4511 0.43918 13.1682L5.74318 7.86418L0.43918 2.56018C0.157973 2.27889 0 1.89743 0 1.49968C0 1.10193 0.157973 0.720471 0.43918 0.43918L0.43918 0.43918Z",
                fill: "rgba(248,248,248,1)",
                fillRule: "nonzero",
              },
            ]}
          ></Icon>
           
           </Button>
      </div>
      <Filters/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-5 px-4 gap-4 mb-12">
      {resultsComplete != null ? (resultsComplete.length <= 0 ?(
        <p className='col-span-3 items-center text-center mt-6'>"No se encontraron colaboradores"</p>
      ):      
      (resultsComplete?.map((colaborator, index) => (
        <CardDos key={index} colaborator={colaborator} sub={sub} serch="true"/>
        )))):(<p className='col-span-3 items-center text-center mt-6'>No se encontraron colaboradores</p>)
        }
  </div>
    </div>
  );
};

export default SearchTeam;
