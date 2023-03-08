import { CheckboxField, Button } from "@aws-amplify/ui-react";
import React from "react";
import { useEffect, useContext, useState } from "react";

function TestCheck({ ElementosFiltro, defineAnios, selecall, Setselectall }) {
  ////////////////////////////////////////////////////////////////////////////
  function obtenAnios(anio) {
    let datos = anio;

    let anios = [];
    for (let i = 0; i < datos.length; i++) {
      anios[i] = datos[i].ANO_EVAL;
    }
    let result = anios.filter((item, index) => {
      return anios.indexOf(item) === index;
    });
    console.log(result);
    return result;
  }
  let listaFiltros;

  function Arrfiltros() {
    if (ElementosFiltro) {
      let filtros = obtenAnios(ElementosFiltro);
      listaFiltros = filtros;
      filtros.sort((a, b) => {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
      });
      const y=filtros[0];
      return filtros.map((anio, index) => (
        <CheckboxField
        key={index}
          label={anio}
          name={anio}
          value={anio}
          defaultChecked={anio === y || selecall===true ? true : false}
          id={anio}
        />
      ));
    }
  }

  useEffect(() => {

  }, [selecall]);

  
function checar() {
 
  
Setselectall(true);
  }

function limpiar(){
  Setselectall(false); 
}

  let anios = [];
  let j = 0;
  function buscar(){
    for (let i = 0; i < listaFiltros.length; i++) {
      if (document.getElementById(listaFiltros[i]).checked) {
        //alert(document.getElementById(listaFiltros[i]).value)
        anios[j] = document.getElementById(listaFiltros[i]).value;
        j++;
      }
    }
    if (anios.length === 0) {
      defineAnios(listaFiltros);
    } else {
      defineAnios(anios);
    }
  }


  //////////////////////////////////////////////////////////////////////////////

  return (
    <div className="card m-auto">
      <div className="m-4">
        <h2 className="text-xl text-center">EVALUACIONES</h2>
        <Button width={"100%"} variation="link" size="small" 
        onClick={() => {
          checar();
        }}
        >
          Seleccionar todo
        </Button>
      </div>
      <div className="flex flex-col gap-2">{Arrfiltros()}</div>
      <div className="flex gap-4 my-4">
        <Button width={"100%"} size="small"
         onClick={() => {
          limpiar();
        }}
        
        >
          Limpiar
        </Button>
        <Button
          width={"100%"}
          variation="primary"
          size="small"
          onClick={() => {
            buscar();
          }}
        >
          Ver
        </Button>
      </div>
    </div>
  );
}

export default TestCheck;
