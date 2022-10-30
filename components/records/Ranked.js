import React, {useState, useEffect} from 'react'
import CardScrollReveal from "./CardScrollReveal"
import Table from './Table'
import {FireIcon} from '@heroicons/react/outline'
import {motion} from "framer-motion"


const Ranked = ({match, summary}) => {



  return (
    <>  
        <div className="relative overflow-hidden mb-4">
            <motion.h5
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1.2, delay: 1.7}}
                className="capitalize text-3xl text-white">Ranked</motion.h5>
        </div>

        <div
            className="flex flex-row justify-between gap-2">

            <CardScrollReveal
                title="matches"
                Icon={FireIcon}
                x={-15}
                >
                <Table name="total" data={match.total}/>
                <Table name="wins" data={match.wins}/>
                <Table name="losses" data={match.losses}/>
                <Table name="draws" data={match.draws}/>
                <Table name="winrate" data={match.win_rate}/>
            
            </CardScrollReveal>

            <CardScrollReveal
                title="summary"
                Icon={FireIcon}
                x={15}
                >
                <Table name="kills" data={summary.kills}/>
                <Table name="deaths" data={summary.deaths}/>
                <Table name="assists" data={summary.assists}/>
                <Table name="kda" data={summary.kda.toFixed(2)}/>
                <Table name="kdr" data={summary.kdr.toFixed(2)}/>
            
            </CardScrollReveal>
        </div>
    </>
  )
}

export default Ranked
