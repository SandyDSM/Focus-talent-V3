import SuccesionTest from "../components/SuccesionTest";
import PerformanceTest from "../components/PerformanceTest";
import BehaviorTest  from "../components/BehaviorTest";
import { useEffect, useState } from "react";
import LiderazgoTest from "../components/LiderazgoTest";


function PerformaceAndSucesion({
  aniosFill,
  sendOverridesPerformanceTest,
  testPreguntas,
  sendOverridesSuccesionTest,
  datosUsuario,
  sendOverridesBehavior,
  fetcBehaviors,
  dataBehavior,
  datosLiderazgo,
  dataLiderazgo,
  comentsLiderazgo,
  cmtLiderazgo,
  load,
  collDetail
}) {

/*
  useEffect(() => {
    fetcBehaviors()
  }, []);
*/

  //console.log("aqui",collDetail);
  
  return (
    <div>
      {aniosFill.map((anio, index) => (
        <div key={index}>
          {anio >= 2025 ?
        <div className="mb-9 mt-4 shadow">
          <LiderazgoTest
          width={"100%"}
          overrides={sendOverridesBehavior}
          anios={anio}
          datosUsuario={datosUsuario}
          dataLiderazgo={dataLiderazgo}
          cmtLiderazgo={cmtLiderazgo}
          load={load}
          />
        </div> :
        <div key={index} className="mb-9 mt-4 shadow">
          <BehaviorTest
          width={"100%"}
          overrides={sendOverridesBehavior}
          anios={anio}
          datosUsuario={datosUsuario}
          dataBehavior={dataBehavior}
          load={load}
          />
        </div>}
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
        </div>
      ))}
    </div>
  );
}

export default PerformaceAndSucesion;
