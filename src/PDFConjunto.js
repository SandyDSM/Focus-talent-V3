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
  txtInfoBe: {
    fontSize: 6,
    marginRight: 10,
  },
  txtTitleBe: {
    fontFamily: "Open Sans",
    width: "100%",
    fontSize: 12,
    fontWeight: 600,
    margin: 5,
  },
  txtBodyBe: {
    fontFamily: "Open Sans",
    fontSize: 11,
    marginRight: 5,
    marginTop: 5,
    color: "#5e615c",
    marginBottom: 5,
  },
  columsBe: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexGrow: 1,
    flexShrink: 1,
    position: "relative",
    marginTop: 10,
  },
  rowsBe: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginRight: 5,
  },
  rowsbetweenBe: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
  },
  rowsGreyBe: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    backgroundColor: "#EFF0F0",
  },
  dividerBe: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    borderBottomStyle: "solid",
    marginVertical: 5,
  },
  txtInfo: {
    fontFamily: "Open Sans",
    fontSize: 6,
    marginRight: 10,
  },
  txtTitle: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: 600,
    marginRight: 5,
    marginBottom: 4,
  },
  txtBody: {
    fontFamily: "Open Sans",
    fontSize: 11,
    marginRight: 10,
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
    alignItems: "center",
    marginBottom: 5,
    marginRight: 5,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 10,
  },
  title: { fontFamily: "Open Sans", fontSize: 14, fontWeight: 600 },
  rating: {
    fontFamily: "Open Sans",
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 8,
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },
  header: { backgroundColor: "#E5E7EB", fontWeight: "bold" },
  cell: {
    flex: 1,
    padding: 5,
    fontSize: 10,
    wordWrap: "break-word",
    width: "25%",
  },
  boldCell: {
    fontFamily: "Open Sans",
    fontWeight: 600,
    padding: 5,
    fontSize: 8,
    wordWrap: "break-word",
    width: "25%",
  },
  feedbackContainer: { marginTop: 20, marginBottom: 10 },
  feedbackTitle: { fontFamily: "Open Sans", fontSize: 12, fontWeight: 600 },
  feedbackText: { fontSize: 10, marginTop: 8 },
  feedbackTextMin: { fontSize: 8, marginTop: 4 },
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
    breakInside: "avoid",
  },
});

