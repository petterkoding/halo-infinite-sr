import Head from '../components/head/Head'
import { motion } from 'framer-motion'
import SearchForm from '../components/form/SearchForm'

export default function Home() {

  const verNum = 1;

  return (
    <>
      <Head title="Halo InfiniteSR | Search"/>
      <div className="max-w-7xl mx-auto w-full flex flex-col flex-start items-center mt-40 h-auto px-2">
        <motion.h1
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className="text-4xl lg:text-6xl font-bold mb-4 text-white uppercase">
              Halo Infinite
          
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">S</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-700">R</span>
              <span className="ml-1 text-sm text-white/50">v{verNum}</span>
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
