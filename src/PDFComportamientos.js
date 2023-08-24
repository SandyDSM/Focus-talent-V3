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
});

const stars1 =
  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAoAOgDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAMEAgUGAQcJ/8QALxAAAQMCBQMDAgYDAAAAAAAAAQACAwQRBRIhMUEGIlETYYEUcTJCUpGhsbLB8P/EABwBAQEAAQUBAAAAAAAAAAAAAAABAgMEBQYHCP/EACoRAAIBAwIFAwQDAAAAAAAAAAABAgMEEQUhBhIxQVETYZEHgdHhIkLw/9oADAMBAAIRAxEAPwD9PU21K1VR1V0/SuLJMTjJGhDAX/4grRdQdb0M+Hy0eFmV0swyF5blDWne3N+F1jVOMdF0ujOpO4hKUU3yqScm+ywm3l9Nzf0NNuq8lFQaT7tbGVD1m+o6ldTPkb9BK70YtBoeHX9z/Y8LsF8VBIIINiF9CwrrrCn0kTMSlkina0CRxjJa4jkWvuvPOAPqBG5lXt9brqLcnOMpPCw3vHL2SX9V4b8HMavo7goTtY5WMNL27/k6hFQpMeweueI6XEYXvdoG5rOP2B1V9exW13b3sPUtqkZx8xaa+UdbnTnSfLNNP3CLAzwt3ePhQzVLCwtZe50utwaeT1lSXTZSew6BWFrVbjqoy0B5IPOiBMnRYtljebNeCVkhQiwM8Ld3j4UM1SwsLWXudLoTJ6ypLpspPYdArC1qtx1UZaA8kHnRAmTosWyxvNmvBKyQoRYGeFu7x8KGapYWFrL3Ol0Jk9ZUl02UnsOgVha1W46qMtAeSDzogTJ0WLZY3mzXglZIUIsDPC3d4+FDNUsLC1l7nS6EyesqS6bKT2HQKwtarcdVGWgPJB50QJk6LFssbzZrwSiFOF6t6SdTGTFcMjvCe6WID8Hlw9v6+23Ir7U4gAl1rW1uvjFQ9kk8kkbQ1rnktA2AJ2XzZ9UuGrLRLqnd2f8AH1ubMOyaxlrwnnp2fTbZd20G+q3VOVOpvy43/PwYJvoEWz6YdE3H6EzNDmmUCxHJ0H82XmthbK9u6Vs5cvPKMc+MtLP2Obqz9KnKeM4TfwdN0l0i+nfHiuKMtIO6GE/lP6ne/gcLsURfYWgaBZ8OWas7NbdW31k/L/2EtkecXd3VvanqVX+irUU+W8jBpyPCrrZLWk3JK5s2bCIs4Leq245QhPT05aRI/fgKwiIZlWop8t5GDTkeFXWyWtJuSUMWERZwW9VtxyhCenpy0iR+/AVhEQzKtRT5byMGnI8KutktaTckoYsIizgt6rbjlCE9PTlpEj9+ArCIhmVainy3kYNOR4VdbJa0m5JQxYRFnBb1W3HKEJ6enLSJH78BFYRDMrYm2Z2G1badpdKYHhgG5dlNh+64fCOgq+pcJMUd9LFvkBBe7/Q/7REXU9b4U07iK+pVtQTkqaeI5xF5ffCz8Ne5yFrqFazpSjRwuZ9e50k/RWAy0opmUzonAaStcc9/JvuuYn6OxjCq+GelZ9VEyVrg+MWcLEbtRFsNe4F0S9pKvGj6U4YadPEenRNYw/us+5rWmq3VKXK5cyfnf9n0RERd7OJPH3yOtvY2VWOke43k7R45REGCY00RblDbe6gNPJG8FozAHhEQmC4iIhTx98jrb2NlVjpHuN5O0eOURBgmNNEW5Q23uoDTyRvBaMwB4REJguIiIU8ffI629jZVY6R7jeTtHjlEQYJjTRFuUNt7qA08kbwWjMAeERCYLiIiFPH3yOtvY2VWOke43k7R45REGCY00RblDbe6gNPJG8FozAHhEQmC4iIhT//Z";
const stars2 =
  "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";
const stars3 =
  "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";
const stars4 =
  "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";
const stars5 =
  "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";