const stars1 = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAoAOgDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAMEAgUGAQcJ/8QALxAAAQMCBQMDAgYDAAAAAAAAAQACAwQRBRIhMUEGIlETYYEUcTJCUpGhsbLB8P/EABwBAQEAAQUBAAAAAAAAAAAAAAABAgMEBQYHCP/EACoRAAIBAwIFAwQDAAAAAAAAAAABAgMEEQUhBhIxQVETYZEHgdHhIkLw/9oADAMBAAIRAxEAPwD9PU21K1VR1V0/SuLJMTjJGhDAX/4grRdQdb0M+Hy0eFmV0swyF5blDWne3N+F1jVOMdF0ujOpO4hKUU3yqScm+ywm3l9Nzf0NNuq8lFQaT7tbGVD1m+o6ldTPkb9BK70YtBoeHX9z/Y8LsF8VBIIINiF9CwrrrCn0kTMSlkina0CRxjJa4jkWvuvPOAPqBG5lXt9brqLcnOMpPCw3vHL2SX9V4b8HMavo7goTtY5WMNL27/k6hFQpMeweueI6XEYXvdoG5rOP2B1V9exW13b3sPUtqkZx8xaa+UdbnTnSfLNNP3CLAzwt3ePhQzVLCwtZe50utwaeT1lSXTZSew6BWFrVbjqoy0B5IPOiBMnRYtljebNeCVkhQiwM8Ld3j4UM1SwsLWXudLoTJ6ypLpspPYdArC1qtx1UZaA8kHnRAmTosWyxvNmvBKyQoRYGeFu7x8KGapYWFrL3Ol0Jk9ZUl02UnsOgVha1W46qMtAeSDzogTJ0WLZY3mzXglZIUIsDPC3d4+FDNUsLC1l7nS6EyesqS6bKT2HQKwtarcdVGWgPJB50QJk6LFssbzZrwSiFOF6t6SdTGTFcMjvCe6WID8Hlw9v6+23Ir7U4gAl1rW1uvjFQ9kk8kkbQ1rnktA2AJ2XzZ9UuGrLRLqnd2f8AH1ubMOyaxlrwnnp2fTbZd20G+q3VOVOpvy43/PwYJvoEWz6YdE3H6EzNDmmUCxHJ0H82XmthbK9u6Vs5cvPKMc+MtLP2Obqz9KnKeM4TfwdN0l0i+nfHiuKMtIO6GE/lP6ne/gcLsURfYWgaBZ8OWas7NbdW31k/L/2EtkecXd3VvanqVX+irUU+W8jBpyPCrrZLWk3JK5s2bCIs4Leq245QhPT05aRI/fgKwiIZlWop8t5GDTkeFXWyWtJuSUMWERZwW9VtxyhCenpy0iR+/AVhEQzKtRT5byMGnI8KutktaTckoYsIizgt6rbjlCE9PTlpEj9+ArCIhmVainy3kYNOR4VdbJa0m5JQxYRFnBb1W3HKEJ6enLSJH78BFYRDMrYm2Z2G1badpdKYHhgG5dlNh+64fCOgq+pcJMUd9LFvkBBe7/Q/7REXU9b4U07iK+pVtQTkqaeI5xF5ffCz8Ne5yFrqFazpSjRwuZ9e50k/RWAy0opmUzonAaStcc9/JvuuYn6OxjCq+GelZ9VEyVrg+MWcLEctRFwZ7gXCPbQvps8paIINuE9OgIiD+RPvXZplXVpWkq1A+d/7ViIiK90Jr4/PQ7HODhRY6R7jmTyj07oiKIr2NNEW9Ibj3XgaeSN4LR1AHsiIpIqYiIiF//Z";
const stars2 = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAoAOgDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAQGAgMFBwEJ/8QALxAAAQMCBgECBAYDAAAAAAAAAQACAwQRBQYSITFBUSJhExRxsTJCUoGRobLB8P/EABwBAAEEAwEAAAAAAAAAAAAAAAABBQYHAgMECP/EACoRAAEDAwIFAwUBAAAAAAAAAAEAAhEDBAUSIQYTMUFRB2GRIkKB0eHw/9oADAMBAAIRAxEAPwD9PU43K5VRmrL9K4skxOMkbEMBf/iCuFmDO9DPh8tHhZldLMNBeW6Q1p5t3fpRjKcY4XF0X1H3DHOaCdIcC4nsIBJk9N130MbdV3BoYQD3I2rKh1m+o1K6mfI3wErvgxbDY9nZ9z9x6KYKlQSCCDYhehYVnrCn0kTMSlkina0CRxjJa4jsWvyq84A9QG3Lq9vm64aS4va5xgQTu2TsAPtHgnwnjL4csDH2rZEQQPbv+1aEUCkx7B654jpcRhe92wbqs4/QHdT1cVtd296zmW1Rr2+WkEfIUbfTfSOl4IPuicblcqozVl+lcWSYnGSNiGAv/wAQVwswZ3oZ8Plo8LMrpZhoLy3SGtPNu79JgynGOFxdF9R9wxzmgnSHAuJ7CASZPTddlDG3VdwaGEA9yNllQ5zfUZldTPkb8hK74MWw2PTr+5+48K4LxUEggg2IXoWFZ6wp9JEzEpZIp2tAkcYyWuI7Fr8qvOAPUBty6vb5uuGkuL2ucYEE7tk7AD7R4J8J4y+HLAx9q2REED27/tWhFApMeweueI6XEYXvdsG6rOP0B3U9XFbXdves5ltUa9vlpBHyFG3030jpeCD7oiwM8LeXj9lpmqWFhay9ztddC1yvrKkum0k+g7BSFzVLjqoy0B5IPeyEAreixbLG82a8ErJCVEWBnhby8fstM1SwsLWXudroSSvrKkum0k+g7BSFzVLjqoy0B5IPeyEAreixbLG82a8ErJCVEWBnhby8fstM1SwsLWXudroSSvrKkum0k+g7BSFzVLjqoy0B5IPeyEAreixbLG82a8EohKqLm3KTqYyYrhkd4T6pYgPweXD2+304qK9qcQAS61rb3XjFQ9kk8kkbQ1rnktA4AJ4XmT1S4aZYR1bds/p52qUdgREkeAZ6dj022DXgX111bVbub6Y3/fxWCc7BF08sOibj9CZmhzTKBgjudh++FNWDYPXdpsVadakpnxJAn8Ubur5VtS4mAT8VTaS0i+nfHdbozEg80MJ/CfzO9/QdlMURfYWAwDPhxmGbMbdST1UfJ/0AbCpw7d3XtzmXT/KgerNJOpjJdbZHmE+aWID5PVw9vt9OIiu1OIAJdjGN8rjFQ9kk8kkbQ1rnktA4AJ4SH9UuGmWEdW3bP6edqlHYERJHgGenY9Ntg2YF9ddW1W7m+mN/38V4TnYItnph0Tb/QmZoc0ygYI7nYfvhTVg2D13abFWnWpKZ8SQJ/FG7q+VbUuJgE/FTaS0i+nfHdbozEg80MJ/CfzO9/QdlYoi9hYDAM+HGYZsxt1JPVR8n/QBsKXDt3de3OZdP8qD1bpJ1MZLrbI8wnzSxAfJ6uHt9vpxIrtTiACXYxjfK4xUPZJPJJG0Na55LQOACeEh/VLhplhHVt2z+nnapR2BESR4Bnp2PTbYNmBfXXVtVu5vpjf9/FeE52CLZ6YdE2/0JmaHNMoGCO52H74U1YNg9d2mxVp1qSmfEkCfxRu6vlW1LiYBPxVNpLSL6d8d1ujMSDzQwn8J/M739B2ViIiI//Z";
const stars3 = "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";
const stars4 = "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";
const stars5 = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAoAOgDASIAAhEBAxEB/8QAGgABAQADAQEAAAAAAAAAAAAAAAYEBQcCCf/EAC4QAAEDAwMCBAQHAAAAAAAAAAEAAgMEBREGITESQRQiUWETMnGxQlKRobLB8P/EABkBAAMBAQEAAAAAAAAAAAAAAAUGBwQDCP/EACoRAAEDAwIFAwUBAAAAAAAAAAECBBEAAwUSIQYTMUFRB2GRIkKB0eHw/9oADAMBAAIRAxEAPwD6epxuVqqjVWn6VxZJc4yRsQwF/wDEFaLUGt6Ge3y0drMrpZh0F5b0hrTzjvnsljKcY4XF2V3FuEKUkE6QoFRPYQCTJ6b1vsY11fUEhBAPcjavVDrN9RqV1M+RvgJXfBi2Gx7Oz7n7j0VguKgkEEHBC6FatdWp9JEy5SyRTtaBI4xktcR3GM8qecAeoCXKr7fN3wklRWlSjAgndMnYAfaPBPijGXw5QELapkRBA9u/7qoRYFJfrPXPEdLcYXvdsG9WHH6A7rPVibO271HMbXErT5SQR8iltdtdo6Vgg+9E43K1VRqrT9K4skucZI2IYC/+IK0WoNb0M9vlo7WZXSzDoLy3pDWnnHfPZAMpxjhcXZXcW4QpSQTpCgVE9hAJMnpvWyxjXV9QSEEA9yNq9UOs31GpXUz5G+Ald8GLYbHs7PufuPRWC4qCQQQcELoVq11an0kTLlLJFO1oEjjGS1xHcYzyp5wB6gJcqvt83fCSVFaVKMCCd0ydgB9o8E+KMZfDlAQtqmREED27/uqhFgUl+s9c8R0txhe92wb1YcfoDus9WJs7bvUcxtcStPlJBHyKW1212jpWCD70TjcrVVGqtP0riyS5xkjYhgL/AOIK0WoNb0M9vlo7WZXSzDoLy3pDWnnHfPZAMpxjhcXZXcW4QpSQTpCgVE9hAJMnpvWyxjXV9QSEEA9yNq9UOs31GpXUz5G+Ald8GLYbHs7PufuPRWC4qCQQQcELoVq11an0kTLlLJFO1oEjjGS1xHcYzyp5wB6gJcqvt83fCSVFaVKMCCd0ydgB9o8E+KMZfDlAQtqmREED27/uqhFgUl+s9c8R0txhe92wb1YcfoDus9WJs7bvUcxtcStPlJBHyKW1212jpWCD70TjcrVVGqtP0riyS5xkjYhgL/4grRag1vQz2+WjtZldLMOgvLekNaecd89kAynGOFxdldxbhClJBOkKBUT2EAkyem9bLGNdX1BIQQD3I2r1Q6zfUaldTPkb4CV3wYthsezs+5+49FYLioJBBBwQuhWrXVqfSRMuUskU7WgSOMZLXEdxjPKnnAHqAlyq+3zd8JJUVpUowIJ3TJ2AH2jwT4oxl8OUBC2qZEQQPbv+6qEWBSX6z1zxHS3GF73bBvVhx+gO6z1Ymztu9RzG1xK0+UkEfIpbXbXaOlYIPvRONytVUaq0/SuLJLnGSNiGAv8A4grRag1vQz2+WjtZldLMOgvLekNaecd89kAynGOFxdldxbhClJBOkKBUT2EAkyem9bLGNdX1BIQQD3I2r1Q6zfUaldTPkb4CV3wYthsezs+5+49FYLioJBBBwQuhWrXVqfSRMuUskU7WgSOMZLXEdxjPKnnAHqAlyq+3zd8JJUVpUowIJ3TJ2AH2jwT4oxl8OUBC2qZEQQPbv+6qEWBSX6z1zxHS3GF73bBvVhx+gO6KxNnbd6jmNriVp8pII+RS2u2u0dKwQfepLVuknUxkutsjzCfNLEB8nq4e32+nEiu1OIAJdjGN8rjFQ9kk8kkbQ1rnktA4AJ4XnT1S4aZYR1bds/p52qUdgREkeAZ6dj022DXgX111bVbub6Y3/fxXhOdgi2emHRNv9CZmhzTKBgjudh++FNWDYPXdpsVadakpnxJAn8Ubur5VtS4mAT8VTaS0i+nfHdbozEg80MJ/CfzO9/QdlYoi7CwGAZ8OMwzZjbqSeqj5P+gDYUuHbu69ucy6f5ViIiK90JrWubZnW2rbTtLpTA8MA5Luk4H6qD2jQVfUuEl0d4WLnoBBe7+h/tkRVPN8KY7iJ9avZAFQtgwmYSZPeBPwR70Qa5C8ztKTZgaj171JJ9FWGWlFMymdE4DaVrj159TnlRifR14tVfDPSs8VEyVrg+MYcMEctRFgz3AuEe2hfTZ5S0QQbcJ6dAREH8ifeuzTKurStJVqB87/wBqxERFe6E1rXNszrbVtp2l0pgeGAcl3ScD9VB7RoKvqXCS6O8LFz0Agvd/Q/2yIqnm+FMdxE+tXsgCoWwYTMJMnvAn4I96INcheZ2lJswNR696pJ9FWGWlFMymdE4DaVrj159TnlTE+jrxaq+GelZ4qJkrXB8Yw4YI5aiLBnuBcI9tC+mzylogg24T06AiIP5E+9dmmVdWlaSrUD53/tdEREV7qJr4/PQ7HODhRY6R7jmTyj07oiKIr2NNEW9Ibj3XgaeSN4LR1AHsiIpIqYiIilr/2Q==";

