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
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 bg-white rounded shadow-sm w-full transition-all relative">
      <div className="flex-1">
        <h3 className="text-lg font-medium">Mi equipo</h3>
      </div>
      <div className="relative">
        <input
          id="busqueda"
          type="search"
          placeholder="Buscar Colaborador"
          ref={inputRef}
          onChange={handleChange}
          onInput={(e) => { if (e.target.value === "") onClear(); }}
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue w-64"
        />
        <button ref={searchButtonRef} className="sr-only">Buscar</button>
      </div>
      {busqueda && <CardSerch collaborators={results} setCloseSerchAll={props.setCloseSerchAll} />}
    </div>
  );
}
