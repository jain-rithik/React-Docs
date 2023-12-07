import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc: "I am Rithik Jain currently learning web development",
            filesize: "0.9mb",
            close: true,
            tag: { isOpen: true, tagTittle: "Know More", tagColor: "salmon"}
        },
        {
            desc: "Click below to embark on an exciting journey of building stunning websites that engage users.",
            filesize: "0.9mb",
            close: false,
            tag: { isOpen: true, tagTittle: "Dowload", tagColor: "blue"}
        },
        {
            desc: "Just Random Text",
            filesize: "0.1mb",
            close: true,
            tag: { isOpen: false, tagTittle: "Download Now", tagColor: "crimson"}
        },
        {
            desc: "A react mini project",
            filesize: "0.1mb",
            close: true,
            tag: { isOpen: true, tagTittle: "Download Now", tagColor: "deeppink"}
        },
        
        
    ];
    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
            {data.map((item, index)=>(
                <Card data={item} reference={ref} />
            ))}
        </div>
    )
}

export default Foreground