import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  useSearchParams } from 'react-router-dom'
import { closeMenu } from '../Utils/appSlice'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {
  const dispatch=useDispatch()
   useEffect(()=>{
    
    dispatch(closeMenu())
   },[])
    const [searchParams,setSearchParams]=useSearchParams()
    const vid=searchParams.get("vid")
  return (
    <div className='flex flex-col'>
    <div className='flex px-5 w-full'>
      <div>
    <iframe 
    className='rounded-lg'
    width="950" 
    height="500" 
    src={"https://www.youtube.com/embed/" + vid} 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen></iframe>
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