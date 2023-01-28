import { Button, SelectField } from "@aws-amplify/ui-react";
import React from "react";
import { Page2Arrow, PageArrow } from "../ui-components";

//Lo primero fue meter estos parametros en la seccion de argumentos de la funcion
function Pagination({
  MaxPpagina,
  BackPag,
  NextPag,
  PActual,
  MaxPaginas,
  SeteoActual,
}) {
  //luego cree este estilo
  const estilo = {
    backgroundColor: "rgb(0,75,133)",
    color: "White",
  };

  //Agregue estas funciones estiloActivo, moveTo, botones,

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

    if (ide === "primero" ) {
      estiloActivo(primero, segundo, tercero);
    } else if (ide === "segundo") {
      estiloActivo(segundo, primero, tercero);
    } else if (ide === "tercero") {
      estiloActivo(tercero, primero, segundo);
    }
    SeteoActual(dato - 1);
  }

  function botones(pact, regreso) {
    //alert(pact);
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

  //console.log("paginas",MaxPaginas)

  return (
    <div className="flex flex-col md:flex-row gap-2 justify-end">
      <div className="flex justify-center">
        <SelectField
          width={"100%"}
          onChange={
            /* aqui agregué la funcion para cuando cambia de numero de registros*/ (
              e
            ) => MaxPpagina(e.target.value)
          }
        >
          <option value="nueve">Resultados por página: 9</option>
          <option value="doce">Resultados por página: 12</option>
          <option value="quince">Resultados por página: 15</option>
          <option value="dieciocho">Resultados por página: 18</option>
        </SelectField>
      </div>
      <div className="flex">
        <Button
          variation="link"
          size="small"
          onClick={
            /*las funciones clic para cada boton */ () => {
              SeteoActual(0);
              botones(1, false);
            }
          }
        >
          <Page2Arrow></Page2Arrow>
        </Button>
        <Button
          variation="link"
          size="small"
          onClick={() => {
            if (PActual > 0) {
              BackPag();
              botones(PActual, true);
            }
          }}
        >
          <PageArrow></PageArrow>
        </Button>
        {/*Aqui agregue id para los 3 botones y sus funciones clic */}
        <Button
          style={estilo}
          size="small"
          id="primero"
          onClick={(e) => moveTo(e.target.innerHTML, e.target.id)}
        >
          1
        </Button>
        {MaxPaginas > 1 &&
       ( 
        <>
       <Button
          size="small"
          id="segundo"
          onClick={(e) => moveTo(e.target.innerHTML, e.target.id)}
        >
          2
        </Button>
        {MaxPaginas > 2 &&
        <Button
          size="small"
          id="tercero"
          onClick={(e) => moveTo(e.target.innerHTML, e.target.id)}
        >
          3
        </Button>
        }
        </>
      )}
        <Button variation="link"
          onClick={() => {
            if (PActual < MaxPaginas - 1) {
              NextPag();
              botones(PActual + 2, false);
            }
          }}
        >
          <PageArrow type="Go"></PageArrow>
        </Button>
        <Button
          variation="link"
          size="small"
          onClick={() => {
            SeteoActual(MaxPaginas - 1);
            botones(MaxPaginas, true);
          }}
        >
          <Page2Arrow type="2Go"></Page2Arrow>
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
