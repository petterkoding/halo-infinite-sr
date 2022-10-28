import { motion } from "framer-motion"

const ProgressBar = ({name, p,  total}) => {

    const divideByTotal = p / total
    const findPercentage = divideByTotal * 100
    const percentageOfTotal = Math.ceil(findPercentage)


    const style = {
        bar: `h-full flex items-center justify-end pr-2 bg-gradient-to-r from-[#9E7809] to-[#B7991C]`
    }

 
  return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1, delay: 0.9}}
            viewport={{ once: true }}
            className="py-1 mb-1">
            <div className="text-white text-xs uppercase mb-1">{name} <span className="ml-3">{p}</span> </div>
            <div className="border border-white bg-slate-50/20 h-5 w-[20rem]">
                <motion.div
                    initial={{ width: 0}}
                    whileInView={{ width: `${percentageOfTotal}%`}}
                    transition={{duration: 2, delay: 0.2}}
                    className={style.bar}
                    viewport={{ once: true }}
                >      
                </motion.div>
            </div>
        </motion.div>
  
  )
}

export default ProgressBar



