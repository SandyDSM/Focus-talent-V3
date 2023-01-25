import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { StyleSheet } from "@react-pdf/renderer";
//import ReactPdfTable from

const styles = StyleSheet.create({
  txtInfo: {
    fontSize: "6px",
    marginRight: "10",
  },
  txtTitle: {
    fontFamily: "Helvetica",
    fontSize: "12px",
    fontWeight: "semibold",
    marginRight: "5",
    marginTop: "5px"
  },
  txtBody: {
    fontSize: "11px",
    marginRight: "10",
    marginTop: "5px"
  },
  colums: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexGrow: "1",
    flexShrink: "1",
    position: "relative",
    marginTop: "10",
  },
  rows: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "5",
    marginRight: "5",
  },
});

const PDFConjunto = ({ DATOS, anios, datosUsuario }) => {
 const testPreguntas=DATOS;
  return (
    <Document>
{anios.map((anio)=>(
    <>
<Page size="A4">
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "24px 24px 24px 24px",
          }}
        >
          <View style={styles.rows}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-end",
                marginRight: "20",
              }}
            >
              <Image
                style={{
                  width: "60px",
                  height: "60px",
                  display: "block",
                  borderRadius: "8px",
                }}
                src={datosUsuario.src}
              ></Image>
            </View>
            <View style={styles.colums}>
              <Text
                style={{
                  fontSize: "18px",
                  marginBottom: "5"
                }}
              >
                Evaluación de desempeño {anio}
              </Text>
              <Text
                style={{
                  fontSize: "12px",
                  marginBottom: "5"
                }}
              >
               {datosUsuario.nombre}
              </Text>
              <View style={styles.rows}>
                <Text style={styles.txtInfo}>{datosUsuario.Id}</Text>
                <Text style={styles.txtInfo}>{datosUsuario.Job}</Text>
                <Text style={styles.txtInfo}>{datosUsuario.Organitation}</Text>
              </View>
            </View>
          </View>
          <View style={{
              display: "flex",
              flexBasis: "auto",
              borderBottom:"1px",
              borderBottomColor:"grey",
              marginVertical: "5"
                }}></View>
          
          
          
          {DATOS?.filter(c => (c.CATEGORIA === "Desempeño" && c.ANO_EVAL === "2020")).map((pre) => (
          
          <View style={styles.colums}>
            <Text style={styles.txtTitle}>
             {pre.TITULO}
            </Text>
            <Text style={styles.txtBody}>
            {pre.VALORES}
            </Text>
          </View>
))
}
        </View>
      </Page>



      
      
      
      <Page size="A4">
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "24px 24px 24px 24px",
          }}
        >
          <View style={styles.rows}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-end",
                marginRight: "20",
              }}
            >
              <Image
                style={{
                  width: "60px",
                  height: "60px",
                  display: "block",
                  borderRadius: "8px",
                }}
                src={datosUsuario.src}
              ></Image>
            </View>
            <View style={styles.colums}>
              <Text
                style={{
                  fontSize: "18px",
                  marginBottom: "5",
                }}
              >
                Evaluación de potencial {anio}
              </Text>
              <Text
                style={{
                  fontSize: "12px",
                  marginBottom: "5",
                }}
              >
                {datosUsuario.nombre}
              </Text>
              <View style={styles.rows}>
                <Text style={styles.txtInfo}>{datosUsuario.Id}</Text>
                <Text style={styles.txtInfo}>{datosUsuario.Job}</Text>
                <Text style={styles.txtInfo}>{datosUsuario.Organitation}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexBasis: "auto",
              borderBottom: "1px",
              borderBottomColor: "grey",
              marginVertical: "5",
            }}
          ></View>
          <View style={styles.rows}>
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="Calibración")).map((pre) => (
        <>
            <Text style={styles.txtTitle}>{pre.TITULO}</Text>
            <Text style={styles.txtBody}>{pre.VALORES}</Text>
            </>
          ))}
          </View>
          <View
            style={{
              display: "flex",
              flexBasis: "auto",
              borderBottom: "1px",
              borderBottomColor: "grey",
              marginVertical: "5",
            }}
          ></View>
          <View style={styles.rows}>
            <View style={styles.colums}>
              <View style={styles.rows}>
              {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="Agilidad mental")).map((pre) => (
        <>
                <Text style={styles.txtTitle}>{pre.TITULO}</Text>
                <Text style={styles.txtBody}>{pre.VALORES}</Text>
        </>
              ))}
              </View>
              <View style={styles.rows}>
              {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="Agilidad de personas")).map((pre) => (
        <> 
                <Text style={styles.txtTitle}>{pre.TITULO}</Text>
                <Text style={styles.txtBody}>{pre.VALORES}</Text>
        </>    
              ))}    
              </View>

              <View style={styles.rows}>
              {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="Consciencia de sí mismo")).map((pre) => (
              <>
                <Text style={styles.txtTitle}>{pre.TITULO}</Text>
                <Text style={styles.txtBody}>{pre.VALORES}</Text>
              </>
              ))}
              </View>
              <View style={styles.rows}>
              {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="Agilidad de cambio")).map((pre) => (
              <>
                <Text style={styles.txtTitle}>{pre.TITULO}</Text>
                <Text style={styles.txtBody}>{pre.VALORES}</Text>
              </>
              ))}
              </View>
              <View style={styles.rows}>
              {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="Agilidad de resultados")).map((pre) => (
              <>
                <Text style={styles.txtTitle}>{pre.TITULO}</Text>
                <Text style={styles.txtBody}>{pre.VALORES}</Text>
              </>
              ))}
              </View>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexBasis: "auto",
              borderBottom: "1px",
              borderBottomColor: "grey",
              marginVertical: "5",
            }}
          ></View>

          <View style={styles.colums}>
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="PREDICTOR DE LIDERAZGO: Maneja con eficacia la incertidumbre")).map((pre) => (
              <>
            <Text style={styles.txtTitle}>
              {pre.TITULO}
            </Text>
            <Text style={styles.txtBody}>
              {pre.VALORES}
            </Text>
            </>
          ))}
          </View>
          <View style={styles.colums}>
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="PREDICTOR DE LIDERAZGO: Se siente cómodo guiando y dirigiendo a otros")).map((pre) => (
              <>
            <Text style={styles.txtTitle}>
             {pre.TITULO}
            </Text>
            <Text style={styles.txtBody}>
              {pre.VALORES}
            </Text>
            </>
          ))}
          </View>
          <View style={styles.colums}>
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="PREDICTOR DE LIDERAZGO: Se enfoca en hacer crecer el negocio a través de otros")).map((pre) => (
              <>
            <Text style={styles.txtTitle}>
              {pre.TITULO}
            </Text>
            <Text style={styles.txtBody}>
              {pre.VALORES}
            </Text>
            </>
          ))}
          </View>
          <View
            style={{
              display: "flex",
              flexBasis: "auto",
              borderBottom: "1px",
              borderBottomColor: "grey",
              marginVertical: "5",
            }}
          ></View>
          <View style={styles.rows}>
            <View style={styles.colums}>
            {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="DESCARRILADOR: Cerrado")).map((pre) => (
              <>
              <Text style={styles.txtTitle}>{pre.TITULO}</Text>
              <Text style={styles.txtBody}>{pre.VALORES}</Text>
              </>
            ))}
            </View>
            <View style={styles.colums}>
            {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="DESCARRILADOR: Volátil")).map((pre) => (
              <>
              <Text style={styles.txtTitle}>{pre.TITULO}</Text>
              <Text style={styles.txtBody}>{pre.VALORES}</Text>
              </>
            ))}
            </View>
            <View style={styles.colums}>
            {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="DESCARRILADOR: Micro-gestión")).map((pre) => (
              <>
              <Text style={styles.txtTitle}>{pre.TITULO}</Text>
              <Text style={styles.txtBody}>{pre.VALORES}</Text>
              </>
            ))}
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexBasis: "auto",
              borderBottom: "1px",
              borderBottomColor: "grey",
              marginVertical: "5",
            }}
          ></View>
          <View style={styles.rows}>
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="Promovible")).map((pre) => (
              <>
            <Text style={styles.txtTitle}>{pre.TITULO}</Text>
            <Text style={styles.txtBody}>{pre.VALORES}</Text>
            </>
          ))}
          </View>
          <View style={styles.rows}>
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="Escenario Futuro")).map((pre) => (
              <>
            <Text style={styles.txtTitle}>{pre.TITULO}</Text>
            <Text style={styles.txtBody}>{pre.VALORES}</Text>
            </>
          ))}
          </View>
          <View style={styles.rows}>
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="Riesgo de pérdida")).map((pre) => (
              <>
            <Text style={styles.txtTitle}>{pre.TITULO}</Text>
            <Text style={styles.txtBody}>{pre.VALORES}</Text>
            </>
          ))}
          </View>
          <View
            style={{
              display: "flex",
              flexBasis: "auto",
              borderBottom: "1px",
              borderBottomColor: "grey",
              marginVertical: "5",
            }}
          ></View>
          <View style={styles.rows}>
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="Mapa de potencial")).map((pre) => (
              <>
            <Text style={styles.txtTitle}>{pre.TITULO}</Text>
            <Text style={styles.txtBody}>{pre.VALORES}</Text>
            </>
          ))}
          </View>
          <View style={styles.colums}>
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="Fortalezas")).map((pre) => (
              <>
            <Text style={styles.txtTitle}>{pre.TITULO}</Text>
            <Text style={styles.txtBody}>{pre.VALORES}</Text>
            </>
          ))}
          </View>
          <View style={styles.colums}>
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="Áreas de oportunidad")).map((pre) => (
              <>
            <Text style={styles.txtTitle}>{pre.TITULO}</Text>
            <Text style={styles.txtBody}>{pre.VALORES}</Text>
            </>
          ))}
          </View>
          <View
            style={{
              display: "flex",
              flexBasis: "auto",
              borderBottom: "1px",
              borderBottomColor: "grey",
              marginVertical: "5",
            }}
          ></View>
          <View style={styles.colums}>
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anio && c.AGRUPACION==="Acciones de desarrollo")).map((pre) => (
              <>
            <Text style={styles.txtTitle}>{pre.TITULO}</Text>
            <Text style={styles.txtBody}>{pre.VALORES}</Text>
            </>
          ))}
          </View>
        </View>
      </Page>
      </>
      ))}
    </Document>
  );
};
export default PDFConjunto;
