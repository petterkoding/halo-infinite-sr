import SearchForm from "../components/form/SearchForm"
import { ExclamationIcon } from "@heroicons/react/outline"
import { useRouter } from "next/router"

const PlayerNotFound = () => {

  const router = useRouter()

  return (
      <div className="h-screen mt-32 text-white">

          <h1 className="text-3xl font-bold capitalize text-center">player not found</h1>

          <div className="mt-10 text-center">
            <span className="bg-red-500/20 border border-red-700 px-4 py-2 text-red-800 inline-block mb-4 text-lg capitalize">
              error -
              Gamertag can&apos;t be found or doesn&apos;t exist
              <ExclamationIcon className="w-6 h-6 inline ml-3"/>
            </span>
          </div>

        <div className="mt-12 w-full max-w-[600px] mx-auto">
          <h2 className="text-xl mb-12">Check for typos or try a different search</h2>
          <SearchForm />
        </div>
      </div>
  )
}

export default PlayerNotFound