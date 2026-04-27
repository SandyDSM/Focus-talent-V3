import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { StyleSheet, Font } from "@react-pdf/renderer";

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
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: 24,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  txtInfo: {
    fontFamily: "Open Sans",
    fontSize: 6,
    marginRight: 10,
  },
  txtTitle: {
    fontFamily: "Open Sans",
    fontSize: 13,
    marginBottom: 4,
    fontWeight: 600,
  },
  txtBody: {
    fontSize: 11,
    fontFamily: "Open Sans",
    color: "#5e615c",
  },
  colums: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative",
    marginTop: 8,
    marginBottom: 8,
  },
  rows: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "relative",
    marginBottom: 5,
  },
  dividerMain: {
    borderBottomWidth: 1,
    borderBottomColor: "#9ca3af",
    borderBottomStyle: "solid",
    marginVertical: 10,
  },
  dividerGroup: {
    borderBottomWidth: 1,
    borderBottomColor: "#d1d5db",
    borderBottomStyle: "solid",
    marginVertical: 10,
  },
  groupWrapper: {
    // Evita que el grupo se corte entre páginas
    breakInside: "avoid",
  },
});

const PDFdesempeno = ({ DATOS, anios, datosUsuario, etiquetas }) => {
  const filtered = DATOS?.filter(
    (c) => c.CATEGORIA === "Desempeño" && c.ANO_EVAL === anios
  );

  // Agrupar por CATEGORIA_ORDEN
  const grouped = filtered?.reduce((acc, pre) => {
    const key = pre.CATEGORIA_ORDEN;
    if (!acc[key]) acc[key] = [];
    acc[key].push(pre);
    return acc;
  }, {});

  const groupEntries = Object.entries(grouped || {});

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.rows} fixed>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              marginRight: 20,
            }}
          >
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 8,
              }}
              src={datosUsuario.src}
            />
          </View>
          <View style={{ flexDirection: "column", flexGrow: 1 }}>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>
              {etiquetas} {anios - 1}
            </Text>
            <Text style={{ fontSize: 12, marginBottom: 5 }}>
              {datosUsuario.nombre}
            </Text>
            <View style={styles.rows}>
              <Text style={styles.txtInfo}>{datosUsuario.Id}</Text>
              <Text style={styles.txtInfo}>{datosUsuario.Job}</Text>
              <Text style={styles.txtInfo}>{datosUsuario.Organitation}</Text>
            </View>
          </View>
        </View>

        {/* Divider principal del header */}
        <View style={styles.dividerMain} fixed />

        {/* Contenido agrupado por CATEGORIA_ORDEN */}
        {groupEntries.map(([categoriaOrden, preguntas], groupIndex) => (
          <View key={categoriaOrden} style={styles.groupWrapper} wrap={false}>
            {/* Divider entre grupos */}
            {groupIndex !== 0 && <View style={styles.dividerGroup} />}

            {preguntas.map((pre, index) => (
              <View key={index} style={styles.colums}>
                <Text style={styles.txtTitle}>{pre.TITULO}</Text>
                <Text style={styles.txtBody}>{pre.VALORES}</Text>
              </View>
            ))}
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default PDFdesempeno;