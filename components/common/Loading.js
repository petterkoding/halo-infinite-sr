import {CubeTransparentIcon} from '@heroicons/react/outline'
import { motion } from 'framer-motion'

const Loading = ({text}) => {
  return (
    <div className="w-full h-screen flex flex-col items-center mt-52">
        <CubeTransparentIcon className="h-7 w-7 text-white transition duration-100 ease-linear my-3 animate-pulse"/>
        <motion.span
            initial={{x: 7}}
            animate={{x: 0}}
            transition={{duration: 0.8}}
            className="text-white text-xs capitalize">
            {text}
        </motion.span>
    </div>
  )
}

export default Loading