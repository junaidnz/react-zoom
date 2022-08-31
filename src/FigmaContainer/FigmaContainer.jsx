import React, {useRef, useState} from "react";

export const FigmaContainer = () => {
    const [src, setSrc] = useState("");
    const url = useRef("")
    return (
        <div>
            <input type="text" onChange={(e) => url.current = e.target.value}/>
            <button onClick={() => setSrc(url.current)}>Load</button>
            {src && <iframe
                width={1000}
                height={500}
                src={`https://www.figma.com/embed?embed_host=http://localhost/&url=${src}`}
                allowFullScreen
            />}
        </div>
    )
}
