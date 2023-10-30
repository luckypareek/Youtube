import React, { useEffect, useState } from 'react'
import { API_KEY } from '../Utils/constants'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SearchVideoCard from './SearchVideoCard'




const SearchResults = () => {

  const [searchData,setSearchData]=useState([])

  const [searchQueryParam,setSearchQueryParam]=useSearchParams()
  const query=searchQueryParam.get("query")
  console.log(query)
 
 

  useEffect(()=>{
    getSearchData()

  },[query])

  const getSearchData= async()=>{
    const api=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`
    const data=await fetch(api)
    const data_json=await data.json()
    setSearchData(data_json?.items)
    
  }


  return (
    <div className=''>
    { searchData?.length >0 &&  searchData.map((data,index)=> <Link key={index} to={"/watch?vid=" + data.id.videoId}> <SearchVideoCard  searchdata={data}/> </Link>)  }
    
  

  </div>
  )
}

export default SearchResults