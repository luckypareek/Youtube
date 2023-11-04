import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2 '>
         <img className='h-5' alt="User-icon" src="https://alhathal.net/wp-content/uploads/2019/07/516-5167304_transparent-background-white-user-icon-png-png-download.png"/>
         <span className='font-bold px-1 text-xs'>{name}</span>
         <span className='text-xs'>{message}</span>
    </div>
  )
}

export default ChatMessage