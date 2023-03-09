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
  collDetail, dataBehavior
}) {

  
  useEffect(() => {
   
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
            arrayPreguntas={testPreguntas}
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
