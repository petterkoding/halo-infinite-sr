import Image from 'next/image'


const Medal = ({id, count, data}) => {

  const medalsEarned = data.filter((medal) => medal.id === id)

  return (
    <>
        {
          medalsEarned.map((medal) =>
          <div
          className="border border-slate-50/20 flex flex-col justify-center items-center px-4 pt-1 bg-stone-900/20 border-x-white hover:bg-white/10 hover:border-y-cyan-400"
          key={medal.id}>
            <h5 className="text-white text-xs md:text-md block text-center uppercase">{medal.name}</h5>
            <Image
              src={medal.image_urls.small}
              alt={medal.name}
              width={72}
              height={72}/>
            <span className="text-white text-lg block">{count}</span>
          </div>
          )
        }
    
    </>
  )
}

export default Medal


