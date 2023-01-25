import {
  CheckboxField,
  Button,
} from "@aws-amplify/ui-react";
import React from "react";

function TestCheck({ElementosFiltro, defineAnios}) {
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


function Arrfiltros()
{
  if(ElementosFiltro){
    let filtros=obtenAnios(ElementosFiltro);
    listaFiltros=filtros;
    filtros.sort((a, b) => {
      if (a < b) return 1
      if (a > b) return -1
      return 0
    })
    return(
      filtros.map((anio)=>(<CheckboxField label={anio} name={anio} value={anio} defaultChecked={anio=="2022"? true: false} id={anio} /> ))
    );
     
  }
}

function checar(){
  let anios = [];
  let j=0;



for(let i=0; i<listaFiltros.length; i++){
if(document.getElementById(listaFiltros[i]).checked){
  //alert(document.getElementById(listaFiltros[i]).value)
anios[j]=document.getElementById(listaFiltros[i]).value;
j++;
}
}
if(anios.length===0){
  defineAnios(listaFiltros);
}else{
defineAnios(anios);
}
}



//////////////////////////////////////////////////////////////////////////////





  return (
    <div className="card m-auto">
      <div className="m-4">
        <h2 className="text-xl">EVALUACIONES</h2>
        <Button width={"100%"} variation="link" size="small" >Seleccionar todo</Button>
      </div>
      <div className="flex flex-col gap-2">
      {Arrfiltros()}
      </div>
      <div className="flex gap-4 my-4">
          <Button width={"100%"} size="small">Limpiar</Button>
          <Button width={"100%"} variation="primary" size="small" onClick={()=>{checar()}}>Ver</Button>
        </div>

    </div>
  );
}

export default TestCheck;
