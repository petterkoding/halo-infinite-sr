import { author, API } from "../../constants/info"

const Footer = () => {
  return (
    <footer className="w-full h-auto flex flex-col justify-center mt-14 py-8">
        <div className="h-full flex flex-col items-center w-auto">
            <span className="text-white text-xs capitalize">Halo content owned by Microsoft</span>
            <span className="text-white text-xs my-2">| development and UI by {author} |</span>
            <span className="text-white text-xs">API: - {API}</span>
        </div>
    </footer>
  )
}

export default Footer