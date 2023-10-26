import useWindowSize from '@/hook/useWindowSize';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function PDFViewer() {
  const router = useRouter();
  const { fileSrc } = router.query as { fileSrc?: string };
  const windowSize = useWindowSize();

  const [numPages, setNumPages] = useState(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const pages = Array.from({ length: numPages }, (_, index) => index + 1);

  return (
    <div>
      {fileSrc ? (
        <Document
          file={fileSrc}
          onLoadSuccess={onDocumentLoadSuccess}
          loading=""
        >
          {pages.map((pageNumber) => (
            <div key={pageNumber}>
              <Page
                width={windowSize.width}
                height={windowSize.height}
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </div>
          ))}
        </Document>
      ) : null}
    </div>
  );
}
