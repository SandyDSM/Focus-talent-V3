import SuccesionTest from "../components/SuccesionTest";
import PerformanceTest from "../components/PerformanceTest";
import BehaviorTest  from "../components/BehaviorTest";


function PerformaceAndSucesion({
  aniosFill,
  sendOverridesPerformanceTest,
  testPreguntas,
  sendOverridesSuccesionTest,
  datosUsuario,
  sendOverridesBehavior,
  dataBehavior
}) {
  return (
    <div>
      {aniosFill.map((anio) => (
        <>
        <div className="mb-9 mt-4 shadow">
          <BehaviorTest
          width={"100%"}
          overrides={sendOverridesBehavior}
          anios={anio}
          datosUsuario={dataBehavior}

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
