import {
  CheckboxField,
  Expander,
  ExpanderItem,
  ThemeProvider,
  Theme,
  Button,
} from "@aws-amplify/ui-react";
import React from "react";

const theme: Theme = {
  name: "expander-theme",
  tokens: {
    components: {
      expander: {
        boxShadow: { value: "none" },
        trigger: {},
        content: {},
      },
    },
  },
};



function Filter(
{ListaPuestos, ListaOrganizacion, cargaFiltrado, DATOS}

) {




  function filtaPuesto(dtos){
    let dfilter=[];
    let j=0;
    let dfil;
    if(ListaPuestos.length>0){
     for(let i=0; i<ListaPuestos.length; i++){
     if(document.getElementsByName(ListaPuestos[i])[0].checked){
     dfilter[j]=dtos?.filter(c => (c.PUESTO === document.getElementsByName(ListaPuestos[i])[0].value));
       j++;
      }
    }
     dfil=dfilter[0];
  for(let k=1; k<dfilter.length; k++){
    dfil=dfil.concat(dfilter[k]);
  }
  if(j>0){
    return dfil;
    }
    else
    {
      return dtos;
    }
 }else{
 return dtos;
 }
 }
  

 function filtraOrg()
 {
  let dfilter=[];
  let j=0;
  let dfil;
  let datFilPuesto=filtaPuesto(DATOS);
  console.log("filtro de puestos: ",datFilPuesto);
  if(ListaOrganizacion.length>0){
    for(let i=0; i<ListaOrganizacion.length; i++){
      if(document.getElementsByName(ListaOrganizacion[i])[0]!==undefined){
      if(document.getElementsByName(ListaOrganizacion[i])[0].checked){
        dfilter[j]=datFilPuesto?.filter(c => (c.ORGANIZACION === document.getElementsByName(ListaOrganizacion[i])[0].value));
      j++;
      }
    }
    }
    dfil=dfilter[0];
    for(let k=1; k<dfilter.length;k++){
      dfil=dfil.concat(dfilter[k]);
    }
    if(j>0){
    cargaFiltrado(dfil);
    console.log("dfil trae: ",dfil);
    }
    else
    {
      cargaFiltrado(datFilPuesto);
    }
  }else{
    cargaFiltrado(datFilPuesto);
  }
 }
 


 


  return (
    <div className="card">
      <div className="m-4">
        <h2 className="text-xl">FILTROS</h2>
      </div>
      <ThemeProvider theme={theme} colorMode="light">
        <Expander type="multiple">
          <ExpanderItem title="PUESTO" value="demo-item-1">
            {ListaPuestos.map((lista, index)=>(
            <CheckboxField key={index} label={lista} name={lista} value={lista} id={index} />
            ))}
          </ExpanderItem>
          <ExpanderItem title="ORGANIZACIÓN" value="demo-item-2">
                        
            {ListaOrganizacion.map((org, index)=>(<CheckboxField
              key={index}
              label={org}
              name={org}
              value={org}
            />))}
            
           
          </ExpanderItem>
        </Expander>
        <div className="flex gap-4 my-4">
          <Button width={"100%"} size="small">Limpiar</Button>
          <Button width={"100%"} variation="primary" size="small" backgroundColor="#004B85" onClick={()=>{filtraOrg()}}>Aplicar</Button>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Filter;
