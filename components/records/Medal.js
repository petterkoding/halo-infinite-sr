import Image from 'next/image'

const Medal = ({name, src, count}) => {

  return (
    <div  className="border border-slate-50/20 flex flex-col justify-center items-center px-4 pt-1 bg-stone-900/20 border-x-white hover:bg-white/10 hover:border-y-cyan-400">
        <h5 className="text-white text-xs md:text-md block text-center uppercase">{name}</h5>
        <Image src={src} alt="asdasd" width="72" height="72" objectFit='contain'/>
        <span className="text-white text-lg block">{count}</span>
    
    </div>
  )
}

export default Medal