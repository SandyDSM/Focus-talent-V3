import React from "react";
import HeadAdmin from "../components/HeadAdmin";
import CollaborLogin from "../components/CollaborLogin";
import { API } from 'aws-amplify';
import { useContext, useEffect, useState } from "react";
import ExportExel from "react-export-excel";
import { Button, SelectField, TextField } from "@aws-amplify/ui-react";
import moment from "moment";

const Excelfile = ExportExel.ExcelFile;
const ExcelSheet = ExportExel.ExcelSheet;
const ExcelColum = ExportExel.ExcelColum;

function ReportLogin() {
  const [tableAccess, setTableAccess] = useState([])
  const [dateDe, setDateDe] = useState("")
  const [dateA, setDateA] = useState("")

/*
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
      //setTableAccess(response)
    }catch (error) {
      console.log("error:", error);
    }
  };
 
  useEffect(() => { 
    fetchAccess();
}, [tableAccess]);
*/

console.log("------------------------",dateDe, dateA)

function sendReportbydate(dateInit, dateEnd) {
  const apiName = 'Usuarios';
  const path = '/dateloginrep';
  const myInit = {
    headers: {}, // OPTIONAL
    queryStringParameters: {
      fech_fin: `'${dateEnd}'`,
      fech_inic: `'${dateInit}'`,
    }
  };

  return API.get(apiName, path, myInit);
}
const getReportbydate = async (dateInit, dateEnd) => {
  try{
    const response = await sendReportbydate(dateInit, dateEnd);
    setTableAccess(response)
   console.log("-----------dato",response)
  }catch (error) {
    console.log("error:", error);
  }
};

useEffect(() => { 
  getReportbydate(dateDe, dateA);
}, [tableAccess, dateDe, dateA]);


  return (
    <div className="flex flex-col gap-6">
    <HeadAdmin title={"Reporte de Accesos"} />
    <div className='px-11'>
    <div className="card flex flex-row gap-6 items-end	mb-8">
      
      <TextField 
      label="De:" 
      type="date" 
      minWidth={"240px"}
      value={dateDe}
      onChange={(e) => setDateDe(e.target.value)}
      ></TextField>
      <TextField 
      label="A:" 
      type="date"
      minWidth={"240px"}
      value={dateA}
      onChange={(e) => setDateA(e.target.value)}
      ></TextField>
      <Excelfile element={<Button variation="primary">Exportar a excel</Button>} filename="Reporte de Accesos">
        <ExcelSheet data={tableAccess} name="Reporte">
          <ExcelColum label="ID Colaborador" value="ID_COLABORADOR"/>
          <ExcelColum label="Nombre del colaborador" value="NOM_COMP"/>
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
