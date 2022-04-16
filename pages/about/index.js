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
        <Head title="About InfiniteSR"/>
        <main className="w-full flex flex-col p-2 max-w-7xl mx-auto mt-7">
            <div className="w-full flex flex-col justify-center items-center h-[25rem] md:h-[30rem]">
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
                    className="text-xl text-white">
                        Gaming x new tech
                </motion.h2>

                <p className="text-white mt-16">
                    I&apos;ve been playing since Halo 2 was released.
                </p>
                <p className="text-white mt-1">
                    I made this because I love the game and building things.
                </p>
            </div>


            <div className="mx-auto h-[25vh] group">
                <h3 className="font-bold text-xl text-white mb-2">Tech stack</h3>
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
            </div>

        </main>
    </>
  )
}

export default index