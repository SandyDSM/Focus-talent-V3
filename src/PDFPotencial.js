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

const PDFPotencial = ({ DATOS, anios, datosUsuario }) => {
 const testPreguntas=DATOS;
  return (
    <Document>
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
                Evaluación de potencial {anios}
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
                <image src='<svg class="amplify-icon" viewBox="0 0 20 20" type="id" style="width: 20px; height: 20px; display: block; gap: unset; align-items: unset; justify-content: unset; overflow: hidden; position: relative; padding: 0px; flex-shrink: 0;"><path d="M13.75 1.66667L10 1.66667L10 4.16667L5 4.16667L5 1.66667L1.25 1.66667C0.559896 1.66667 0 2.22656 0 2.91667L0 12.0833C0 12.7734 0.559896 13.3333 1.25 13.3333L13.75 13.3333C14.4401 13.3333 15 12.7734 15 12.0833L15 2.91667C15 2.22656 14.4401 1.66667 13.75 1.66667ZM7.5 5.83333C8.41927 5.83333 9.16667 6.58073 9.16667 7.5C9.16667 8.41927 8.41927 9.16667 7.5 9.16667C6.58073 9.16667 5.83333 8.41927 5.83333 7.5C5.83333 6.58073 6.58073 5.83333 7.5 5.83333ZM9.92969 11.6667L5.07031 11.6667C4.79948 11.6667 4.58073 11.4062 4.66406 11.151C4.88021 10.4844 5.50781 10 6.25 10L6.46354 10C6.78385 10.1328 7.13281 10.2083 7.5 10.2083C7.86719 10.2083 8.21875 10.1328 8.53646 10L8.75 10C9.48958 10 10.1172 10.4818 10.3359 11.151C10.4193 11.4062 10.2005 11.6667 9.92969 11.6667ZM9.16667 0.833333C9.16667 0.372396 8.79427 0 8.33333 0L6.66667 0C6.20573 0 5.83333 0.372396 5.83333 0.833333L5.83333 3.33333L9.16667 3.33333L9.16667 0.833333Z" fill="rgba(100,145,237,1)" fill-rule="nonzero" style="transform: translate(12.5%, 16.67%);"></path></svg>'/> 
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
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="Calibración")).map((pre) => (
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
              {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="Agilidad mental")).map((pre) => (
        <>
                <Text style={styles.txtTitle}>{pre.TITULO}</Text>
                <Text style={styles.txtBody}>{pre.VALORES}</Text>
        </>
              ))}
              </View>
              <View style={styles.rows}>
              {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="Agilidad de personas")).map((pre) => (
        <> 
                <Text style={styles.txtTitle}>{pre.TITULO}</Text>
                <Text style={styles.txtBody}>{pre.VALORES}</Text>
        </>    
              ))}    
              </View>

              <View style={styles.rows}>
              {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="Consciencia de sí mismo")).map((pre) => (
              <>
                <Text style={styles.txtTitle}>{pre.TITULO}</Text>
                <Text style={styles.txtBody}>{pre.VALORES}</Text>
              </>
              ))}
              </View>
              <View style={styles.rows}>
              {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="Agilidad de cambio")).map((pre) => (
              <>
                <Text style={styles.txtTitle}>{pre.TITULO}</Text>
                <Text style={styles.txtBody}>{pre.VALORES}</Text>
              </>
              ))}
              </View>
              <View style={styles.rows}>
              {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="Agilidad de resultados")).map((pre) => (
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
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="PREDICTOR DE LIDERAZGO: Maneja con eficacia la incertidumbre")).map((pre) => (
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
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="PREDICTOR DE LIDERAZGO: Se siente cómodo guiando y dirigiendo a otros")).map((pre) => (
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
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="PREDICTOR DE LIDERAZGO: Se enfoca en hacer crecer el negocio a través de otros")).map((pre) => (
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
            {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="DESCARRILADOR: Cerrado")).map((pre) => (
              <>
              <Text style={styles.txtTitle}>{pre.TITULO}</Text>
              <Text style={styles.txtBody}>{pre.VALORES}</Text>
              </>
            ))}
            </View>
            <View style={styles.colums}>
            {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="DESCARRILADOR: Volátil")).map((pre) => (
              <>
              <Text style={styles.txtTitle}>{pre.TITULO}</Text>
              <Text style={styles.txtBody}>{pre.VALORES}</Text>
              </>
            ))}
            </View>
            <View style={styles.colums}>
            {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="DESCARRILADOR: Micro-gestión")).map((pre) => (
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
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="Promovible")).map((pre) => (
              <>
            <Text style={styles.txtTitle}>{pre.TITULO}</Text>
            <Text style={styles.txtBody}>{pre.VALORES}</Text>
            </>
          ))}
          </View>
          <View style={styles.rows}>
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="Escenario Futuro")).map((pre) => (
              <>
            <Text style={styles.txtTitle}>{pre.TITULO}</Text>
            <Text style={styles.txtBody}>{pre.VALORES}</Text>
            </>
          ))}
          </View>
          <View style={styles.rows}>
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="Riesgo de pérdida")).map((pre) => (
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
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="Mapa de potencial")).map((pre) => (
              <>
            <Text style={styles.txtTitle}>{pre.TITULO}</Text>
            <Text style={styles.txtBody}>{pre.VALORES}</Text>
            </>
          ))}
          </View>
          <View style={styles.colums}>
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="Fortalezas")).map((pre) => (
              <>
            <Text style={styles.txtTitle}>{pre.TITULO}</Text>
            <Text style={styles.txtBody}>{pre.VALORES}</Text>
            </>
          ))}
          </View>
          <View style={styles.colums}>
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="Áreas de oportunidad")).map((pre) => (
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
          {testPreguntas?.filter(c => (c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios && c.AGRUPACION==="Acciones de desarrollo")).map((pre) => (
              <>
            <Text style={styles.txtTitle}>{pre.TITULO}</Text>
            <Text style={styles.txtBody}>{pre.VALORES}</Text>
            </>
          ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default PDFPotencial;
