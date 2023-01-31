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
       alert(document.getElementsByName(ListaPuestos[i])[0].value)
       
       dfilter[j]=dtos?.filter(c => (c.PUESTO === document.getElementsByName(ListaPuestos[i])[0].value));
       j++;
      }
    }
     dfil=dfilter[0];
  for(j=1; j<dfilter.length;j++){
    dfil=dfil.concat(dfilter[j]);
    
  }
   //cargaFiltrado(dfil)
   console.log("dfil=",dfil);
 return dfil;
 }else{
 return dtos;
   //cargaFiltrado(dtos);
 }
 }
  



  function pruebaPush(datos, fil){
         var xyzz=datos.filter(c=>c.PUESTO==fil)
   return xyzz;
  
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
          <Button width={"100%"} variation="primary" size="small" backgroundColor="#004B85" onClick={()=>{filtaPuesto(DATOS)}}>Aplicar</Button>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Filter;
