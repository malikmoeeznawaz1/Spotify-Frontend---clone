import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets } from '../assets/assets';

const DisplayAlbum = () => {
    const {id} = useParams();
    const albumData = albumsData[id];


  return (
    <>
        <Navbar />
        <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
            <img src={albumData.image} alt="" className="w-40 rounded" />
            <div className="flex flex-col">
                <p>Playlist</p>
                <h2 className="text-xl font-bold mb-4 md:text-3xl">{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className="mt-1">
                    <img src={assets.spotify_logo} alt="" className="w-5 inline-block mr-2" />
                    <b className='mr-1'>Spotify</b>
                    <b className='mr-1'>&#x2022; 1,232,434 Likes </b>
                    <b className='mr-1'>&#x2022; 50 Songs</b>
                    about 2 hr 30 min
                </p>
            </div>
        </div>
    </>
  )
}

export default DisplayAlbum