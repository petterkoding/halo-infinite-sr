import React from 'react'
import { motion } from 'framer-motion'

const CardScrollReveal = ({children, title, Icon, x}) => {


  return (
    <motion.div
      initial={{opacity: 0, x: x}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{ once: true }}
      transition={{duration: 1}}
      className="block group w-full max-w-[38rem] mb-5">

        <h3
          className="text-white text-2xl block bg-stone-900/80 border-t border-x border-sky-600 p-1 capitalize">
          {title}
          <Icon className={`h-5 w-5 text-white inline ml-1 group-hover:text-yellow-500 transition duration-100 ease-linear mb-1`}/>
        </h3>
      <div className="border border-slate-50/20 px-3 py-3 bg-black/40 border-x-white w-full">

        {children}

      </div>

    </motion.div>
  )
}

export default CardScrollReveal
