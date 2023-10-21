import React, { useEffect, useState } from 'react'
import { API_KEY } from '../Utils/constants'

const SearchResults = () => {

  const [searchData,setSearchData]=useState([])

  useEffect(()=>{
    getSearchData()

  },[])

  const getSearchData= async()=>{
//     const api=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${}&key=${API_KEY}`
  }


  return (
    <div>SearchResults</div>
  )
}

export default SearchResults