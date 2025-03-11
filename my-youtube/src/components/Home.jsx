import React from 'react'
import Sidebar from './Sidebar'
import Blog from './Blog'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div>
       <div className='flex '>
      <Sidebar/>
      <Outlet/>
    
      </div>
    </div>
  )
}

export default Home
