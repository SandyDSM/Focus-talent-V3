import { SelectField } from "@aws-amplify/ui-react";
import Filter from "../components/Filter";
import CardsUsers from "./CardsUsers";
import { Loader } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import CollaboratorsContext from "../context/collaborators";
import { HeadTeamFrom } from "../ui-components";
import BreadCrums from "../components/BreadCrums";
import Pagination from "../components/Pagination";

function TeamSub() {
  const { id } = useParams();
  const {
    getCollaborators,
    subcollaborators,
    getCollDetail,
    collDetail,
    isLoading,
    separadosSub,
    datosFiltrados,
    obtenPuesto,
    obtenOrganizacion,
    defineMax,
    paginateFront,
    paginateBack,
    setActual,
    currentPage,
  } = useContext(CollaboratorsContext);

  const PUESTOS = obtenPuesto();
  const ORGANIZACIONES = obtenOrganizacion();

  console.log("subs",subcollaborators)

  useEffect(() => {
    getCollDetail(id)
    .then(getCollaborators(collDetail.ID_COLABORADOR, "SetSubColaborators"))
    .catch(null);
  }, [collDetail.ID_COLABORADOR]);

  const sendOverridesTeamFrom = {
    nameColl: { children: `${collDetail.NOMBRE} ${collDetail.APELLIDOS} ` },
    SearchField: {display: 'none'}
  };

  const Loader = (()=>{
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <Loader size="large" />
      </div>
    );
  }
})

Loader();
  return (
    <>
      <div className="mx-4">
        <BreadCrums text="Equipo de" colaborator={collDetail.NOMBRE} />
      </div>
      <HeadTeamFrom width={"100%"} overrides={sendOverridesTeamFrom} />
      <div className="grid grid-cols-1 md:grid-cols-3 l:grid-cols-4 gap-4 mdgrid-rows-3 m-5">
        <div className="col-end-5">
          <SelectField label="Order" labelHidden={true}>
            <option value="Ascendente">Ordenar por: Ascendente</option>
            <option value="descendente">Ordenar por: Descendente</option>
          </SelectField>
        </div>
        <div className="col-start-1 md:row-start-2  mt-4">
          <Filter
            ListaPuestos={PUESTOS}
            ListaOrganizacion={ORGANIZACIONES}
            cargaFiltrado={datosFiltrados}
          />
        </div>
        <div className=" col-span-3">
          <CardsUsers collaborators={subcollaborators} sub={true} />
        </div>
        <div className="col-end-2 col-span-1 md:col-end-5 md:col-span-2 justify-end">
        {(separadosSub.length > 1 || defineMax != "nueve" ) && (
          <Pagination
            MaxPpagina={defineMax}
            BackPag={paginateBack}
            NextPag={paginateFront}
            PActual={currentPage}
            MaxPaginas={separadosSub.length}
            SeteoActual={setActual}
          />)}
        </div>
      </div>
    </>
  );
}

export default TeamSub;
