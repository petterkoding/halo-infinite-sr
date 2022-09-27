import Head from "../../components/head/Head"
import {motion} from 'framer-motion'

const index = () => {


    const styles ={
        listItem: "uppercase bg-slate-200/[.05] px-4 py-1 w-full text-sm text-center border border-slate-50/5 text-white/80 mb-2 border-b-indigo-500/50 hover:border-slate-50/40 hover:border-b-indigo-500/100 hover:border-x-slate-50/100 hover:bg-slate-200/40 transition duration-100 cursor-pointer",
      }

    const container = {
        hidden: { opacity: 0},
        show: {
          opacity: 1,
          transition: {
            delay: 0.1,
            staggerChildren: 0.3,
          }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }


  return (
    <>
        <Head title="Halo InfiniteSR | About"/>
        <div className="mt-40 w-full flex flex-col flex-start  max-w-7xl mx-auto px-2">
            <div className="w-full flex flex-col items-center flex-start h-auto">
                <motion.h1
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    className="text-4xl font-bold mb-4 text-white uppercase">
                        created by a player
                </motion.h1>
                <motion.h2
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 2}}
                    className="text-xl text-white capitalize">
                        gaming x frontend
                </motion.h2>

                
                <p className="text-white my-16 max-w-[600px] leading-relaxed">
                    I&apos;ve played a lot of Halo growing up in the 90s. I think its fair to say its one of my favorite games, ever.
                    So why not combine it with a modern Frontend framework to create something useful?
                </p>
                <p className="text-white max-w-[600px] leading-relaxed">
                    I created this because Im a Halo fan and I like to build new things.
                    It was a fun mini project because it meant something to me. 
                
                </p>
            </div>


            <div className="mx-auto h-auto mt-20 group">
                <h3 className="font-bold text-xl text-white mb-2">Tech used</h3>
                <motion.ul 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    transition={{duration: 1.5, staggerChildren: 0.5, delay: 0.1}}
                    className="grid grid-cols-2 gap-2">
                    <motion.li className={styles.listItem} variants={item}>next.js</motion.li>
                    <motion.li className={styles.listItem} variants={item}>tailwind css</motion.li>
                    <motion.li className={styles.listItem} variants={item}>react hook form</motion.li>
                    <motion.li className={styles.listItem} variants={item}>framer motion</motion.li>
                    <motion.li className={styles.listItem} variants={item}>hero icons</motion.li>
                </motion.ul>


                <span className="text-xs text-gray-300 mt-32 block bg-stone-900/60 text-center border border-indigo-400">This is a work in progress and will evolve over time.</span>
            </div>

        </div>
    </>
  )
}

export default index