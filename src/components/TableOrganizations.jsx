import React from "react";
import TableRowOrganization from "./TableRowOrganization";
import HeadTable from "./HeadTable";
import { Button, Divider, Heading, TextField } from "@aws-amplify/ui-react";
import TableRowOrganizationSelect from "./TableRowOrganizationSelect";
import PaginationEstructuras from "./PaginationEstructuras";
import { useState } from "react";
import { useEffect } from "react";

function TableOrganizations({close}) {
  const [organizations, setOrganizations]=useState([]);
  const [organizationSelect, setOrganizationsSelect]=useState([]);

const pullOrg=(indice)=>{
  let orgtemp=organizationSelect;
  orgtemp.splice(indice,1);
  setOrganizationsSelect([...orgtemp]);
}

const pushOrg=(obj)=>{
  
let orgtemp=organizationSelect;
let orgval=[];
orgval=orgtemp.filter(element=>element.ID===obj.ID);
if(orgval.length===0){
  orgtemp.push(obj);
}
setOrganizationsSelect([...orgtemp]);
console.log(organizationSelect);
}

useEffect(()=>{

 },[organizationSelect]);

  //////////////////////////////////////////////////////////////

     ////////  ////////   ////////
    //        //    //   //    //
   ////////  ///////    //////
        //  //    //   //  //
 ////////  ////////   //   //
const searchbyName=async(name)=>{
  try{
    const respdesemp = await fetch(
      `https://talento-itzahuia.com/SAC/gb_orgest.php?ID='${name}'`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "token": "8da9aebd984ef3897b280ff7efabf83d931f99lb"
        },
      }
    ); 
    const datos = await respdesemp.json();
    setOrganizations(datos);
  } catch (error) {
    setOrganizations([]);

  }
}

 ///////////////////////////////////////////////////////////////////
 const getOusbyParent= async (ID) => {
  try {
    
      const respdesemp = await fetch(
      `https://talento-itzahuia.com/SAC/gb_orgest.php?parentID='${ID}'`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "token": "8da9aebd984ef3897b280ff7efabf83d931f99lb"
        },
      }
    ); 
    const datos = await respdesemp.json();
    setOrganizations(datos);
  } catch (error) {
    setOrganizations([]);
  } 
};


//////////////////////////////////////////////////////////////////
 useEffect(()=>{
  getOus();
 },[]);

 const getOus= async () => {
  try {
      const respdesemp = await fetch(
      `https://talento-itzahuia.com/SAC/gb_orgest.php`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "token": "8da9aebd984ef3897b280ff7efabf83d931f591b"
        },
      }
    ); 
    const datos = await respdesemp.json();
    setOrganizations(datos);
   console.log("datos",datos);
    // alert(datos);
  } catch (error) {
    setOrganizations([]);
  } 
};


 //////////////////////////////////////////////////////////////
  
  return (
    <div className="flex flex-col gap-4 p-4 w-full">
      <Heading level={5}>
        Seleccionar la estructura organizacional a notificar
      </Heading>
      <div className="flex flex-col gap-1">
        <Heading level={6}> Busqueda</Heading>
        <Divider />
      </div>
      <div className="flex flex-row gap-4 items-end	">
        <TextField
          label={"Nombre"}
          id={"nombre"}
          placeholder={"Buscar por nombre"}
          size="small"
        />
        <TextField id={"ID"} label={"ID"} placeholder={"Buscar por ID"} size="small" />
        <Button
          variation="primary"
          loadingText="Buscando"
          size="small"
          onClick={() => {
            if(document.getElementById("nombre").value!==null){
            searchbyName(document.getElementById("nombre").value);
            }else if(document.getElementById("ID").value!==null){
              searchbyName(document.getElementById("ID").value);
            }
          }}
        >
          Buscar
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <Heading level={6}> Estructuras seleccionadas</Heading>
        <Divider />
      </div>
      <div className="flex flex-col gap-0">
      {organizationSelect?.map((org, index)=>(
        <TableRowOrganizationSelect organization={org} key={index} indice={index} pullorg={pullOrg}/>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <Heading level={6}> Estructuras</Heading>
        <Divider />
      </div>
      <div className="flex flex-col gap-0">
        <HeadTable
          col1={"Agregar"}
          classcol2={"hidden"}
          col3={"Título"}
          col4={"ID"}
        />
{organizations?.map((org, index)=>(
        <TableRowOrganization key={index} organization={org} setchild={getOusbyParent} selectorg={pushOrg}/>
        ))}
      </div>
        <PaginationEstructuras />
      <div className="flex flex-row gap-5 justify-end px-4">
        <Button width={"150px"}
        onClick={()=>close()}
        >Cancelar</Button>
        <Button width={"150px"} variation="primary">
          Enviar
        </Button>
      </div>
    </div>
  );
}

export default TableOrganizations;
