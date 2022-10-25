import Head from '../components/head/Head'
import { motion } from 'framer-motion'
import SearchForm from '../components/form/SearchForm'
import { deployedVersion, patch } from '../constants/info';

export default function Home() {

  return (
    <>
      <Head title="Halo InfiniteSR | Search"/>
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col flex-around items-center px-2 mt-12 relative z-[99]">
        <motion.h1
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className="text-4xl lg:text-6xl font-bold mb-4 text-white uppercase mt-32">
              Halo Infinite
          
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3c7dbe] to-[#648AB1]">S</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#648AB1] to-[#bcd7f0]">R</span>
              <span className="ml-1 text-sm text-white/50">v{deployedVersion}.{patch}</span>
        </motion.h1>

        <motion.h2
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2}}
            className="text-lg lg:text-xl text-white">
              Check your multiplayer Service Record
        </motion.h2>
          
        <div className="mt-12 w-full max-w-[600px]">
          <SearchForm/>
        </div>

      </div>       
    </>
  )
}
