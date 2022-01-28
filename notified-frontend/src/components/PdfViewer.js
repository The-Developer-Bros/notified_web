import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import "./PdfViewer.css";
import PDF from "../document.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfViewer() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      <Document
        file={PDF}
        onContextMenu={(e) => e.preventDefault()}
        onLoadSuccess={onDocumentLoadSuccess}
        className="pdf-container"
      >
        {/* Show all pages with scroll bar */}
        {
          [
            // Get all numbers comma separated starting from 1 to numPages
            ...Array(numPages).keys()
          ].map(page => (
            <Page pageNumber={page + 1} /> // Page number starts from 1
          ))
        }

      </Document>
    </div>
  );
}

export default PdfViewer;
