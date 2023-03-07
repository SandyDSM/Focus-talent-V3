import SuccesionTest from "../components/SuccesionTest";
import PerformanceTest from "../components/PerformanceTest";
import BehaviorTest  from "../components/BehaviorTest";
import { useEffect, useState } from "react";
import { Amplify, API } from 'aws-amplify';


function PerformaceAndSucesion({
  aniosFill,
  sendOverridesPerformanceTest,
  testPreguntas,
  sendOverridesSuccesionTest,
  datosUsuario,
  sendOverridesBehavior,
  usuarioActualDatos,
  collDetail
}) {

  const [dataBehavior, setDataBehavior] =useState([])

  function getData() {
    const apiName = 'API Behaviors';
    const path = '/behaviors';
    const myInit = {
      headers: {}, // OPTIONAL
      queryStringParameters: {
        LANGUAGE: `${usuarioActualDatos.IDIOMA}`,
        USER_ID: `${collDetail.ID_COLABORADOR}` // OPTIONAL
      }
    };
  
    return API.get(apiName, path, myInit);
  }

  const fetcBehaviors = async () => {
    try{
      const response = await getData();
      setDataBehavior(response)
      //console.log(response)
    }catch (error) {
      console.log("error:", error);
    }
  };
  useEffect(() => {
    fetcBehaviors();
  }, []);



  return (
    <div>
      {aniosFill.map((anio, index) => (
        <>
        <div key={index} className="mb-9 mt-4 shadow">
          <BehaviorTest
          width={"100%"}
          overrides={sendOverridesBehavior}
          anios={anio}
          datosUsuario={datosUsuario}
          dataBehavior={dataBehavior}

          />
        </div>
        <div className="mb-9 mt-4 shadow">
          <PerformanceTest
            width={"100%"}
            overrides={sendOverridesPerformanceTest}
            anios={anio}
            datosUsuario={datosUsuario}
          />
          </div>
          <div className="my-9 shadow">
          <SuccesionTest
            width={"100%"}
            overrides={sendOverridesSuccesionTest}
            arrayPreguntas={testPreguntas}
            anios={anio}
            datosUsuario={datosUsuario}
          />
          </div>
        </>
      ))}
    </div>
  );
}

export default PerformaceAndSucesion;
