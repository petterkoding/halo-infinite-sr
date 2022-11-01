import React from 'react'
import {motion} from "framer-motion"

const Table = ({name, data}) => {
  return (
    <motion.div
      initial={{opacity:0, x: 3}}
      animate={{opacity:1, x: 0}}
      transition={{duration: 3, ease: "easeIn"}}
      className="flex flex-row justify-between items-center border-b border-slate-50/20 min-h-[37px]">

        <div className="text-white text-sm uppercase py-1">{name}</div>
        <div className="text-white text-lg py-1">{data}</div>

    </motion.div>
  )
}

export default Table