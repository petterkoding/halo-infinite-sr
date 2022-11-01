import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import {AnimatePresence, motion} from "framer-motion"
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {


  const {pathname} = useRouter()

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter="true">
        <motion.div
          key={pathname}
          initial={{opacity: 0, y: 5}}
          animate={{opacity: 1, y: 0, transition: {duration: 1}}}
          exit={{opacity: 0, y: -5, transition: {duration: 0.7}}}
        > 
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>

  )
}

export default MyApp
