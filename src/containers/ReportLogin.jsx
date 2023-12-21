import React from "react";
import HeadAdmin from "../components/HeadAdmin";
import CollaborLogin from "../components/CollaborLogin";
import { API } from 'aws-amplify';
import { useContext, useEffect, useState } from "react";
import ExportExel from 'react-export-excel'
import { Button } from "@aws-amplify/ui-react";

const Excelfile = ExportExel.ExcelFile;
const ExcelSheet = ExportExel.ExcelSheet;
const ExcelColum = ExportExel.ExcelColum;

function ReportLogin() {
  const [tableAccess, setTableAccess] = useState([])


  function getAccess() {
    const apiName = 'Usuarios';
    const path = '/loginreport';
    const myInit = {
      headers: {}, // OPTIONAL
    };
  
    return API.get(apiName, path, myInit);
  }

  const fetchAccess = async () => {
    try{
      const response = await getAccess();
      //console.log("Access",response)
      setTableAccess(response)
    }catch (error) {
      console.log("error:", error);
    }
  };
 
  useEffect(() => { 
    fetchAccess();
}, [tableAccess]);

  return (
    <div className="flex flex-col gap-6">
    <HeadAdmin title={"Reporte de Accesos"} />
    <div className='px-11'>
    <div className="card grid justify-items-end mb-8">
      <Excelfile element={<Button variation="primary">Exportar a excel</Button>} filename="Reporte de Accesos">
        <ExcelSheet data={tableAccess} name="Reporte">
          <ExcelColum label="ID Colaborador" value="ID_COLABORADOR"/>
          <ExcelColum label="Nombre" value="NOMBRE"/>
          <ExcelColum label="Apellido" value="APELLIDOS"/>
          <ExcelColum label="Fecha de último acceso" value="FECHA_DE_ULTIMO_ACCESO"/>
          <ExcelColum label="Total de accesos" value="NUMERO_DE_ACCESOS"/>
        </ExcelSheet>
      </Excelfile>
      </div>
    <div className="card flex flex-col gap-6 w-full mb-8 overflow-x-scroll">
        <CollaborLogin tableAccess={tableAccess}/>
    </div>
    </div>
  </div>
  );
}

export default ReportLogin;
