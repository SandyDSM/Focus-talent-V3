import React from "react";
import { Heading, Divider, Button, SearchField, TextField, TextAreaField } from "@aws-amplify/ui-react";
import HeadTableColl from "./HeadTableColl";
import TableColl from "./TableColl";
import CollaboratorsContext from "../context/collaborators";
import Modal from "../components/Modal";
import { useContext, useState, useEffect } from "react";
import { API } from "aws-amplify";
import Swal from 'sweetalert2'


function SearchBoss({ tablePermission, handleChange, onClear }) {
  const { resultsComplete, filtNoSeEncColabs} = useContext(CollaboratorsContext);
  const [collSelect, setCollSelect] = useState([]);
  const [open, setOpen] = useState(false);
  const [idCol, setIdCol] = useState(0);
  const [permExtend, setPermExtend] = useState([])
  

  useEffect(() => { 
    fetchPermissionsExtend();
  }, [open]);

  useEffect(() => { 
    setCollSelect(tablePermission);
}, [tablePermission]);



  //console.log(collSelect);

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
    
      const fetchPermissionsExtend = async () => {
        try{
          let parametros = {INT_ID:`${idCol}`}
          const response = await getData('Usuarios', '/getsearchpermi', parametros);
          console.log("Permissions Extend",response)
          setPermExtend(response)
        }catch (error) {
          console.log("error:", error);
        }
      };

  function openModal(id_col) {
    setIdCol(id_col);
    setOpen(true);
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <div>
        <div className="flex flex-col gap-1 my-2">
          <Heading level={6}> Colaboradores con Permisos </Heading>
          <Divider />
        </div>
        <HeadTableColl add="false" />
        <Modal
          open={open}
          setOpen={setOpen}
          elementBody={
            <div className="w-full py-6 px-12 ">
              <Heading level={6}> Permisos Extendidos</Heading>
              <Divider />
              <div className="flex gap-6 items-end my-6">
                <TextAreaField
                  width={"100%"}
                  id="prueba"
                  label="ID's Unidad Organizacional"
                  defaultValue={permExtend[0]?.ORG_STRUCT_IDS}
                  rows={3}
                />
                <div className="w-full">
                  <TextAreaField
                    id="area"
                    label="ID's Área funcional"
                    defaultValue={permExtend[0]?.FUNCTIONAL_AREA_IDS}
                    rows={3}
                  >
                  </TextAreaField>
                </div>
              </div>
              <div
                className="flex flex-row items-center gap-6 justify-end"
                style={{ marginTop: 50, marginBottom: 10 }}
              >
                <Button onClick={()=>setOpen(false)}>Cancelar</Button>
                <Button variation="primary" style={{backgroundColor:"#004B85"}} onClick={() => Insertar()}>
                  Guardar
                </Button>
              </div>
            </div>
          }
        />
        {collSelect?.map((colaborator, index) => (
          <TableColl
            key={index}
            colaborator={colaborator}
            selectorg={pullOrg}
            indice={index}
            handleOpen={openModal}
            add="false"
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
        <HeadTableColl add="true" />
        {resultsComplete != null ? (
          resultsComplete.length <= 0 ? (
            <p className="col-span-3 items-center text-center mt-6">
              "{filtNoSeEncColabs}"
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
            {filtNoSeEncColabs}
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchBoss;
