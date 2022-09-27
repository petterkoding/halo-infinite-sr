import React from 'react'
import eyyy from "../public/sgtjohnson.webp"
import Image from 'next/image'
import { ChatIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const custom404 = () => {

  const styles = {
    box: "border border-slate-50/50 text-white/80 mb-2 border-b-indigo-500/70 rounded-lg"
  }

  return (
      <div className="transparent flex flex-col items-center mt-16 lg:mt-28 h-screen w-full">

          <h1 className="text-2xl lg:text-4xl text-white uppercase">Spartan not found - 404</h1>

          <div className="relative z-10">

            <Image src={eyyy}  alt="sergeant Johson" width={336} height={500} />

            <ChatIcon className="animate-pulse w-6 h-6 text-white absolute left-0 top-[150px] lg:top-10 lg:left-[80%]"/>

            <div className={`bg-black/70 text-white mt-[-10px] absolute z-80 top-[200px] lg:top-[100px] lg:right-[-250px] max-w-[300px] ${styles.box}`}>
              <div className="flex flex-col items-start p-3">
                <span className="text-sm opacity-70">Sgt. Johnson:</span>
                <p className="text-md pl-3 text-white">You&apos;re either lost or stupid enough to try accessing confidential files!</p>
              </div>
              
              <div className="flex flex-col items-end p-3 bg-white/5">
                <span className="text-sm opacity-70">You:</span>
                <p className="text-md pl-3 text-white text-right">...</p>
              </div>

              <div className="flex flex-col items-start p-3">
                <span className="text-sm opacity-70">Sgt. Johnson:</span>
                <p className="text-md pl-3 text-white">Don&apos;t let me catch you again</p>
              </div>
            </div>

           

          </div>

          <h2 className="text-6xl w-full mt-[-10px] text-center lg:text-8xl font-bold uppercase relative z-[999] bg-yellow-400 text-black ">
              warning
          </h2>

         

        <Link href="/" >
          <a className="bg-white text-black py-4 px-6 font-bold mt-5">Go back to base</a>
        </Link>
      </div>
  )
}

export default custom404

