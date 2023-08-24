import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { StyleSheet } from "@react-pdf/renderer";
//import ReactPdfTable from

const styles = StyleSheet.create({
  txtInfo: {
    fontSize: "10px",
    marginRight: "10"
  },
  txtTitle: {
    fontSize: "14px",
    marginBottom:"5"
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

const PDFdesempeno = ({ DATOS }) => {
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
                src="https://picsum.photos/800/600"
              ></Image>
            </View>
            <View style={styles.colums}>
              <Text
                style={{
                  fontSize: "18px",
                  marginBottom: "5"
                }}
              >
                Evaluación de desempeño 2021
              </Text>
              <Text
                style={{
                  fontSize: "12px",
                  marginBottom: "5"
                }}
              >
                Zurita Robles, Kadir"
              </Text>
              <View style={styles.rows}>
                <Text style={styles.txtInfo}>2786036</Text>
                <Text style={styles.txtInfo}> Delivery Presale</Text>
                <Text style={styles.txtInfo}> Organización Bimbo Brasil</Text>
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
          <View style={styles.colums}>
            <Text style={styles.txtTitle}>
              Q1: What does the associate need to do better?
            </Text>
            <Text style={styles.txtBody}>
              La administración de sistema de flota, completar ordenes de
              trabajo, subir en tiempo y forma los reportes a (GB Fleet)
              sustentabilidad, aplicación del tarjetón de mantenimientos.
            </Text>
          </View>
          <View style={styles.colums}>
            <Text style={styles.txtTitle}>
              Q1: What is the associate doing well?
            </Text>
            <Text style={styles.txtBody}>
              Apego a procedimientos de compras, y seguimiento al funcionamiento
              de la flota, ejecución del cambio de imagen.
            </Text>
          </View>
          <View style={styles.colums}>
            <Text style={styles.txtTitle}>
              Q2: What does the associate need to do better?
            </Text>
            <Text style={styles.txtBody}>
              Trabajar en el programa de mantenimiento preventivo, mayor sentido
              de urgencia para la resolución de reportes en Bitácora, apego a
              procedimiento internos.
            </Text>
          </View>
          <View style={styles.colums}>
            <Text style={styles.txtTitle}>
              Q2: What is the associate doing well?
            </Text>
            <Text style={styles.txtBody}>
              Cambio de imagen del taller y flotilla, seguimiento al
              funcionamiento de la flota, aplicación del tarjetón de
              mantenimiento.
            </Text>
          </View>
          <View style={styles.colums}>
            <Text style={styles.txtTitle}>
              Q3: What does the associate need to do better?
            </Text>
            <Text style={styles.txtBody}>
              Mayor sentido de urgencia para la resolución de reportes en
              Bitácora, disminuir la tasa de auxilios, mayor empoderamiento para
              la resolución de problemas.
            </Text>
          </View>
          <View style={styles.colums}>
            <Text style={styles.txtTitle}>
              Q3: What is the associate doing well?
            </Text>
            <Text style={styles.txtBody}>
              Cambio de imagen del taller y flotilla, seguimiento al
              funcionamiento de la flota, aplicación del tarjetón de
              mantenimiento, Mantenimiento preventivos en tiempos, Seguimiento
              para el proyecto 5's
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default PDFdesempeno;
