import React from 'react'
import Head from '../../components/head/Head';
import {LightningBoltIcon, SparklesIcon} from '@heroicons/react/solid'
import {XCircleIcon, ChartBarIcon} from '@heroicons/react/outline'
import Table from '../../components/records/Table';
import { motion } from 'framer-motion'
import Loading from '../../components/common/Loading';
import ProgressBar from '../../components/records/ProgressBar';
import Matchmaking from '../../components/records/Matchmaking';
import Card from '../../components/records/Card';
import CardScrollReveal from '../../components/records/CardScrollReveal';
import PlayerNotFound from '../PlayerNotFound';
import GamertagEmblem from '../../components/records/GamertagEmblem';
import Ranked from '../../components/records/Ranked';

function playerId({
  serviceRecord,
}) {

    const GT = serviceRecord?.additional?.parameters.gamertag
    const totalKills = serviceRecord?.data?.core.summary.kills

    if(!GT || GT === undefined) return <PlayerNotFound/>
    
  return (
    <>
        <Head title={`Halo Infinite Stats | ${GT}`}/>
        <div className="max-w-7xl mx-auto p-2 min-h-[80vh]">

      

          <motion.div
            initial={{opacity: 1}}
            animate={{opacity: 0}}
            transition={{duration: 4}}
            className="absolute left-[50%] pointer-events-none translate-y-[-36px] translate-x-[-38px]"
          >
            <Loading text="Spartan found!"/>
          </motion.div>
          
          <motion.div
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1.5, delay: 0.1}}
            className="opacity-0 flex flex-col justify-start mb-12
            bg-auto bg-john117
            bg-no-repeat bg-top h-auto border-b border-b-slate-50/80 relative">



            <GamertagEmblem gamertag={GT}/>

            <motion.div
              initial={{opacity: 0, x: 10}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 1, delay: 1.5}}
              className="absolute right-2 top-0 md:right-10">

              <div className="flex flex-col justify-start items-center">
                <span className="text-white text-xs lg:text-sm">Win rate</span>
                <div className="text-white font-bold text-2xl md:text-5xl block">{serviceRecord.data?.matches.win_rate.toFixed(2)}<span>%</span></div>
                <span className="text-white text-xs lg:text-sm mt-2">Personal score</span>
                <div className="text-white font-bold text-2xl md:text-4xl block">{serviceRecord.data.core.scores.personal}</div>
              </div>
            </motion.div>

            <Card title="overall" Icon={SparklesIcon} x={-8} delay={1.6}>
              <Table name="kills" data={serviceRecord.data.core.summary.kills}/>
              <Table name="deaths" data={serviceRecord.data.core.summary.deaths}/>
              <Table name="assists" data={serviceRecord.data.core.summary.assists}/>
            </Card>


            <Card title="combat efficiency" Icon={LightningBoltIcon} x={-6} delay={1.75}>
              <Table name="kills" data={serviceRecord.data.core.summary.kills}/>
              <Table name="assists" data={serviceRecord.data.core.summary.assists}/>
              <Table name="kdr" data={serviceRecord.data.core.kdr.toFixed(2)}/>
              <Table name="kda" data={serviceRecord.data.core.kda.toFixed(2)}/>
            </Card>

        
            <Card title="precision" Icon={XCircleIcon} x={-4} delay={1.85}>
              <Table name="Accuracy" data={`${serviceRecord.data.core.shots.accuracy.toFixed(2)}%`} />
              <Table name="shots fired" data={serviceRecord.data.core.shots.fired} />
              <Table name="shots missed" data={serviceRecord.data.core.shots.missed}/>
              <Table name="average damage" data={Math.round(serviceRecord.data.core.damage.average)}/>
            </Card>

          </motion.div>


          <Matchmaking
            matchesPlayed={serviceRecord?.data.matches.total}
            wins={serviceRecord?.data.matches?.outcomes.wins}
            losses={serviceRecord?.data.matches?.outcomes.losses}
            draws={serviceRecord?.data.matches?.outcomes.draws}
          />

          <Ranked/>




          <CardScrollReveal title="Kills overall" Icon={ChartBarIcon} x={-15}>
            <ProgressBar name="headshots" p={serviceRecord.data.core.breakdowns.kills.headshots} total={totalKills}/>
            <ProgressBar name="melee" p={serviceRecord.data.core.breakdowns.kills.melee} total={totalKills}/>
            <ProgressBar name="grenades" p={serviceRecord.data.core.breakdowns.kills.grenades} total={totalKills}/>
            <ProgressBar name="power weapons" p={serviceRecord.data.core.breakdowns.kills.power_weapons}  total={totalKills}/>
          </CardScrollReveal>
          

        </div>
    </>
  )
}

export default playerId




export async function getServerSideProps(ctx){

    const APIKEY = process.env.API_KEY;
  
    const options = {
      headers: {
        Authorization: `Bearer ${APIKEY}`,
      }
    }

    const params = ctx.query.playerId

    const SERVICE_RECORD = await fetch(`https://halo.api.stdlib.com/infinite@1.6.4/stats/players/service-record/multiplayer/matchmade/all/?gamertag=${params}`, options);
    
    const serviceRecord = await SERVICE_RECORD.json();
  
    return { props: {
      serviceRecord,
      }
    }
}