import React from "react";
import { X } from "lucide-react";
import Filters from "../components/Filters";
import CardDos from "../components/CardDos";
import LoadingSpinner from "../components/LoadingSpinner";
import { useContext } from "react";
import CollaboratorsContext from "../context/collaborators";

const SearchTeam = ({ sub, setCloseSerchAll }) => {
  const { isLoading, resultsComplete, resBusq, buttonCerrar, filtNoSeEncColabs } = useContext(CollaboratorsContext);

  const onClose = () => {
    setCloseSerchAll(0);
  };

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <div className="mt-4">
      <div className="cardTitle col-span-1 sm:col-span-2 md:col-span-3 bg-bmb-secundary flex flex-row items-center gap-6 justify-between mx-4 md:mx-8">
        <p>{resBusq}</p>
        <button
          className="flex items-center gap-1 text-white text-sm hover:opacity-80 transition-opacity"
          onClick={onClose}
        >
          <span className="mx-2">{buttonCerrar}</span>
          <X size={12} color="rgba(248,248,248,1)" />
        </button>
      </div>
      <Filters />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-5 px-0 md:px-4 gap-4 mb-12">
        {resultsComplete != null ? (
          resultsComplete.length <= 0 ? (
            <p className="col-span-3 items-center text-center mt-6">"{filtNoSeEncColabs}"</p>
          ) : (
            resultsComplete?.map((colaborator, index) => (
              <CardDos key={index} colaborator={colaborator} sub={sub} serch="true" />
            ))
          )
        ) : (
          <p className="col-span-3 items-center text-center mt-6">{filtNoSeEncColabs}</p>
        )}
      </div>
    </div>
  );
};

export default SearchTeam;
