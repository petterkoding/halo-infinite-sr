import Head from '../components/head/Head'
import { motion } from 'framer-motion'

import SearchForm from '../components/form/SearchForm'

export default function Home() {

  return (
    <>
      <Head title="Halo InfiniteSR | Search"/>
      <div className="max-w-7xl mx-auto w-full flex flex-col flex-start items-center mt-40 h-auto px-2">
          <motion.h1
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className="text-4xl font-bold mb-4 text-white uppercase">
              Halo InfiniteSR 1.1
          </motion.h1>
          <motion.h2
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2}}
            className="text-xl text-white">
              Check your multiplayer Service Record
          </motion.h2>
          
        <SearchForm/>
      </div>       
    </>
  )
}
