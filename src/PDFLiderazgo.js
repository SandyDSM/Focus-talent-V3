import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { StyleSheet, Font } from "@react-pdf/renderer";
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
    fontSize: "6px",
    marginRight: "10",
  },
  txtTitle: {
    fontFamily: "Open Sans",
    width: "100%",
    fontSize: "12px",
    fontWeight: "600",
    margin: "5px",
  },
  txtBody: {
    fontFamily: "Open Sans",
    fontSize: "11px",
    marginRight: "5px",
    marginTop: "5px",
    color: "#5e615c",
    marginBottom: "5px",
  },
  colums: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexGrow: "1",
    flexShrink: "1",
    position: "relative",
    marginTop: "10px",
  },
  rows: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "5px",
    marginRight: "5px",
  },
  rowsbetween: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5px",
  },
  rowsGrey: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5px",
    backgroundColor: "#EFF0F0",
  },
  divider: {
    display: "flex",
    flexBasis: "auto",
    borderBottom: "1px",
    borderBottomColor: "grey",
    marginVertical: "5px",
  },
  titleContainer: { flexDirection: "row", alignItems: "baseline", marginBottom: 10 },
  title: {fontFamily: "Open Sans", fontSize: 14, fontWeight: "600" },
  rating: {fontFamily: "Open Sans", fontSize: 18, fontWeight: "600", marginLeft: 8 },
  table: { display: "table", width: "100%", borderStyle: "solid", borderWidth: 1, marginVertical: 10 },
  row: { flexDirection: "row", borderBottomWidth: 1, borderBottomStyle: "solid" },
  header: { backgroundColor: "#E5E7EB", fontWeight: "bold" },
  cell: { flex: 1, padding: 5, fontSize: 10, wordWrap: "break-word",  width: "25%"},
  boldCell: {fontFamily: "Open Sans", fontWeight: "600", padding: 5, fontSize: 10, wordWrap: "break-word", width: "25%"},
  feedbackContainer: { marginTop: 20, marginBottom: 10 },
  feedbackTitle: {fontFamily: "Open Sans", fontSize: 12, fontWeight: "600" },
  feedbackText: {fontSize: 10, marginTop: 5 },

});

