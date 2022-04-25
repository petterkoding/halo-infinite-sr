import React from 'react'
import Head from '../../components/head/Head';
import Medal from '../../components/records/Medal';
import Image from 'next/image'
import {LightningBoltIcon, SparklesIcon} from '@heroicons/react/solid'
import {XCircleIcon, FireIcon} from '@heroicons/react/outline'
import Table from '../../components/records/Table';
import { motion } from 'framer-motion'
import Loading from '../../components/common/Loading';
import ProgressBar from '../../components/records/ProgressBar';
import Matchmaking from '../../components/records/Matchmaking';
import Card from '../../components/records/Card';
import PlayerNotFound from '../PlayerNotFound';

function playerId({serviceRecord, playerAppearance}) {


    const GT = serviceRecord.additional?.gamertag
    const backdrop = playerAppearance.data?.backdrop_image_url
    const servicetag = playerAppearance.data?.service_tag
    const totalKills = serviceRecord.data?.core.summary.kills

    if(!GT || GT === undefined) return <PlayerNotFound/>
    
  return (
    <>
        <Head title={`Halo Infinite Stats | ${GT}`}/>
        <div className="max-w-7xl mx-auto p-2 mt-7 min-h-[80vh]">
          <motion.div
            initial={{opacity: 1}}
            animate={{opacity: 1}}
            transition={{duration: 4}}
            className="absolute left-[50%] pointer-events-none translate-y-[-36px] translate-x-[-38px]"
          >
            <Loading text="Spartan found!"/>
          </motion.div>
          
          <motion.div
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1.5, delay: 0.1}}
            className="opacity-0 flex flex-col justify-start mb-10 bg-[url('https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge/public/field/image/2021/04/halo-infinite-watchdog-armor.png')] bg-no-repeat bg-top h-auto border-b border-b-slate-50/80 relative">

            <motion.div
              initial={{opacity: 0, x:-10}}
              animate={{opacity: 1, x:0}}
              transition={{duration: 1, delay: 1.5}}
              className="border border-slate-50/20 sm-w-full md:max-w-[19rem] h-18 mt-4 py-2 relative flex flex-row justify-around items-center border-x-white border-y-cyan-200 mb-16  bg-gradient-to-r from-sky-500 to-indigo-500">
              <div>
                <h1 className="text-2xl text-white uppercase font-bold">{GT}</h1>
                <span className="text-md text-white/60">{servicetag}</span>
              </div>
              <div className="opacity-40 relative h-4/5 flex items-center">
                <Image src={backdrop} alt="halo emblem backdrop" width="120" height="100" />
              </div>
            </motion.div>

            <motion.div
              initial={{opacity: 0, x: 10}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 1, delay: 1.5}}
              className="absolute  right-2 top-7 md:right-10">

              <div className="flex flex-col items-center">
                <span className="text-white text-xs lg:text-sm">Win rate</span>
                <div className="text-white font-bold text-2xl md:text-5xl block">{serviceRecord.data.win_rate.toFixed(2)}<span>%</span></div>
                <span className="text-white text-xs lg:text-sm mt-2">Total score</span>
                <div className="text-white font-bold text-2xl md:text-4xl block">{serviceRecord.data.core.total_score}</div>
              </div>
            </motion.div>

            <Card title="matchmaking history" Icon={SparklesIcon} iconColor="violet-400" x={-8} delay={1.6}>
              <Table name="kills" data={serviceRecord.data.core.summary.kills}/>
              <Table name="deaths" data={serviceRecord.data.core.summary.deaths}/>
              <Table name="assists" data={serviceRecord.data.core.summary.assists}/>
              <Table name="kdr" data={serviceRecord.data.core.kdr.toFixed(2)}/>
              <Table name="kda" data={serviceRecord.data.core.kda.toFixed(2)}/>
            </Card>


            <Card title="combat efficiency" Icon={LightningBoltIcon} iconColor="yellow-500" x={-6} delay={1.75}>
              <Table name="kills" data={serviceRecord.data.core.summary.kills}/>
              <Table name="deaths" data={serviceRecord.data.core.summary.deaths}/>
              <Table name="assists" data={serviceRecord.data.core.summary.assists}/>
              <Table name="kdr" data={serviceRecord.data.core.kdr.toFixed(2)}/>
              <Table name="kda" data={serviceRecord.data.core.kda.toFixed(2)}/>
            </Card>

        
            <Card title="precision" Icon={XCircleIcon} iconColor="pink-400" x={-4} delay={1.85}>
              <Table name="Accuracy" data={`${serviceRecord.data.core.shots.accuracy.toFixed(2)}%`} />
              <Table name="shots fired" data={serviceRecord.data.core.shots.fired} />
              <Table name="shots missed" data={serviceRecord.data.core.shots.missed}/>
              <Table name="average damage" data={serviceRecord.data.core.damage.average}/>
            </Card>

          </motion.div>

          <Matchmaking
            matchesPlayed={serviceRecord.data.matches_played}
            wins={serviceRecord.data.core.breakdowns.matches.wins}
            losses={serviceRecord.data.core.breakdowns.matches.losses}
            draws={serviceRecord.data.core.breakdowns.matches.draws}
          />


          <Card title="Kills overall" Icon={FireIcon} iconColor="sky-400" x={-4} delay={0.8}>
            <ProgressBar name="headshots" p={serviceRecord.data.core.breakdowns.kills.headshots} total={totalKills}/>
            <ProgressBar name="melee" p={serviceRecord.data.core.breakdowns.kills.melee} total={totalKills}/>
            <ProgressBar name="grenades" p={serviceRecord.data.core.breakdowns.kills.grenades} total={totalKills}/>
            <ProgressBar name="power weapons" p={serviceRecord.data.core.breakdowns.kills.power_weapons}  total={totalKills}/>
          </Card>
          
          
          <motion.div
            initial={{opacity: 0, y: 15}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{duration: 2, delay: 0.6}}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-1xl lg:text-2xl mb-1 uppercase">Medals earned</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">

            {serviceRecord.data.core.breakdowns.medals.map(medal => (
              <Medal
              key={medal.id}
              name={medal.name}
              src={medal.image_urls.small}
              count={medal.count}
              />
              ))}

            </div>
          </motion.div>

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

  
    const SERVICE_RECORD = await fetch(`https://halo.api.stdlib.com/infinite@0.3.9/stats/service-record/multiplayer/?gamertag=${params}`, options);
    const APPEARANCE = await fetch(`https://halo.api.stdlib.com/infinite@0.3.9/appearance/?gamertag=${params}`, options);

  
    const serviceRecord = await SERVICE_RECORD.json();

    const playerAppearance = await APPEARANCE.json();
  
    return { props: { serviceRecord, playerAppearance}}
  }