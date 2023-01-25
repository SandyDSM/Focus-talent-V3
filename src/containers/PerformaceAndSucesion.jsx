import SuccesionTest from "../components/SuccesionTest";
import PerformanceTest from "../components/PerformanceTest";
function PerformaceAndSucesion({
  aniosFill,
  sendOverridesPerformanceTest,
  testPreguntas,
  sendOverridesSuccesionTest,
  datosUsuario,
}) {
  return (
    <div>
      {aniosFill.map((anio) => (
        <>
        <div className="my-4">
          <PerformanceTest
            width={"100%"}
            overrides={sendOverridesPerformanceTest}
            arrayPreguntas={testPreguntas}
            anios={anio}
            datosUsuario={datosUsuario}
          />
          </div>
          <div className="my-4">
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
