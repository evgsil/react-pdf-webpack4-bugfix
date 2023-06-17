import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer, Document, Image, Page } from "@react-pdf/renderer";
import mount from "./mount.jpg";

ReactDOM.render(
  <PDFViewer style={{ position: "absolute" }} width={"100%"} height={"100%"}>
    <Document>
      <Page>
        <Image src={mount} />
      </Page>
    </Document>
  </PDFViewer>,
  document.getElementById("root")
);
