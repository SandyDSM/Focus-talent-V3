import { SelectField } from "@aws-amplify/ui-react";
import React from "react";
import Filter from "../components/Filter";
import HeadTeam from "../components/HeadTeam";
import CardsUsers from "./CardsUsers";
import { Loader } from "@aws-amplify/ui-react";

import { useContext, useEffect } from "react";
import CollaboratorsContext from "../context/collaborators";
import Pagination from "../components/Pagination";

const MyTeam = () => {
  const {
    collaborators,
    getCollaborators,
    isLoading,
    separadosCol,
    datosFiltrados,
    obtenPuesto,
    obtenOrganizacion,
    defineMax,
    paginateFront,
    paginateBack,
    setActual,
    currentPage,
    usuarioActualDatos, 
    ordena,
    actualizaBusqueda
  } = useContext(CollaboratorsContext);

  useEffect(() => {
    if (usuarioActualDatos.ID_COLABORADOR != undefined) {
      getCollaborators(usuarioActualDatos.ID_COLABORADOR, "SetColaborators");
    }
  }, [usuarioActualDatos.ID_COLABORADOR]);

  const PUESTOS = obtenPuesto();
  const ORGANIZACIONES = obtenOrganizacion();
  
  useEffect(() => { 
    actualizaBusqueda(collaborators);
  }, [collaborators]);


function cambia(evento){
  ordena(evento);
  console.log(collaborators);//x
}











  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <Loader size="large" />
      </div>
    );
  }
  return (
    <>
      <HeadTeam />
      {separadosCol === 0 ? (
        <div className="flex justify-center my-10 items-center">
          <h3>Usted no cuenta con reportes directos</h3>{" "}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-5">
          <div className="col-end-2 md:col-end-5">
            <SelectField label="Order" labelHidden={true} onChange={(e)=>ordena(e.target.value)}>
              <option value="Ascendente">Ordenar por: Ascendente</option>
              <option value="descendente">Ordenar por: Descendente</option>
            </SelectField>
          </div>
          <div className="col-start-1 row-start-2  mt-4">
            <Filter
              ListaPuestos={PUESTOS}
              ListaOrganizacion={ORGANIZACIONES}
              cargaFiltrado={datosFiltrados}
              DATOS={collaborators}
            />
          </div>
          <div className="col-span-1 row-start-3 sm:col-span-2 md:row-start-2 md:col-span-3 ">
            <CardsUsers collaborators={separadosCol[currentPage]} sub={false} />
          </div>
          <div className="col-end-2 col-span-1 md:col-end-5 md:col-span-2 justify-end">
            {(separadosCol.length > 1 || defineMax != "nueve") && (
              <Pagination
                MaxPpagina={defineMax}
                BackPag={paginateBack}
                NextPag={paginateFront}
                PActual={currentPage}
                MaxPaginas={separadosCol.length}
                SeteoActual={setActual}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MyTeam;
