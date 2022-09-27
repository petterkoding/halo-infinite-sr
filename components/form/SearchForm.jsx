import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Loading from '../common/Loading'

const SearchForm = () => {

    const [isSearching, setIsSearching] = useState(false)

    const {register, handleSubmit, formState: {errors}} = useForm({mode: "onChange"});

    const router = useRouter();

    const styles ={
        listItem: "uppercase bg-slate-200/[.05] px-5 py-1 w-full md:w-1/2 text-center border border-slate-50/5 text-white/80 mb-2 border-b-indigo-500/50 hover:border-slate-50/40 hover:border-b-indigo-500/100 hover:border-x-slate-50/100 hover:bg-slate-200/40 transition duration-100 cursor-pointer",
        input: "bg-slate-200/[.1] h-full w-full p-3 border text-white"
    }

    const onSubmit = ({searchForPlayer}) => {
        setIsSearching(true) 
        router.push(`/player/${searchForPlayer}`)
        
    }

    if(isSearching) return <Loading text="search in progress"/>


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="h-[65px]">
            <fieldset className="h-full">
                <label htmlFor="searchForPlayer" className="text-white text-xs block">Search for Player</label>
                    <div className="flex flex-row items-center justify-between h-full">
                        <input
                            maxLength={15}
                            type="text"
                            name="searchForPlayer"
                            className={styles.input}
                            placeholder="Enter Gamertag"
                            {...register("searchForPlayer", { required:true, minLength: 1, maxLength: 15})}
                            />
                        <button className="px-6 ml-1 h-full border w-auto border-slate-50/20 bg-slate-200/30 text-white uppercase 
                            hover:bg-cyan-600/90 transition duration-200 ease-out">
                            go
                        </button>
                    </div>
                {errors.searchForPlayer && <p className="text-white text-xs mt-1 p-1">Required field: Please enter a valid gamertag</p>}
            </fieldset>
        </form>
    )
}

export default SearchForm