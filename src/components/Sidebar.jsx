import React from 'react'
import {assets} from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className="bg-[#121212] h-[15%] flex flex-col rounded justify-around">
            <div className="flex items-center gap-3 pl-8 cursor-pointer">
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
            <div className="flex items-center gap-3 pl-8 cursor-pointer">
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>
            </div>
        </div>
        <div className='bg-[#121212] rounded h-[85%]'>
            <div className="p-4 flex items-center justify-between">
                <div className=" flex items-center gap-3">
                    <img className='w-6' src={assets.stack_icon} alt="" />
                    <p className="font-semibold">Library</p>
                </div>
                <div className="flex items-center gap-3">
                    <img className='w-4 cursor-pointer' src={assets.arrow_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div className='p-3 bg-[#242424] m-2 rounded flex flex-col items-start justify-start gap-1 pl-4'>
                <p className="font-semibold text-[14px]">Create Your first playlist</p>
                <p className="text-[14px]">It's easy we will help you</p>
                <button className='px-4 py-1.5 text-[13px] bg-white text-black rounded-full mt-4 text-center cursor-pointer font-semibold'>Create Playlist</button>
            </div>
            <div className='p-3 bg-[#242424] m-2 rounded flex flex-col items-start justify-start gap-1 pl-4'>
                <p className="font-semibold text-[14px]">Let's find some podcasts to follow</p>
                <p className="text-[14px]">Keep updated on new episodes</p>
                <button className='px-4 py-1.5 text-[13px] bg-white text-black rounded-full mt-4 text-center cursor-pointer font-semibold'>Browse Podcasts</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar