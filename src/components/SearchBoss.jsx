import React from "react";
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
  const [permExtend, setPermExtend] = useState([]);
  const [org, setOrg] = useState([]);
  const [fun, setFun] = useState([]);

  

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
    //console.log();
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
  
  const formatToQuotedString = (input) => {
    if (typeof input === 'string') {
      // Dividir por comas y eliminar espacios en blanco
      const array = input.split(',').map(item => item.trim());
      // Agregar comillas simples a cada elemento
      return array.map(item => `'${item}'`).join(',');
    }
    return '';
  };
  

  const updatePermissionsInd = async () => {
    console.log(org,fun);
    try{
      const formattedOrg = formatToQuotedString(org);
      const formattedFun = formatToQuotedString(fun);

      let parametros={
        USER_INTERNAL_ID: `${idCol}`,
        ORG_UNI: formattedOrg,
        FUNC_AREA: formattedFun
      };
      const response = await getData('Usuarios', '/updpermissions', parametros);
      setOpen(false);
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
    //console.log(tempArray);
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
          <h3 className="text-base font-semibold">Colaboradores con Permisos</h3>
          <hr className="border-t border-gray-200 w-full" />
        </div>
        <HeadTableColl add="false" />
        <Modal
          open={open}
          setOpen={setOpen}
          elementBody={
            <div className="w-full py-6 px-12 ">
              <h3 className="text-base font-semibold">Permisos Extendidos</h3>
              <hr className="border-t border-gray-200 w-full" />
              <div className="flex gap-6 items-end my-6">
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="prueba" className="text-sm font-medium text-gray-700">ID's Unidad Organizacional</label>
                  <textarea
                    id="prueba"
                    defaultValue={permExtend[0]?.ORG_STRUCT_IDS}
                    onChange={(e) => setOrg(e.target.value)}
                    rows={3}
                    className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue resize-y w-full"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="area" className="text-sm font-medium text-gray-700">ID's Área funcional</label>
                  <textarea
                    id="area"
                    defaultValue={permExtend[0]?.FUNCTIONAL_AREA_IDS}
                    onChange={(e) => setFun(e.target.value)}
                    rows={3}
                    className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue resize-y w-full"
                  />
                </div>
              </div>
              <div
                className="flex flex-row items-center gap-6 justify-end"
                style={{ marginTop: 50, marginBottom: 10 }}
              >
                <button className="border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded hover:bg-gray-50 transition-colors" onClick={() => setOpen(false)}>Cancelar</button>
                <button className="bg-bmb-blue text-white text-sm px-4 py-2 rounded hover:bg-bmb-secundary transition-colors" onClick={() => updatePermissionsInd()}>
                  Guardar
                </button>
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
          <button className="bg-bmb-blue text-white text-sm px-4 py-2 rounded hover:bg-bmb-secundary transition-colors" onClick={() => Insertar()}>
            Guardar
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-1 my-2">
          <h3 className="text-base font-semibold">Realiza la busqueda del colaborador y seleccionalo para que tenga los permisos correspondientes</h3>
          <hr className="border-t border-gray-200 w-full" />
        </div>
        <div>
          <input
            type="search"
            placeholder="Buscar colaborador"
            onChange={handleChange}
            onInput={(e) => { if (e.target.value === "") onClear(); }}
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue w-72"
          />
        </div>
        </div>
        <div>
        <div className="flex flex-col gap-1 my-2">
          <h3 className="text-base font-semibold">Colaboradores</h3>
          <hr className="border-t border-gray-200 w-full" />
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
