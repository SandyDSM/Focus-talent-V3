
import SuccesionTest from "../components/SuccesionTest";
import PerformanceTest from "../components/PerformanceTest";
function PerformaceAndSucesion({aniosFill, sendOverridesPerformanceTest, testPreguntas, sendOverridesSuccesionTest, datosUsuario}) {
return(
    <div>
{aniosFill.map((anio)=>( 
    <>
    <PerformanceTest width={"100%"} overrides={sendOverridesPerformanceTest} arrayPreguntas={testPreguntas} anios={anio} datosUsuario={datosUsuario}/>
    <SuccesionTest width={"100%"} overrides={sendOverridesSuccesionTest} arrayPreguntas={testPreguntas} anios={anio} datosUsuario={datosUsuario}/>
    </>
    ))}
</div>
);
}

export default PerformaceAndSucesion;