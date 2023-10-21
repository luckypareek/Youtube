import React from 'react'

const VideoCard = ({info}) => {
  const {snippet,statistics}=info
  const {channelTitle,title,thumbnails}=snippet
  return (
    <div className='p-2 m-2 w-64 shadow-sm'>
        <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url}/>
        <span className='font-bold text-x py-2'>{title}</span> <br/>
        <span className='font-semibold'>{channelTitle}</span> <br/>
        <span>{statistics.viewCount} Views</span>
    </div>
  )
}

export default VideoCard  