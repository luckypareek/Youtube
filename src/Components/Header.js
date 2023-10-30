import React, { useEffect, useState,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice'
import {Link} from "react-router-dom"
import { YOUTUBE_SEARCH_API } from '../Utils/constants'
import { cacheResults } from '../Utils/searchSlice'

const Header = () => {

  const [searchQuery,setSearchQuery]=useState("")
  const [suggestions,setSuggestions]=useState([])
  const [showSuggestions,setShowSuggestions]=useState(false)
  const searchBoxRef = useRef(null);

  const dispatch=useDispatch()
  const toggleSideBar=()=>{
    dispatch(toggleMenu())
  }

  const handleClickOutside = (event) => {
    
    if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
      // Click is outside the search box; hide suggestions
     
      setShowSuggestions(false);
    }
  };

  const searchSuggestions=useSelector(store=> store.search.searchSuggestions)

  useEffect(()=>{
     const timer= setTimeout(()=>{
      //if result is present in cache then bring from cache else make api call
     if(searchSuggestions[searchQuery])
     {
      setSuggestions(searchSuggestions[searchQuery])
     }
     else{
     getSearchSuggestions()
     }
    },200)


     return ()=>{
     clearTimeout(timer)
      }
  },[searchQuery])

  useEffect(() => {
    // Add a click event listener to the document
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const getSearchSuggestions=async()=>{
    const data=await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const data_json=await data.json()
    setSuggestions(data_json[1])

   // updating the cache
    dispatch(cacheResults({
      [searchQuery]:data_json[1]
    })
    )
  
  }

 
 



  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-2'>
          <img onClick={()=> toggleSideBar()} className='h-8' alt="Menu" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"/>
            <img className='h-8 mx-2' alt="Logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"/>
        </div>
        <div className='col-span-8 px-10'>
          <div>
            <input
             className='w-1/2 border border-gray-400 p-2 rounded-l-full' 
             type="text" 
             value={searchQuery}
             onChange={(event)=>setSearchQuery(event.target.value)}
             onFocus={()=>setShowSuggestions(true)}
             //onBlur={()=>setShowSuggestions(false)}
             ref={searchBoxRef}
             
             />
            <Link to={"/search?query="+searchQuery}> <button  className='border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100'>🔍 </button></Link>
        </div>
         <div 
           className='absolute 
           bg-white py-2 px-5 w-[28rem] shadow-lg rounded-md border border-gray-100'
          
          
           >
          <ul>
            {showSuggestions ===true? 

            suggestions.map((suggestion)=>  
            <Link to={"/search?query="+suggestion} key={suggestion}> 
             <li className='py-2 px-3 shadow-sm hover:bg-gray-100'
            
             >🔍{suggestion} </li>
             </Link> 
            
            ):null
           }
          
          </ul>
        </div>
        </div>
        <div   className='col-span-2'> 
          <img className='h-8' alt="User-icon" src="https://alhathal.net/wp-content/uploads/2019/07/516-5167304_transparent-background-white-user-icon-png-png-download.png"/>
        </div>
        

    </div>
  )
}

export default Header