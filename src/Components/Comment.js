import React from 'react'
import CommentsList from './CommentsList'

const Comment = ({data}) => {
    const {name,text,replies}=data
  return (
    <div className='flex my-2 shadow-sm rounded-sm  bg-gray-100 p-2'>
        <img className='w-12 h-8' alt="user" src="https://alhathal.net/wp-content/uploads/2019/07/516-5167304_transparent-background-white-user-icon-png-png-download.png"/>
        <div className='px-3 '>
            <p className='font-bold '>{name}</p>
            <p>{text}</p>
            
        </div>
    </div>
  )
}

export default Comment