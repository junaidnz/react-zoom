import React from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {ImageAnnotation} from "../ImageAnnotation/ImageAnnotation";

export const ImageZoomContainer = ({imgSrc}) => {
    return (
        <TransformWrapper>
            {({ zoomIn, zoomOut, resetTransform, zoomToElement , ...rest }) => (
                <>
                    <div className="tools">
                        <button onClick={() => zoomIn()}>Zoom In +</button>
                        <button onClick={() => zoomOut()}>Zoom Out-</button>
                        <button onClick={() => resetTransform()}>Reset</button>
                    </div>
                    <TransformComponent>
                        <ImageAnnotation imgSrc={imgSrc}/>
                    </TransformComponent>
                </>
            )}
        </TransformWrapper>
    )
}