const PDFConjunto = ({
  DATOS,
  anios,
  datosUsuario,
  comportamientos,
  etiquetas,
  dataLiderazgo,
  cmtLiderazgo,
}) => {
  const testPreguntas = DATOS;
  const datComportaminetos = comportamientos;

  const encabezados = [
    etiquetas.evalCompCol,
    etiquetas.evalCompJef,
    etiquetas.evalCompPar,
  ];

  const filas = [etiquetas.titleCompLid, etiquetas.culturaGB];

  const tabla = Array(filas.length)
    .fill(null)
    .map(() => Array(encabezados.length).fill("-"));

  dataLiderazgo.forEach((item) => {
    const filaIndex = item.SECTION_TYPE_ID_ - 1;
    const colIndex = item.RESPONSIBLE_ID_ - 1;
    if (tabla[filaIndex] && tabla[filaIndex][colIndex] !== undefined) {
      tabla[filaIndex][colIndex] = item.RATING_;
    }
  });

  // Helper: agrupa por CATEGORIA_ORDEN
  const groupByCategoriaOrden = (data, categoria, anio) => {
    const filtered = data?.filter(
      (c) => c.CATEGORIA === categoria && c.ANO_EVAL === anio
    );
    return filtered?.reduce((acc, pre) => {
      const key = pre.CATEGORIA_ORDEN;
      if (!acc[key]) acc[key] = [];
      acc[key].push(pre);
      return acc;
    }, {}) || {};
  };

  return (
    <Document>
      {anios.map((anio) => (
        <>
          {/* ── Página Comportamientos (sin cambios) ── */}
          {anio < 2025 ? (
            <Page size="A4" style={{ marginBottom: 25, paddingBottom: 25 }} wrap>
              <View style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: "24px 24px 24px 24px" }}>
                <View style={styles.rowsBe}>
                  <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", marginRight: 20 }}>
                    <Image style={{ width: 60, height: 60, display: "block", borderRadius: 8 }} src={datosUsuario.src} />
                  </View>
                  <View style={styles.columsBe}>
                    <Text style={{ fontSize: 18, marginBottom: 5 }}>{etiquetas.behaReview} {anio - 1}</Text>
                    <Text style={{ fontSize: 12, marginBottom: 5 }}>{datosUsuario.nombre}</Text>
                    <View style={styles.rowsBe}>
                      <Text style={styles.txtInfoBe}>{datosUsuario.Id}</Text>
                      <Text style={styles.txtInfoBe}>{datosUsuario.Job}</Text>
                      <Text style={styles.txtInfoBe}>{datosUsuario.Organitation}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.dividerBe} />
                {datComportaminetos?.filter((c) => c.ANIO == anio && c.MANAGER_OR_SUBORD == "true").map((pre) => (
                  <View>
                    <View style={styles.columsBe}>
                      <Text style={{ fontSize: 16, marginBottom: 5 }}>{etiquetas.managerReview}</Text>
                      <View style={styles.columsBe}>
                        <View style={styles.rowsGreyBe}>
                          <Text style={{ fontFamily: "Open Sans", width: "45%", fontSize: 12, fontWeight: 600, margin: 5 }}>{etiquetas.reviewer}</Text>
                          <Text style={{ fontFamily: "Open Sans", width: "50%", fontSize: 12, fontWeight: 600, margin: 5 }}>{etiquetas.rating}</Text>
                        </View>
                        <View style={styles.rowsbetweenBe}>
                          <Text style={styles.txtBodyBe}>{pre.NOMBRE} {pre.APELLIDOS}</Text>
                          <View style={{ marginLeft: 120 }}>
                            <Image style={{ width: 60, height: 10, display: "block", borderRadius: 8, marginRight: 210 }} src={pre.QUEST_RESP_RATING_SCORE == "1" ? "data:image/jpg;base64," + stars1 : pre.QUEST_RESP_RATING_SCORE == "2" ? "data:image/jpg;base64," + stars2 : pre.QUEST_RESP_RATING_SCORE == "3" ? "data:image/jpg;base64," + stars3 : pre.QUEST_RESP_RATING_SCORE == "4" ? "data:image/jpg;base64," + stars4 : pre.QUEST_RESP_RATING_SCORE == "5" ? "data:image/jpg;base64," + stars5 : ""} />
                            <Text style={{ fontFamily: "Open Sans", fontSize: 6, marginRight: 5, marginTop: 2, color: "#5e615c", marginBottom: 5 }}>{pre.QUEST_RESP_RATING_TITLE}</Text>
                          </View>
                        </View>
                        <View style={styles.columsBe}>
                          <Text style={styles.txtTitleBe}>{etiquetas.comments}</Text>
                          <Text style={styles.txtBodyBe}>{pre.QUESTION_RESP_COMMENT}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={{ marginTop: 15, marginBottom: 15 }}>
                      <View style={styles.dividerBe} />
                    </View>
                  </View>
                ))}
                {datComportaminetos?.filter((c) => c.ANIO == anio && c.MANAGER_OR_SUBORD == "false") != 0 && (
                  <View style={styles.columsBe}>
                    <View style={styles.columsBe}>
                      <Text style={{ fontSize: 16, marginBottom: 5 }}>{etiquetas.subReview}</Text>
                    </View>
                    <View style={styles.rowsGreyBe}>
                      <Text style={styles.txtTitleBe}>{etiquetas.reviewer}</Text>
                      <Text style={styles.txtTitleBe}>{etiquetas.rating}</Text>
                    </View>
                    {datComportaminetos?.filter((c) => c.ANIO == anio && c.MANAGER_OR_SUBORD == "false").map((pre) => (
                      <View style={styles.rowsbetweenBe}>
                        <Text style={styles.txtBodyBe}>{pre.NOMBRE} {pre.APELLIDOS}</Text>
                        <View>
                          <Image style={{ width: 60, height: 10, display: "block", borderRadius: 8, marginRight: 210 }} src={pre.QUEST_RESP_RATING_SCORE == "1" ? "data:image/jpg;base64," + stars1 : pre.QUEST_RESP_RATING_SCORE == "2" ? "data:image/jpg;base64," + stars2 : pre.QUEST_RESP_RATING_SCORE == "3" ? "data:image/jpg;base64," + stars3 : pre.QUEST_RESP_RATING_SCORE == "4" ? "data:image/jpg;base64," + stars4 : pre.QUEST_RESP_RATING_SCORE == "5" ? "data:image/jpg;base64," + stars5 : ""} />
                          <Text style={{ fontFamily: "Open Sans", fontSize: 6, marginRight: 5, marginTop: 2, color: "#5e615c", marginBottom: 5 }}>{pre.QUEST_RESP_RATING_TITLE}</Text>
                        </View>
                      </View>
                    ))}
                    <View style={styles.columsBe}>
                      <View style={styles.rowsGreyBe}>
                        <Text style={styles.txtTitleBe}>{etiquetas.comments}</Text>
                      </View>
                      {datComportaminetos?.filter((c) => c.ANIO == anio && c.MANAGER_OR_SUBORD == "false").map((pre) => (
                        <View>
                          <Text style={styles.txtTitleBe}>{pre.NOMBRE} {pre.APELLIDOS}</Text>
                          <Text style={styles.txtBodyBe}>{pre.QUESTION_RESP_COMMENT}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                )}
              </View>
            </Page>
          ) : (
            /* ── Página Liderazgo >= 2025 (sin cambios) ── */
            
<Page size="A4">
  <View style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: "24px 24px 24px 24px" }}>
    <View style={styles.rows}>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", marginRight: 20 }}>
        <Image style={{ width: 60, height: 60, display: "block", borderRadius: 8 }} src={datosUsuario.src} />
      </View>
      <View style={styles.colums}>
        <Text style={{ fontSize: 18, marginBottom: 5 }}>{etiquetas.titleCompLid} {anio - 1}</Text>
        <Text style={{ fontSize: 12, marginBottom: 5 }}>{datosUsuario.nombre}</Text>
        <View style={styles.rows}>
          <Text style={styles.txtInfo}>{datosUsuario.Id}</Text>
          <Text style={styles.txtInfo}>{datosUsuario.Job}</Text>
          <Text style={styles.txtInfo}>{datosUsuario.Organitation}</Text>
        </View>
      </View>
    </View>
    <View style={styles.dividerMain} />

    {dataLiderazgo.filter((d) => d.ANIO_ === anio).length > 0 ? (
      <>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{etiquetas.califGeneral}</Text>
          <Text style={styles.rating}>
            {dataLiderazgo.find((d) => d.ANIO_ === anio)?.RATING_ ?? "-"}
          </Text>
        </View>

        {/* Tabla — filtrada por anio */}
        <View style={styles.table}>
          <View style={[styles.row, styles.header]}>
            <Text style={styles.boldCell}></Text>
            {encabezados.map((encabezado, i) => (
              <Text key={i} style={styles.boldCell}>{encabezado}</Text>
            ))}
          </View>
          <View style={styles.table}>
            {tabla.map((fila, i) => (
              <View key={i} style={styles.row}>
                <Text style={styles.boldCell}>{filas[i]}</Text>
                {fila.map((valor, j) => (
                  <Text key={j} style={styles.cell}>{valor}</Text>
                ))}
              </View>
            ))}
          </View>
        </View>

        {/* Comentarios — filtrados por anio */}
        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackTitle}>{etiquetas.retroAlimentacion}</Text>
          {cmtLiderazgo
            ?.filter((d) => d.ANIO_ === anio)
            .map((dato, i) => (
              <View key={i}>
                <Text style={styles.feedbackText}>{dato.ANSWER_ ?? "Sin respuesta"}</Text>
                {dato.SHOW_COMMENT === 1 && (
                  <Text style={[styles.feedbackText, { fontSize: 8 }]}>{dato.RESPONDER ?? "-"}</Text>
                )}
                <Text style={styles.feedbackTextMin}>{dato.RESPONSIBLE_ ?? "-"}</Text>
              </View>
            ))}
        </View>
      </>
    ) : (
      <Text style={{ fontSize: 12, textAlign: "center", marginTop: 20 }}>N/A</Text>
    )}
  </View>
</Page>
          )}

          {/* ── Página Desempeño — agrupada por CATEGORIA_ORDEN ── */}
          {anio !== "2027" && (() => {
            const groupedDesempeno = groupByCategoriaOrden(DATOS, "Desempeño", anio);
            const desempenoEntries = Object.entries(groupedDesempeno);
            return (
              <Page size="A4" style={{ paddingTop: 24, paddingBottom: 40, paddingHorizontal: 24 }}>
                {/* Header */}
                <View style={styles.rows}>
                  <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", marginRight: 20 }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 8 }} src={datosUsuario.src} />
                  </View>
                  <View style={{ flexDirection: "column", flexGrow: 1 }}>
                    <Text style={{ fontSize: 18, marginBottom: 5 }}>{etiquetas.perReview} {anio - 1}</Text>
                    <Text style={{ fontSize: 12, marginBottom: 5 }}>{datosUsuario.nombre}</Text>
                    <View style={styles.rows}>
                      <Text style={styles.txtInfo}>{datosUsuario.Id}</Text>
                      <Text style={styles.txtInfo}>{datosUsuario.Job}</Text>
                      <Text style={styles.txtInfo}>{datosUsuario.Organitation}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.dividerMain} />

                {/* Contenido agrupado */}
                {desempenoEntries.map(([categoriaOrden, preguntas], groupIndex) => (
                  <View key={categoriaOrden} style={styles.groupWrapper} wrap={false}>
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
            );
          })()}

          {/* ── Página Potencial — agrupada por CATEGORIA_ORDEN ── */}
          {(() => {
            const groupedPotencial = groupByCategoriaOrden(testPreguntas, "Potencial", anio);
            const potencialEntries = Object.entries(groupedPotencial);
            return (
              <Page size="A4" style={{ paddingTop: 24, paddingBottom: 40, paddingHorizontal: 24 }}>
                {/* Header */}
                <View style={styles.rows}>
                  <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", marginRight: 20 }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 8 }} src={datosUsuario.src} />
                  </View>
                  <View style={{ flexDirection: "column", flexGrow: 1 }}>
                    <Text style={{ fontSize: 18, marginBottom: 5 }}>{etiquetas.potReview} {anio}</Text>
                    <Text style={{ fontSize: 12, marginBottom: 5 }}>{datosUsuario.nombre}</Text>
                    <View style={styles.rows}>
                      <Text style={styles.txtInfo}>{datosUsuario.Id}</Text>
                      <Text style={styles.txtInfo}>{datosUsuario.Job}</Text>
                      <Text style={styles.txtInfo}>{datosUsuario.Organitation}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.dividerMain} />

                {/* Contenido agrupado */}
                {potencialEntries.map(([categoriaOrden, preguntas], groupIndex) => (
                  <View key={categoriaOrden} style={styles.groupWrapper} wrap={false}>
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
            );
          })()}
        </>
      ))}
    </Document>
  );
};

export default PDFConjunto;