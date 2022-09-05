import {AnnotationFactory} from 'annotpdf';
import {createRef, useEffect, useRef} from "react";

const pdfDocument = 'file:///Users/junaidnazir/Downloads/660f7371-a77a-43f5-82ca-6951e37ea125'
export const PdfAnnotate = () => {
    const pdfViewer = useRef("")
    useEffect(() => {
        pdfDocument.getData().then( (data) => {
            let pdfFactory = new AnnotationFactory(data)
        })
    })
    return (
        <div style={{width: "500px", height: "1000px"}} ref={pdfViewer.current}>

        </div>
    )
}