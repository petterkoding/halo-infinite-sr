import {useState} from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Head from '../components/head/Head'
import { motion } from 'framer-motion'
import Loading from '../components/common/Loading'

export default function Home() {

  const [isSearching, setIsSearching] = useState(false)


  const {register, handleSubmit, formState: {errors}} = useForm({mode: "onChange"});

  const router = useRouter();

  const styles ={
    listItem: "uppercase bg-slate-200/[.05] px-5 py-1 w-full md:w-1/2 text-center border border-slate-50/5 text-white/80 mb-2 border-b-indigo-500/50 hover:border-slate-50/40 hover:border-b-indigo-500/100 hover:border-x-slate-50/100 hover:bg-slate-200/40 transition duration-100 cursor-pointer",
    input: "bg-slate-200/[.100] h-[60px] w-[80%] md:w-96 p-2 mt-1 border text-white"
  }


  const onSubmit = ({searchForPlayer}) => {
    setIsSearching(true) 
    router.push(`/player/${searchForPlayer}`)
    
  }

  if(isSearching) return <Loading text="search in progress"/>

  return (
    <>
      <Head title="Halo Infinite Stats | Home"/>
      <div className="max-w-7xl mx-auto w-full flex flex-col flex-start items-center mt-40 h-auto px-2">
          <motion.h1
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          className="text-4xl font-bold mb-4 text-white uppercase">
            Halo Infinite Stats
          </motion.h1>
          <motion.h2
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2}}
            className="text-xl text-white">
            Check your multiplayer Service Record.
          </motion.h2>
          
          {!isSearching && (
            <form className="mt-7 w-full max-w-[29rem]" onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="w-full">
                <label htmlFor="searchForPlayer" className="text-white text-xs block">Search for Player</label>
                
                <input
                  maxLength={15}
                  type="text"
                  name="searchForPlayer"
                  className={styles.input}
                  placeholder="Enter Gamertag"
                  {...register("searchForPlayer", { required:true, minLength: 1, maxLength: 15})}
                  />
                <button className="px-4 h-[60px] border w-auto border-slate-50/20 ml-1 bg-slate-200/30 text-white uppercase hover:bg-cyan-600/90 transition duration-200 ease-out">go</button>
                {errors.searchForPlayer && <p className="text-white text-xs mt-1 p-1">Required field: Please enter a gamertag</p>}
              </fieldset>
            </form>  
        )}
      </div>       
    </>
  )
}