const PDFComportamientos = ({ DATOS, anios, datosUsuario, etiquetas }) => {
  const testPreguntas = DATOS;
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
                {etiquetas.behaReview} {anios}
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
          {DATOS?.filter(
            (c) => c.ANIO == anios && c.MANAGER_OR_SUBORD == "true"
          ).map((pre) => (
            <View>
              <View style={styles.colums}>
                <Text
                  style={{
                    fontSize: "16px",
                    marginBottom: "5px",
                  }}
                >
                  {etiquetas.managerReview}
                </Text>
                <View style={styles.colums}>
                  <View style={styles.rowsGrey}>
                    <Text
                      style={{
                        fontFamily: "Open Sans",
                        width: "45%",
                        fontSize: "12px",
                        fontWeight: "600",
                        margin: "5px",
                      }}
                    >
                      {etiquetas.reviewer}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Open Sans",
                        width: "50%",
                        fontSize: "12px",
                        fontWeight: "600",
                        margin: "5px",
                      }}
                    >
                      {etiquetas.rating}
                    </Text>
                  </View>
                  <View style={styles.rowsbetween}>
                    <Text style={styles.txtBody}>
                      {pre.NOMBRE} {pre.APELLIDOS}
                    </Text>
                    <View style={{ marginLeft: "120px" }}>
                      <Image
                        style={{
                          width: "60px",
                          height: "10px",
                          display: "block",
                          borderRadius: "8px",
                          marginRight: "210px",
                        }}
                        src={
                          pre.QUEST_RESP_RATING_SCORE == "1"
                            ? "data:image/jpg;base64," + stars1
                            : pre.QUEST_RESP_RATING_SCORE == "2"
                            ? "data:image/jpg;base64," + stars2
                            : pre.QUEST_RESP_RATING_SCORE == "3"
                            ? "data:image/jpg;base64," + stars3
                            : pre.QUEST_RESP_RATING_SCORE == "4"
                            ? "data:image/jpg;base64," + stars4
                            : pre.QUEST_RESP_RATING_SCORE == "5"
                            ? "data:image/jpg;base64," + stars5
                            : ""
                        }
                      ></Image>
                      <Text
                        style={{
                          fontFamily: "Open Sans",
                          fontSize: "6px",
                          marginRight: "5px",
                          marginTop: "2px",
                          color: "#5e615c",
                          marginBottom: "5px",
                        }}
                      >
                        {pre.QUEST_RESP_RATING_TITLE}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.colums}>
                    <Text style={styles.txtTitle}>{etiquetas.comments}</Text>
                    <View>
                      <Text style={styles.txtBody}>
                        {pre.QUESTION_RESP_COMMENT}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={{
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
              >
                <View style={styles.divider}></View>
              </View>
            </View>
          ))}

          {DATOS?.filter(
            (c) => c.ANIO == anios && c.MANAGER_OR_SUBORD == "false"
          ) != 0 && (
            <View style={styles.colums}>
              <View style={styles.colums}>
                <Text
                  style={{
                    fontSize: "16px",
                    marginBottom: "5px",
                  }}
                >
                  {etiquetas.subReview}
                </Text>
              </View>
              <View style={styles.rowsGrey}>
                <Text style={styles.txtTitle}>{etiquetas.reviewer}</Text>
                <Text style={styles.txtTitle}>{etiquetas.rating}</Text>
              </View>

              {DATOS?.filter(
                (c) => c.ANIO == anios && c.MANAGER_OR_SUBORD == "false"
              ).map((pre) => (
                <View style={styles.rowsbetween}>
                  <Text style={styles.txtBody}>
                    {pre.NOMBRE} {pre.APELLIDOS}
                  </Text>
                  <View>
                    <Image
                      style={{
                        width: "60px",
                        height: "10px",
                        display: "block",
                        borderRadius: "8px",
                        marginRight: "210px",
                      }}
                      src={
                        pre.QUEST_RESP_RATING_SCORE == "1"
                          ? "data:image/jpg;base64," + stars1
                          : pre.QUEST_RESP_RATING_SCORE == "2"
                          ? "data:image/jpg;base64," + stars2
                          : pre.QUEST_RESP_RATING_SCORE == "3"
                          ? "data:image/jpg;base64," + stars3
                          : pre.QUEST_RESP_RATING_SCORE == "4"
                          ? "data:image/jpg;base64," + stars4
                          : pre.QUEST_RESP_RATING_SCORE == "5"
                          ? "data:image/jpg;base64," + stars5
                          : ""
                      }
                    ></Image>
                    <Text
                      style={{
                        fontFamily: "Open Sans",
                        fontSize: "6px",
                        marginRight: "5px",
                        marginTop: "2px",
                        color: "#5e615c",
                        marginBottom: "5px",
                      }}
                    >
                      {pre.QUEST_RESP_RATING_TITLE}
                    </Text>
                  </View>
                </View>
              ))}
              <View style={styles.colums}>
                <View style={styles.rowsGrey}>
                  <Text style={styles.txtTitle}>{etiquetas.comments}</Text>
                </View>
                {DATOS?.filter(
                  (c) => c.ANIO == anios && c.MANAGER_OR_SUBORD == "false"
                ).map((pre) => (
                  <View>
                    <Text style={styles.txtTitle}>
                      {pre.NOMBRE} {pre.APELLIDOS}
                    </Text>
                    <Text style={styles.txtBody}>
                      {pre.QUESTION_RESP_COMMENT}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};
export default PDFComportamientos;
