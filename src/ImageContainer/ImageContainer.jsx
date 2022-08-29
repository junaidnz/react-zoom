import react from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const ImageContainer = ({imgSrc}) => {
    return (
        <TransformWrapper
            wheel={{wheelDisabled: true}}
        >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <>
                    <div className="tools">
                        <button onClick={() => zoomIn()}>Zoom In +</button>
                        <button onClick={() => zoomOut()}>Zoom Out-</button>
                        <button onClick={() => resetTransform()}>Reset</button>
                    </div>
                    <TransformComponent>
                        <img className="image-content" src={imgSrc} alt="imag-thumbnail" />
                    </TransformComponent>
                </>
            )}
        </TransformWrapper>
    )
}