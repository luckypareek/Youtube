import React from 'react'
import Sidebar from './Sidebar'
import Maincontainer from './Maincontainer'
import { Outlet } from 'react-router-dom'
import Header from './Header'



const Body = () => {
  
  return (
    <>
    <Header/>
    

    <div className='grid grid-flow-col'>
        <Sidebar/> 
        <Outlet/>
    </div>
    </>
  )
}

export default Body