import * as React from "react";
import { useContext, useEffect, useState, useRef, useCallback } from "react";
import CollaboratorsContext from "../context/collaborators";
import { API } from "aws-amplify";
import CardSerch from "../components/CardSerch";

export default function BannerSearchAll(props) {
  const { fetchCollAllClic, usuarioActualDatos } = useContext(CollaboratorsContext);
  const [busqueda, setBusqueda] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const val = e.target.value;
    setBusqueda(val.length >= 3 ? val : "");
  };

  const onClear = () => {
    setBusqueda("");
  };

  function getData(busqueda) {
    return API.get("Usuarios", "/busq_limit", {
      headers: {},
      queryStringParameters: {
        BUSQUEDA: `${busqueda}`,
        USERID: `${usuarioActualDatos.INTERNAL_ID}`,
      },
    });
  }

  const fetchCollAll = async (busqueda) => {
    try {
      const response = await getData(busqueda);
      setResults(response);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const inputRef = useRef(null);
  const searchButtonRef = useRef(null);

  const onClick = useCallback(() => {
    inputRef.current.focus();
    const search = inputRef.current.value;
    fetchCollAllClic(search);
    props.setCloseSerchAll(1);
    setBusqueda("");
  }, []);

  useEffect(() => {
    const searchButtonRefCurrent = searchButtonRef.current;
    if (searchButtonRef && searchButtonRefCurrent) {
      searchButtonRefCurrent.addEventListener("click", onClick, false);
      return () => {
        searchButtonRefCurrent.removeEventListener("click", onClick, false);
      };
    }
  }, [onClick]);

  useEffect(() => {
    fetchCollAll(busqueda);
  }, [busqueda]);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 mx-4 md:mx-5 px-4 py-3 bg-white rounded-lg shadow-panel border border-border-subtle relative">
      <h3 className="flex-1 text-base font-semibold text-text-primary">Mi equipo</h3>
      <div className="relative">
        <input
          id="busqueda"
          type="search"
          placeholder="Buscar Colaborador"
          ref={inputRef}
          onChange={handleChange}
          onInput={(e) => { if (e.target.value === "") onClear(); }}
          className="border border-border-subtle rounded-lg px-3 py-2 text-sm text-text-primary
                     placeholder:text-text-muted bg-surface-muted
                     focus:outline-none focus:ring-2 focus:ring-bmb-blue/30 focus:border-bmb-blue
                     transition-colors duration-180 w-60"
        />
        <button ref={searchButtonRef} className="sr-only">Buscar</button>
      </div>
      {busqueda && <CardSerch collaborators={results} setCloseSerchAll={props.setCloseSerchAll} />}
    </div>
  );
}
