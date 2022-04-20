import {motion} from "framer-motion"

const Matchmaking = ({matchesPlayed, wins, losses, draws }) => {
  return (
    <div className="w-full h-auto py-5 px-2 mb-20 text-white text-2xl block bg-stone-900/80 border-t border-x border-cyan-400 p-1">

      <motion.h4
        initial={{opacity: 0, y: 5}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, delay: 1}}
        className="text-white text-2xl w-full ">
          Matches
      </motion.h4>

      <div className="flex flex-row justify-between border-t border-slate-50/20 pb-2 overflow-hidden">

        <motion.div
          initial={{opacity: 0, y: -15}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.5}}
          className="pr-2 border-r border-indigo-300">
          <span className="capitalize text-white text-sm md:text-lg">played</span>
          <span className="block text-white ml-8 text-xl md:text-3xl">{matchesPlayed}</span>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: -15}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.85, delay: 0.6}}
          className="pr-2 border-r border-indigo-300">
          <span className="capitalize text-white text-sm md:text-lg">wins</span>
          <span className="block text-white ml-8 text-xl md:text-3xl">{wins}</span>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: -15}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.9, delay: 0.7}}
          className="pr-2 border-r border-indigo-300">
          <span className="capitalize text-white text-sm md:text-lg">losses</span>
          <span className="block text-white ml-8 text-xl md:text-3xl">{losses}</span>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: -15}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.95, delay: 0.8}}
          className="pr-2 border-r border-indigo-300">
          <span className="capitalize text-white text-sm md:text-lg">draws</span>
          <span className="block text-white ml-8 text-xl md:text-3xl">{draws}</span>
        </motion.div>


      </div>


    </div>
  )
}

export default Matchmaking