/*
const dataLiderazgo = [
  {RATING_:"Lorem ipsum"},
  {RATING_:"Lorem ipsum"},
  {RATING_:"Lorem ipsum"},
  {RATING_:"Lorem ipsum"},
  {RATING_:"Lorem ipsum"},
  {RATING_:"Lorem ipsum"}
]; 
const cmtLiderazgo = [
  {ANIO_: "2024", ANSWER_:"Aenean luctus orci eget faucibus ullamcorper. Aliquam placerat blandit accumsan. Praesent condimentum ante risus, vitae aliquet purus fringilla eu. Morbi a condimentum magna, eget lobortis odio. Maecenas tempor, magna sit amet egestas pellentesque, turpis enim rutrum erat, varius auctor velit odio nec lectus. Duis sed nibh condimentum, egestas arcu nec, semper nisl. Nulla ultrices erat ac imperdiet fermentum. Donec quis cursus libero, ut blandit tellus. Maecenas dui neque, pharetra a neque id, fringilla posuere ligula. Sed elementum arcu facilisis erat vulputate, at vestibulum sapien imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus.", RESPONSIBLE_:"Parner" },
  {ANIO_: "2024", ANSWER_:"Aenean luctus orci eget faucibus ullamcorper. Aliquam placerat blandit accumsan. Praesent condimentum ante risus, vitae aliquet purus fringilla eu. Morbi a condimentum magna, eget lobortis odio. Maecenas tempor, magna sit amet egestas pellentesque, turpis enim rutrum erat, varius auctor velit odio nec lectus. Duis sed nibh condimentum, egestas arcu nec, semper nisl. Nulla ultrices erat ac imperdiet fermentum. Donec quis cursus libero, ut blandit tellus. Maecenas dui neque, pharetra a neque id, fringilla posuere ligula. Sed elementum arcu facilisis erat vulputate, at vestibulum sapien imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus.", RESPONSIBLE_:"Director" },
  {ANIO_: "2024", ANSWER_:"Aenean luctus orci eget faucibus ullamcorper. Aliquam placerat blandit accumsan. Praesent condimentum ante risus, vitae aliquet purus fringilla eu. Morbi a condimentum magna, eget lobortis odio. Maecenas tempor, magna sit amet egestas pellentesque, turpis enim rutrum erat, varius auctor velit odio nec lectus. Duis sed nibh condimentum, egestas arcu nec, semper nisl. Nulla ultrices erat ac imperdiet fermentum. Donec quis cursus libero, ut blandit tellus. Maecenas dui neque, pharetra a neque id, fringilla posuere ligula. Sed elementum arcu facilisis erat vulputate, at vestibulum sapien imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus.", RESPONSIBLE_:"Colaborator" }
]; 
*/
const PDFLiderazgo = ({ dataLiderazgo, anios, datosUsuario, encabezados, filas, etiquetas, coments }) => {
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
                    marginRight: "20px",
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
                      marginBottom: "5px",
                    }}
                  >
                    {etiquetas.titleCompLid} {anios-1}
                  </Text>
                  <Text
                    style={{
                      fontSize: "12px",
                      marginBottom: "5px",
                    }}
                  >
                    {datosUsuario.nombre}
                  </Text>
                  <View style={styles.rows}>
                    <image src='<svg class="amplify-icon" viewBox="0 0 20 20" type="id" style="width: 20px; height: 20px; display: block; gap: unset; align-items: unset; justify-content: unset; overflow: hidden; position: relative; padding: 0px; flex-shrink: 0;"><path d="M13.75 1.66667L10 1.66667L10 4.16667L5 4.16667L5 1.66667L1.25 1.66667C0.559896 1.66667 0 2.22656 0 2.91667L0 12.0833C0 12.7734 0.559896 13.3333 1.25 13.3333L13.75 13.3333C14.4401 13.3333 15 12.7734 15 12.0833L15 2.91667C15 2.22656 14.4401 1.66667 13.75 1.66667ZM7.5 5.83333C8.41927 5.83333 9.16667 6.58073 9.16667 7.5C9.16667 8.41927 8.41927 9.16667 7.5 9.16667C6.58073 9.16667 5.83333 8.41927 5.83333 7.5C5.83333 6.58073 6.58073 5.83333 7.5 5.83333ZM9.92969 11.6667L5.07031 11.6667C4.79948 11.6667 4.58073 11.4062 4.66406 11.151C4.88021 10.4844 5.50781 10 6.25 10L6.46354 10C6.78385 10.1328 7.13281 10.2083 7.5 10.2083C7.86719 10.2083 8.21875 10.1328 8.53646 10L8.75 10C9.48958 10 10.1172 10.4818 10.3359 11.151C10.4193 11.4062 10.2005 11.6667 9.92969 11.6667ZM9.16667 0.833333C9.16667 0.372396 8.79427 0 8.33333 0L6.66667 0C6.20573 0 5.83333 0.372396 5.83333 0.833333L5.83333 3.33333L9.16667 3.33333L9.16667 0.833333Z" fill="rgba(100,145,237,1)" fill-rule="nonzero" style="transform: translate(12.5%, 16.67%);"></path></svg>' />
                    <Text style={styles.txtInfo}>{datosUsuario.Id}</Text>
                    <Text style={styles.txtInfo}>{datosUsuario.Job}</Text>
                    <Text style={styles.txtInfo}>{datosUsuario.Organitation}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.titleContainer}>
              <Text style={styles.title}>{etiquetas.califGeneral}</Text>
              <Text style={styles.rating}>{dataLiderazgo[0]?.RATING_ ?? "-"}</Text>
            </View>

            {/* Tabla */}
            <View style={styles.table}>
              {/* Encabezado */}
              <View style={[styles.row, styles.header]}>
                <Text style={styles.boldCell}></Text>
                {encabezados.map((encabezado, i) => (
                  <Text key={i} style={styles.boldCell}>{encabezado}</Text>
                ))}
              </View>

              {/* Filas de datos */}
              {filas.map((fila, i) => (
                <View key={i} style={styles.row}>
                  <Text style={styles.boldCell}>{fila.titulo}</Text>
                  {fila.indices.map((index) => (
                    <Text key={index} style={styles.cell}>{dataLiderazgo[index]?.RATING_ ?? "-"}</Text>
                  ))}
                </View>
              ))}
            </View>

            {/* Retroalimentación */}
            <View style={styles.feedbackContainer}>
              <Text style={styles.feedbackTitle}>{etiquetas.retroAlimentacion}</Text>
              {coments?.map((dato, i) => (
                  <View key={i}>
                    <Text style={styles.feedbackText}>{dato.ANSWER_ ?? "Sin respuesta"}</Text>
                    <Text style={[styles.feedbackText, { fontSize: 8 }]}>{dato.RESPONSIBLE_ ?? "-"}</Text>
                  </View>
                ))}
            </View>
            </View>
          </Page>
        </Document>
  );
};
export default PDFLiderazgo;
