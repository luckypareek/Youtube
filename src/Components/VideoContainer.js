import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_URL } from '../Utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

   const [videos,setVideos]=useState([])

   useEffect(()=>{
     getData()
   },[])
 

  const getData=async ()=>{
    const data=await fetch(YOUTUBE_VIDEOS_URL)
    const json_data=await data.json()
    setVideos(json_data.items)
    
  }




  return (
    <div className='flex flex-wrap'>
      {videos.map((video)=> <Link to={"/watch?vid="+video.id} key={video.id}><VideoCard  info={video}/></Link> )}
    

    </div>
  )
}

export default VideoContainer