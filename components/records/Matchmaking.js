import {motion} from "framer-motion"

const Matchmaking = ({matchesPlayed, wins, losses, draws }) => {
  return (
    <div className="w-full h-auto py-2 px-2 mb-10 text-white text-2xl block bg-stone-900/80 border-t border-x border-sky-600 border-b border-b-slate-100/20">

      <motion.h4
        initial={{opacity: 0, y: 5}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, delay: 1}}
        className="text-white text-2xl w-full">
          All Matches
      </motion.h4>

      <div className="flex flex-row justify-between border-t border-slate-50/70 overflow-hidden">

        <motion.div
          initial={{opacity: 0, y: -15}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.5}}
          className="pr-2 border-r border-[#648AB1] bg-gradient-to-r from-cyan-500/50 to-blue-800/80 w-full p-1">
          <span className="capitalize text-white text-sm md:text-lg">played</span>
          <span className="block text-white ml-8 text-xl md:text-3xl">{matchesPlayed}</span>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: -15}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.85, delay: 0.6}}
          className="pr-2 border-r border-[#648AB1] bg-gradient-to-r from-blue-800/80  to-indigo-600/70 w-full p-1">
          <span className="capitalize text-white text-sm md:text-lg">wins</span>
          <span className="block text-white ml-8 text-xl md:text-3xl">{wins}</span>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: -15}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.9, delay: 0.7}}
          className="pr-2 border-r border-[#648AB1] bg-gradient-to-r from-indigo-600/70 to-violet-500/40 w-full p-1">
          <span className="capitalize text-white text-sm md:text-lg">losses</span>
          <span className="block text-white ml-8 text-xl md:text-3xl">{losses}</span>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: -15}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.95, delay: 0.8}}
          className="pr-2 border-r border-[#648AB1] bg-gradient-to-r from-violet-500/40 to-rose-800/80 w-full p-1">
          <span className="capitalize text-white text-sm md:text-lg">draws</span>
          <span className="block text-white ml-8 text-xl md:text-3xl">{draws}</span>
        </motion.div>


      </div>


    </div>
  )
}

export default Matchmaking