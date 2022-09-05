import React, {useEffect, useState} from "react";
import {ReactPictureAnnotation} from "react-picture-annotation";

export const PictureAnimator = ({imgSrc}) => {

    const [pageSize, setPageSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const onResize = () => {
        setPageSize({ width: window.innerWidth, height: window.innerHeight });
    };

    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const onSelect = selectedId => console.log(selectedId);
    const onChange = data => console.log(data);

    return (
        <ReactPictureAnnotation
            image={imgSrc}
            onSelect={onSelect}
            onChange={onChange}
            width={700}
            height={500}
            scrollSpeed={0.1}
        />
    )
}