import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { StyleSheet } from "@react-pdf/renderer";
import { colors } from "debug/src/browser";
//import ReactPdfTable from

const styles = StyleSheet.create({
  txtInfo: {
    fontSize: "6px",
    marginRight: "10",
    
  },
  txtTitle: {
    fontSize: "14px",
    marginBottom:"5",
    
  },
  txtBody: {
    fontSize: "12px",
   
  },
  colums: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexGrow: "1",
    flexShrink: "1",
    position: "relative",
    marginTop: "20",
  },
  rows: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "relative",
    marginBottom: "5"
  },
});

const PDFdesempeno = ({ DATOS, anios, datosUsuario }) => {
  
  
  
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
                  marginBottom: "5"
                }}
              >
                Evaluación de desempeño {anios}
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
    </Document>
  );
};
export default PDFdesempeno;
