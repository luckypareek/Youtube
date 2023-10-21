import React from 'react'
import Comment from './Comment'
import { COMMENT_DATA } from '../Utils/constants'
import CommentsList from './CommentsList'

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2 w-[800px]'>
        <h1 className='font-bold text-xl'>Comments:</h1>
        <CommentsList comments={COMMENT_DATA}/>
    </div>
  )
}

export default CommentsContainer