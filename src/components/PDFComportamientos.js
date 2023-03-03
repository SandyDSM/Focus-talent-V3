import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { StyleSheet, Font } from "@react-pdf/renderer";
import { RatingStars } from "../ui-components";
//import ReactPdfTable from

const styles = StyleSheet.create({
  txtInfo: {
    fontSize: "10px",
    marginRight: "10",
  },
  txtTitle: {
    fontFamily: "Helvetica",
    fontSize: "11px",
    fontWeight: "bold",
    marginRight: "5",
    marginTop: "5px"
  },
  txtBody: {
    fontSize: "11px",
    marginRight: "10",
    marginTop: "5px",
    color: "#5e615c"
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
  tworows: {
    display: "flex",
    backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "5",
    marginRight: "5",
  },

});

const PDFComportamientos = () => {
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
                src="https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/A.159492.png"
              ></Image>
            </View>
            <View style={styles.colums}>
              <Text
                style={{
                  fontSize: "18px",
                  marginBottom: "5",
                }}
              >
                Comportamientos 2022
              </Text>
              <View
            style={{
              display: "flex",
              flexBasis: "auto",
              borderBottom: "1px",
              borderBottomColor: "grey",
              marginVertical: "5",
            }}
          ></View>

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
          <View style={styles.tworows}>
            <Text style={styles.txtTitle}>Revisor</Text>
            <Text style={styles.txtBody}>Clasificación</Text>
          </View>
          <View style={styles.tworows}>
            <Text style={styles.txtTitle}>Nombre del jefe directo</Text>
            <Text style={styles.txtBody}><RatingStars rating="four"/></Text>
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
            <Text style={styles.txtTitle}>
              LEADERSHIP PREDICTOR: Manages uncertainty effectively
            </Text>
            <Text style={styles.txtBody}>
              Rarely demonstrates the predictor
            </Text>
          </View>
          <View style={styles.colums}>
            <Text style={styles.txtTitle}>
              LEADERSHIP PREDICTOR: Manages uncertainty effectively
            </Text>
            <Text style={styles.txtBody}>
              Rarely demonstrates the predictor
            </Text>
          </View>
          <View style={styles.colums}>
            <Text style={styles.txtTitle}>
              LEADERSHIP PREDICTOR: Manages uncertainty effectively
            </Text>
            <Text style={styles.txtBody}>
              Rarely demonstrates the predictor
            </Text>
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
            <View style={styles.rows}>
              <Text style={styles.txtTitle}>DERAILER: Closed</Text>
              <Text style={styles.txtBody}>CNot Shown</Text>
            </View>
            <View style={styles.rows}>
              <Text style={styles.txtTitle}>DERAILER: Closed</Text>
              <Text style={styles.txtBody}>CNot Shown</Text>
            </View>
            <View style={styles.rows}>
              <Text style={styles.txtTitle}>DERAILER: Closed</Text>
              <Text style={styles.txtBody}>CNot Shown</Text>
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
            <Text style={styles.txtTitle}>Readiness:</Text>
            <Text style={styles.txtBody}>Mid-term (1-3 years)</Text>
          </View>
          <View style={styles.rows}>
            <Text style={styles.txtTitle}>Future scenario:</Text>
            <Text style={styles.txtBody}>
              Financial planning or business analsysis senior manager or
              director.
            </Text>
          </View>
          <View style={styles.rows}>
            <Text style={styles.txtTitle}>Flight risk:</Text>
            <Text style={styles.txtBody}>Medium</Text>
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
            <Text style={styles.txtTitle}>Potential Map</Text>
            <Text style={styles.txtBody}>Business pillar</Text>
          </View>
          <View style={styles.colums}>
            <Text style={styles.txtTitle}>Potential leadership strengths</Text>
            <Text style={styles.txtBody}>
              Sara is a very organized, hard-worker, responsible and experienced
              analysis with vey deep knowledge and understanding of Bimbo China
              business. She is especially capable in finance, operations, sales
              and data management.
            </Text>
          </View>
          <View style={styles.colums}>
            <Text style={styles.txtTitle}>
              Potential leadership opportunity areas
            </Text>
            <Text style={styles.txtBody}>
              Although she has substantially improved vs previous years, Sara
              still needs to improve her emotional intelligence, flexibility and
              to more effectively build networks with others.
            </Text>
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
            <Text style={styles.txtTitle}>Development actions (70-20-10)</Text>
            <Text style={styles.txtBody}>
              Involve Sara in improvement projects with other areas, among
              others, lead portfolio analysis, help sales regions on their
              financial analysis and follow-up. Put Sara in charge of some
              processes in FP&A deparment at national level. Continue working on
              new profitability analysis methodology.
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default PDFComportamientos;
