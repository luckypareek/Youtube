import React from 'react'

const SearchVideoCard = ({searchdata}) => {
    const {id,snippet}=searchdata
     const {videoId}=id
    const {channelTitle,description,thumbnails,title}=snippet
  return (
    <div className='flex shadow-sm'>
        <div className='p-2 m-2'>
        <img className="w-80 h-52 rounded-xl" src={thumbnails.high.url}/>
        </div>
        <div className='p-2 m-2'>
        <h1 className='text-xl'>{title}</h1>
        <p>{description}</p>
        <h1 className='text-md'>{channelTitle}</h1>
        
        </div>

    </div>
  )
}

export default SearchVideoCard