import { motion } from "framer-motion"

const GamertagEmblem = ({gamertag}) => {


  return (
    <motion.div
        initial={{opacity: 0, x:-10}}
        animate={{opacity: 1, x:0}}
        transition={{duration: 1, delay: 1.5}}
        className="max-w-[240px] md:max-w-[33rem] py-6 px-2 mb-16
        bg-gradient-to-r from-[#6B7D4680] to-[#8E996C80] relative overflow-hidden">
        
        {/* emblem shine effect */}
        {/* slow large fx*/}
        <motion.div
        initial={{y: -140, rotate: -20}}
        animate={{y: 220, rotate: -20}}
        transition={{duration: 2, repeat: Infinity, repeatType: "loop", repeatDelay: 4}}
        className="absolute w-[170%] h-5 left-[-40%] top-0 bg-emerald-200/30 z-[10] blur-xl"/>

        {/* fast small fx */}
        <motion.div
        initial={{y: -140, rotate: -20}}
        animate={{y: 230, rotate: -20}}
        transition={{duration: 1.7, delay: 0.6, repeat: Infinity, repeatType: "loop", repeatDelay: 6}}
        className="absolute w-[170%] h-2 left-[-40%] top-0 bg-emerald-100/50 z-[10] blur-lg"/>

            <span className="text-white/80 text-xs ml-2">player</span>
            <h1 className="text-2xl md:text-6xl text-[#e9e4d4] uppercase font-bold relative z-[100]">{gamertag}</h1>

    </motion.div>
  )
}

export default GamertagEmblem