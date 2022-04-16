import react from "react";
import Link from "next/link"
import { useRouter } from "next/router"
import { motion } from 'framer-motion'

function Nav() {

  const router = useRouter();


  const isActive = (path) => {
    if(router.asPath === path){
      return true;
    }
  }

  const styled = {
    links: "px-3 py-1 font-bold text-sm border border-slate-50/60 mr-4 w-28 text-white uppercase hover:border-slate-50/100 hover:text-black/100 hover:bg-slate-200 transition duration-200",
    active: "bg-slate-200 text-black"
  }

  


  const ref = react.createRef();

  return (
    <>
    <nav className="h-20 w-full p-5 border-b border-b-cyan-400 fixed top-0 z-10 bg-stone-900/80">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="flex justify-start w-full max-w-md">
                <Link href="/" passHref>
                  <a className={`${styled.links} ${isActive("/") ? `${styled.active}` : ""}`}>Home</a>
                  </Link>
                <Link href="/about" passHref>
                  <a className={`${styled.links} ${isActive("/about") ? `${styled.active}` :""}`}>About</a>
                </Link>
            </div>
            <div className="sm:text-1xl md:text-2xl font-bold text-white">infinite<span className="uppercase text-cyan-200">sr</span></div>
        </div>
    </nav>
    <div className="h-[4rem]"></div>
    </>
  )
}

export default Nav