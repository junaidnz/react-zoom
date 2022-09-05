import React, {useRef} from "react";
import Annotation from "react-image-annotation-with-zoom/lib/components/Annotation";
import {PointSelector} from "react-image-annotation-with-zoom/lib/selectors";

export const ImageAnnotation = ({imgSrc}) => {
    const annotation = useRef([]);
    const annotationValue = useRef({});
    const onChange = (annotation) => {
        annotation.selection && console.log(annotation.selection )
    }
    return (
        <>
            <Annotation
                src={imgSrc}
                alt="Image Preview"
                annotations={annotation.current}
                type={PointSelector.type}
                onChange={onChange}
                value={annotationValue.current}
                disableZoom={true}
            />
        </>
    )
}