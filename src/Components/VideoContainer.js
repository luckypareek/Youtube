import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_URL } from '../Utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'

const VideoContainer = () => {

   const [videos,setVideos]=useState([])
   const [hasMore, setHasMore] = useState(true);

   useEffect(()=>{
    getData()
   },[])
 

  const getData=async ()=>{
    const data=await fetch(YOUTUBE_VIDEOS_URL)
    const json_data=await data.json()
    setVideos([...videos,...json_data.items])
    
  }




  return (
    <InfiniteScroll
    dataLength={videos.length}
    next={getData}
    hasMore={hasMore}
    loader={<h4>Loading...</h4>}
  >
    <div className='flex flex-wrap'>
      {videos.map((video)=> <Link to={"/watch?vid="+video.id} key={video.id}><VideoCard  info={video}/></Link> )}
    

    </div>
    </InfiniteScroll>
  )
}

export default VideoContainer