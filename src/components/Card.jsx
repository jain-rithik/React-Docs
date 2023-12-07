import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data, reference }) {
    const tagStyle = {
        backgroundColor: `${data.tag.tagColor}`,
    };

    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-slate-100/95 text-zinc-900 px-8 py-10 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-md leading-snug mt-5 font-medium	'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className=' flex items-center justify-between px-8 py-3 mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-black rounded-full flex items-center justify-center'>
                        {data.close ? <IoClose size="1.2em" color='#fff' /> : <LuDownload size=".9em" color='#fff' />}
                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className='tag w-full py-4 text-white font-bold flex items-center justify-center' style={tagStyle}>
                            <h3 className='text-sm font-semibold'>{data.tag.tagTittle}</h3>
                        </div>
                    )
                }
            </div>
        </motion.div>
    )
}

export default Card