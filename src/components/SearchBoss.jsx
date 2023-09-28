import React from "react";
import { Heading, Divider, Button, SearchField } from "@aws-amplify/ui-react";
import HeadTableColl from "./HeadTableColl";
import TableColl from "./TableColl";
import CollaboratorsContext from "../context/collaborators";
import { useContext, useState, useEffect } from "react";
import { API } from "aws-amplify";
import Swal from 'sweetalert2'


function SearchBoss({ tablePermission, handleChange, onClear }) {
  const { resultsComplete } = useContext(CollaboratorsContext);
  const [collSelect, setCollSelect] = useState([]);

  useEffect(() => { 
    setCollSelect(tablePermission);
}, [tablePermission]);

  console.log(collSelect);

  const pullOrg = (indice) => {
    let orgtemp = collSelect;
    orgtemp.splice(indice, 1);
    setCollSelect([...orgtemp]);
    // alert("El indice dice ", indice);
  };

  const pushOrg = (obj) => {
    let orgtemp = collSelect;
    let orgval = [];
    orgval = orgtemp.filter(
      (element) => element.INTERNAL_ID === obj.INTERNAL_ID
    );
    if (orgval.length === 0) {
      orgtemp.push(obj);
    }
    setCollSelect([...orgtemp]);
  };

  function getData(papiName, ppath, pparameters) {
    const apiName = papiName;
    const path = ppath;
    const myInit = {
      headers: {}, // OPTIONAL
      queryStringParameters: pparameters
    };
  
    return API.get(apiName, path, myInit);
  } 

  const updatePermissions = async (ids) => {
    //console.log(typeof ids, ids);
    try{
      let parametros={ARRAY: ids};
      const response = await getData('Usuarios', '/searchupdtusr', parametros);
      Swal.fire({
        icon: 'success',
        text: 'Los permisos se han actualizado con éxito',
        confirmButtonText: "Entendido",
        confirmButtonColor:"#004B85"
      })
    }catch (error) {
      console.log("error:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por el momento no se pueden guardar los cambios, por favor intenta más tarde',
        confirmButtonText: "Entendido",
        confirmButtonColor:"#004B85"
      })
    }
  };

  const Insertar = async () => {
    const tempArray = collSelect.map((dato) =>{
      return dato.INTERNAL_ID;
    })
    console.log(tempArray);
    updatePermissions(tempArray.toString());
  };


  return (
    <div className="flex flex-col gap-6 w-full">
      <div>
        <div className="flex flex-col gap-1 my-2">
          <Heading level={6}> Colaboradores con Permisos </Heading>
          <Divider />
        </div>
        <HeadTableColl />
        {collSelect?.map((colaborator, index) => (
          <TableColl
            key={index}
            colaborator={colaborator}
            selectorg={pullOrg}
            indice={index}
          />
        ))}
        <div
          className="flex flex-row items-center gap-6 justify-end"
          style={{ marginTop: 50, marginBottom: 50 }}
        >
          <Button
            variation="primary"
            style={{ backgroundColor: "#004B85" }}
            onClick={() => Insertar()}
          >
            Guardar
          </Button>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-1 my-2">
          <Heading level={6}>Realiza la busqueda del colaborador y seleccionalo para que tenga los permisos correspondientes</Heading>
          <Divider />
        </div>
        <div>
          <SearchField
            placeholder="Buscar colaborador"
            width="300px"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            onChange={handleChange}
            onClear={() => onClear()}
            hasSearchButton={false}
            hasSearchIcon={true}
          />
        </div>
        </div>
        <div>
        <div className="flex flex-col gap-1 my-2">
          <Heading level={6}> Colaboradores </Heading>
          <Divider />
        </div>
        <HeadTableColl />
        {resultsComplete != null ? (
          resultsComplete.length <= 0 ? (
            <p className="col-span-3 items-center text-center mt-6">
              "No se encontraron colaboradores"
            </p>
          ) : (
            resultsComplete?.map((colaborator, index) => (
              <TableColl
                key={index}
                colaborator={colaborator}
                selectorg={pushOrg}
                add="true"
              />
            ))
          )
        ) : (
          <p className="col-span-3 items-center text-center mt-6">
            No se encontraron colaboradores
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchBoss;
