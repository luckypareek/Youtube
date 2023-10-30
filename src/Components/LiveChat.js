import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import {addMessage} from './../Utils/chatSlice'
import { generate, makeRandomMessage } from '../Utils/helper'

const LiveChat = () => {
    
  const [liveMessage,setLiveMessage]=useState("")
    const dispatch=useDispatch()
     const messages = useSelector(store=> store.chat.messages)

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


  return (
    <>
    <div className="ml-2 p-2 border border-black w-[400px] h-[500px] bg-slate-100 rounded-md overflow-y-scroll flex flex-col-reverse">
       
       {
       //Dont use index for key
       messages?.map((message,index)=><ChatMessage key={index} name={message.name} message={message.message}/>
        )} 
        
       </div>
     <form 
     className='w-[400px] p-2 ml-2 border border-black'
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
     className='border border-b-slate-700 w-80' 
     placeholder='Enter your message' 
     value={liveMessage} 
     onChange={(event)=> setLiveMessage(event.target.value)}
     
     />
     <button className='bg-slate-200 px-2 ml-2 rounded-sm'>Send</button>
     </form>
   </>
  )
}

export default LiveChat