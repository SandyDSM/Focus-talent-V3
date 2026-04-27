import React, { useEffect, useState } from "react";
import HeadAdmin from "../components/HeadAdmin";
import CollaborLogin from "../components/CollaborLogin";
import { API } from 'aws-amplify';
import * as XLSX from "xlsx";
import { Button, TextField } from "@aws-amplify/ui-react";

function ReportLogin() {
  const [tableAccess, setTableAccess] = useState([]);
  const [dateDe, setDateDe] = useState("");
  const [dateA, setDateA] = useState("");

  function sendReportbydate(dateInit, dateEnd) {
    const apiName = 'Usuarios';
    const path = '/dateloginrep';
    const myInit = {
      headers: {},
      queryStringParameters: {
        fech_fin: `'${dateEnd}'`,
        fech_inic: `'${dateInit}'`,
      }
    };
    return API.get(apiName, path, myInit);
  }

  const getReportbydate = async (dateInit, dateEnd) => {
    try {
      const response = await sendReportbydate(dateInit, dateEnd);
      setTableAccess(response);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => { 
    if (dateDe && dateA) {
      getReportbydate(dateDe, dateA);
    }
  }, [dateDe, dateA]);

  // ✅ Función para exportar a Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(tableAccess);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Reporte de Accesos");
    XLSX.writeFile(workbook, "Reporte_de_Accesos.xlsx");
  };

  return (
    <div className="flex flex-col gap-6">
      <HeadAdmin title={"Reporte de Accesos"} />
      <div className='px-11'>
        <div className="card flex flex-row items-end mb-8 justify-between">
          <div className="flex flex-row gap-6">
            <TextField 
              label="De:" 
              type="date" 
              minWidth={"240px"}
              value={dateDe}
              onChange={(e) => setDateDe(e.target.value)}
            />
            <TextField 
              label="A:" 
              type="date"
              minWidth={"240px"}
              value={dateA}
              onChange={(e) => setDateA(e.target.value)}
            />
          </div>

          {/* ✅ Botón de exportación con xlsx */}
          <Button variation="primary" onClick={exportToExcel}>
            Exportar a Excel
          </Button>
        </div>

        <div className="card flex flex-col gap-6 w-full mb-8 overflow-x-scroll">
          <CollaborLogin tableAccess={tableAccess} />
        </div>
      </div>
    </div>
  );
}

export default ReportLogin;
