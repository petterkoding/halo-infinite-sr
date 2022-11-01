import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import CardScrollReveal from './CardScrollReveal';
import Table from './Table';
import { FireIcon } from '@heroicons/react/outline';
import {motion} from "framer-motion"
import Loading from "../common/Loading"

const Test = () => {

    const [data, setData] = useState([])
    const [success, setSuccess] = useState(false)

    const {query:{playerId}} = useRouter()
    
    
    useEffect(()=>{
        let controller = new AbortController();
        const fetchData = async() => {
            const data = await fetch(`http://localhost:3000/api/getRankedStats?gamertag=${playerId}`, {
                signal: controller.signal
            })
            const res = await data.json()
            controller = null;
            if(data.status === 200){
                setSuccess(true)
            }
            setData(res)
        }
        fetchData()

        return () => controller?.abort()
    },[])

  return (
    <>
        {data && <>
            <div className="relative overflow-hidden mb-4">
                <motion.h5
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1.2, delay: 1.7}}
                    className="capitalize text-3xl text-white">
                    Ranked
                </motion.h5>
            </div>
        
            <div className="flex flex-row justify-between gap-2">

                <CardScrollReveal
                    title="matches"
                    Icon={FireIcon}
                    x={-15}
                    >
                        {
                        data &&
                        <>
                            <Table name="total" data={data?.stats?.data.matches.total}/>
                            <Table name="wins" data={data?.stats?.data.matches.outcomes.wins}/>
                            <Table name="losses" data={data?.stats?.data.matches.outcomes.losses}/>
                            <Table name="draws" data={data?.stats?.data.matches.outcomes.draws}/>
                            <Table name="winrate" data={data?.stats?.data.matches.win_rate.toFixed(2)}/>
                        </>
                      
                    }
            
                </CardScrollReveal>

                <CardScrollReveal
                    title="summary"
                    Icon={FireIcon}
                    x={15}
                    >
                        {data &&
                        <>
                            <Table name="kills" data={data?.stats?.data.core.summary.kills}/>
                            <Table name="deaths" data={data?.stats?.data.core.summary.deaths}/>
                            <Table name="assists" data={data?.stats?.data.core.summary.assists}/>
                            <Table name="kda" data={data?.stats?.data.core.kda.toFixed(2)}/>
                            <Table name="kdr" data={data?.stats?.data.core.kdr.toFixed(2)}/>
                        </>
                        }

            
                </CardScrollReveal>
            </div>
        </>
        } 
   
    </>
    )    
}

export default Test

