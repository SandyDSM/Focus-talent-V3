import React from "react";
import { Page2Arrow, PageArrow } from "../ui-components";

function PaginationEstructuras({
  MaxPpagina,
  BackPag,
  NextPag,
  PActual,
  MaxPaginas,
  SeteoActual,
}) {
  const estilo = {
    backgroundColor: "rgb(0,75,133)",
    color: "White",
  };

  function estiloActivo(elementoActivo, elemento1, elemento2) {
    elementoActivo.style.backgroundColor = "rgb(0,75,133)";
    elementoActivo.style.color = "White";
    elemento1.style.backgroundColor = "white";
    elemento1.style.color = "black";
    (elemento2 != undefined) && (elemento2.style.backgroundColor = "white");
    (elemento2 != undefined) && (elemento2.style.color = "black");
  }

  function moveTo(dato, ide) {
    const primero = document.getElementById("primero");
    const segundo = document.getElementById("segundo");
    const tercero = document.getElementById("tercero");

    if (ide === "primero") {
      estiloActivo(primero, segundo, tercero);
    } else if (ide === "segundo") {
      estiloActivo(segundo, primero, tercero);
    } else if (ide === "tercero") {
      estiloActivo(tercero, primero, segundo);
    }
    SeteoActual(dato - 1);
  }

  function botones(pact, regreso) {
    const primero = document.getElementById("primero");
    const segundo = document.getElementById("segundo");
    const tercero = document.getElementById("tercero");
    if (pact % 3 === 1) {
      estiloActivo(primero, segundo, tercero);
      if (!regreso) {
        primero.innerHTML = pact;
        segundo.innerHTML = pact + 1;
        tercero.innerHTML = pact + 2;
      }
    } else if (pact % 3 === 2) {
      estiloActivo(segundo, primero, tercero);
    } else if (pact % 3 === 0) {
      estiloActivo(tercero, primero, segundo);
      if (regreso) {
        primero.innerHTML = pact - 2;
        segundo.innerHTML = pact - 1;
        tercero.innerHTML = pact;
      }
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-2 justify-end">
      <div className="flex items-center">
        <button
          className="p-1 text-bmb-secundary hover:text-bmb-blue"
          onClick={() => { SeteoActual(0); botones(1, false); }}
        >
          <Page2Arrow />
        </button>
        <button
          className="p-1 text-bmb-secundary hover:text-bmb-blue"
          onClick={() => { if (PActual > 0) { SeteoActual(PActual - 1); botones(PActual, true); } }}
        >
          <PageArrow />
        </button>
        <button
          style={estilo}
          className="px-2 py-1 text-sm rounded"
          id="primero"
          onClick={(e) => moveTo(e.target.innerHTML, e.target.id)}
        >
          1
        </button>
        {MaxPaginas > 1 && (
          <>
            <button
              className="px-2 py-1 text-sm rounded hover:bg-gray-100"
              id="segundo"
              onClick={(e) => moveTo(e.target.innerHTML, e.target.id)}
            >
              2
            </button>
            {MaxPaginas > 2 && (
              <button
                className="px-2 py-1 text-sm rounded hover:bg-gray-100"
                id="tercero"
                onClick={(e) => moveTo(e.target.innerHTML, e.target.id)}
              >
                3
              </button>
            )}
          </>
        )}
        <button
          className="p-1 text-bmb-secundary hover:text-bmb-blue"
          onClick={() => { if (PActual < MaxPaginas - 1) { SeteoActual(PActual + 1); botones(PActual + 2, false); } }}
        >
          <PageArrow type="Go" />
        </button>
        <button
          className="p-1 text-bmb-secundary hover:text-bmb-blue"
          onClick={() => { SeteoActual(MaxPaginas - 1); botones(MaxPaginas, true); }}
        >
          <Page2Arrow type="2Go" />
        </button>
      </div>
    </div>
  );
}

export default PaginationEstructuras;
