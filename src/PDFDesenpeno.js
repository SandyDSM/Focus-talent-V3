import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { StyleSheet, Font } from "@react-pdf/renderer";
import { colors } from "debug/src/browser";
//import ReactPdfTable from
Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
      fontWeight: 600,
    },
  ],
});

const styles = StyleSheet.create({
  txtInfo: {
    family: "Open Sans",
    fontSize: "6px",
    marginRight: "10",
  },
  txtTitle: {
    fontFamily: "Open Sans",
    fontSize: "13px",
    marginBottom: "5",
    fontWeight: "600",
  },
  txtBody: {
    fontSize: "12px",
    family: "Open Sans",
    color: "#5e615c",
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
    marginBottom: "5",
  },
});

const PDFdesempeno = ({ DATOS, anios, datosUsuario, etiquetas }) => {
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
                {etiquetas} {anios}
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

          {DATOS?.filter(
            (c) => c.CATEGORIA === "Desempeño" && c.ANO_EVAL === anios
          ).map((pre) => (
            <View style={styles.colums}>
              <Text style={styles.txtTitle}>{pre.TITULO}</Text>
              <Text style={styles.txtBody}>{pre.VALORES}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};
export default PDFdesempeno;
