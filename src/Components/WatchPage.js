import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  useSearchParams } from 'react-router-dom'
import { closeMenu } from '../Utils/appSlice'
import CommentsContainer from './CommentsContainer'

const WatchPage = () => {
  const dispatch=useDispatch()
   useEffect(()=>{
    
    dispatch(closeMenu())
   },[])
    const [searchParams,setSearchParams]=useSearchParams()
    const vid=searchParams.get("vid")
  return (
    <div className='flex flex-col'>
    <div className='col-span-11 px-5'>
    <iframe 
    className='rounded-lg'
    width="800" 
    height="450" 
    src={"https://www.youtube.com/embed/" + vid} 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen></iframe>
  </div>
  <CommentsContainer/>

    </div>
  )
}

export default WatchPage