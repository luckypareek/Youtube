import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import {addMessage} from './../Utils/chatSlice'
import { generate, makeRandomMessage } from '../Utils/helper'

const LiveChat = () => {
    
  const [liveMessage,setLiveMessage]=useState("")
    const dispatch=useDispatch()
     const messages = useSelector(store=> store.chat.messages)
     const [hideChat,setHideChat]=useState(false)

 useEffect(()=>{
   const  dataInterval=setInterval(()=> getLiveData() ,1500)

    return ()=>{
        clearInterval(dataInterval)
    }
 },[])

   const getLiveData=()=>{
    
      dispatch(addMessage({
        
        "name":generate(),
        "message":makeRandomMessage(20)
      }))
   }
   
   if(hideChat)
   {
    return(
   <div className='border border-gray-300 w-[360px] p-1 ml-2 rounded-b-lg '>
   <button className='p-1 m-1 hover:bg-slate-400 rounded-lg w-[330px] ' onClick={()=>setHideChat(false)}>Show Chat</button>
  </div>
    )
   }

  return (
  
     
    <>
    <div className="ml-2 p-2 border border-gray-300 w-[360px] h-[500px] bg-slate-100 rounded-t-lg overflow-y-scroll flex flex-col-reverse scroll-y-">
       
       {
       //Dont use index for key
       messages?.map((message,index)=><ChatMessage key={index} name={message.name} message={message.message}/>
        )} 
        
       </div>
     <form 
     className='w-[360px] p-2 ml-2 border border-gray-300 '
     onSubmit={(e)=>{
      e.preventDefault()
      dispatch(addMessage({
        "name":"Lucky Pareek",
        "message": liveMessage
      })
      
      )
      setLiveMessage("")
     }
    }
     
     >
     <input 
     className=' border border-t-0 border-l-0 border-r-0 border-b-slate-400 border-b-2 w-64 focus:outline-none focus:border-b-blue-500'  
     placeholder='Enter your message' 
     value={liveMessage} 
     onChange={(event)=> {
   
      setLiveMessage(event.target.value)}}
     
     />
     <button className='bg-slate-200 px-2 ml-3 rounded-sm '>Send</button>
     </form>
     <div className='border border-gray-300 w-[360px] p-1 ml-2 rounded-b-lg '>
      <button className='p-1 m-1 hover:bg-slate-400 rounded-lg w-[330px] ' onClick={()=>setHideChat(true)}>Hide Chat</button>
     </div>
   </>
  )
}

export default LiveChat