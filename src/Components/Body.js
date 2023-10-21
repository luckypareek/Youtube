import React from 'react'
import Sidebar from './Sidebar'
import Maincontainer from './Maincontainer'
import { Outlet } from 'react-router-dom'


const Body = () => {
  
  return (
     
    

    <div className='grid grid-flow-col'>
        <Sidebar/> 
        <Outlet/>
    </div>
  )
}

export default Body