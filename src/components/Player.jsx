import React from 'react'
import { assets, songsData } from '../assets/assets'

const Player = () => {
  return (
    <div className='h-[10%] bg-black text-white flex items-center px-4 pb-2'>
        <div className="hidden lg:flex items-center gap-4">
            <img className='w-12' src={songsData[0].image} alt="" />
            <div>
                <p>{songsData[0].name}</p>
                <p>{songsData[0].desc.slice(0,30)}</p>
            </div>
        </div>
        <div className="flex flex-col items-center m-auto ">
            <div className="flex gap-5">
                <img src={assets.shuffle_icon} alt="" className="w-4 cursor-pointer" />
                <img src={assets.prev_icon} alt="" className="w-4 cursor-pointer" />
                <img src={assets.play_icon} alt="" className="w-4 cursor-pointer" />
                <img src={assets.next_icon} alt="" className="w-4 cursor-pointer" />
                <img src={assets.loop_icon} alt="" className="w-4 cursor-pointer" />
            </div>
            <div className="flex items-center gap-5">
               <p>1:06</p> 
               <div className="w-[20vw] max-w-[300px] bg-gray-300 rounded-full cursor-pointer">
                <hr className='h-1 border-none w-10 bg-green-800 rounded-full' />
               </div>
               <p>4:12</p> 
            </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img src={assets.plays_icon} alt="" className="w-4 cursor-pointer" />
            <img src={assets.mic_icon} alt="" className="w-4 cursor-pointer" />
            <img src={assets.queue_icon} alt="" className="w-4 cursor-pointer" />
            <img src={assets.speaker_icon} alt="" className="w-4 cursor-pointer" />
            <img src={assets.volume_icon} alt="" className="w-4 cursor-pointer" />
            <div className="w-18 bg-slate-50 h-1 rounded "></div>
            <img src={assets.mini_player_icon} alt="" className="w-4 cursor-pointer" />
            <img src={assets.zoom_icon} alt="" className="w-4 cursor-pointer" />
        </div>
    </div>
  )
}

export default Player