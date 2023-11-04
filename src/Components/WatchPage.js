import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {  useSearchParams } from 'react-router-dom'
import { closeMenu } from '../Utils/appSlice'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'
import { API_KEY, YOUTUBE_VIDEO_BY_ID } from '../Utils/constants'


function formatCount(count) {
  if (count < 1000) {
      return count.toString();
  } else if (count < 1000000) {
      return (count / 1000).toFixed(1) + 'K';
  } else if (count < 1000000000) {
      return (count / 1000000).toFixed(1) + 'M';
  } else {
      return (count / 1000000000).toFixed(1) + 'B';
  }
}

const WatchPage = () => {

  const [videoDetails,setVideoDetails]=useState({})
  const[channelDetails,setChannelDetails]=useState({})

  const dispatch=useDispatch()
  const [searchParams,setSearchParams]=useSearchParams()
  const vid=searchParams.get("vid")
   
  useEffect(()=>{
    window.scrollTo(0,0)
    dispatch(closeMenu())
    getVideoDetails()
    
  },[])





   const getVideoDetails=async ()=>{
     const videodata=await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${vid}&key=${API_KEY}`)
     const videodata_json=await videodata?.json()
     setVideoDetails(videodata_json?.items[0]?.snippet)
   

     const channelId=videodata_json?.items[0]?.snippet.channelId
     console.log(videodata_json)
    

     const channeldata=await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`)
     const channeldata_json=await channeldata?.json()
     console.log(channeldata_json)
     setChannelDetails(channeldata_json?.items[0])
     console.log(channeldata_json.items[0].statistics.subscriberCount)
    

  
   
   }



   

  return (

    <div className='flex flex-col mt-2'>
    <div className='flex px-5 w-full bg-'>
      
      <div>

    <iframe 
    className='rounded-lg'
    width="900" 
    height="500" 
    src={"https://www.youtube.com/embed/" + vid} 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen></iframe>


    <div className=' w-[900px] mx-4  mt-2 ml-0' >

    <span className='text-xl font-semibold'>{videoDetails?.localized?.title}</span>

    <div className=' flex flex-row mt-3 justify-between'>
    <div className='flex flex-row'>
    <img className='h-10 rounded-full pr-1' alt="User-icon" src={channelDetails?.snippet?.thumbnails?.high?.url}/> 
    
    <div className='flex flex-col'>
      <span className='font-bold'>{videoDetails?.channelTitle}</span>
      <span className='text-xs'>{formatCount(channelDetails?.statistics?.subscriberCount)} Subscribers</span>
    </div>
    </div>
    <div className='flex flex-row pl-30'>
      <button className=' px-4 bg-white rounded-full border border-black mx-1 hover:bg-gray-100'> Join</button>
      <button className='px-2 bg-black text-white rounded-full mx-1'>Subscribe</button>
     
    </div>

    <div className='flex flex-row'>
      <div className='bg-gray-100 p-2 rounded-l-full' >
      <button >👍 </button>
      </div>
      <div className='bg-gray-100 p-2 rounded-r-full border border-r-2'>
      <button>👎 </button>
      </div>
     
    
    </div>
    <div className=''>
      <button className='p-2 mx-2 bg-gray-100 rounded-2xl'>Share </button>
      <button className='p-2 mx-2  bg-gray-100 rounded-xl'>Download</button>
      
    </div>
    </div>
    
  </div>

    </div>

    <div className='w-full'>
      <LiveChat/>
    </div>

  </div>

  <CommentsContainer/>

    </div>
  )
}

export default WatchPage