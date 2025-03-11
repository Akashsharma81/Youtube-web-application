
import './App.css'
import React, { Children } from 'react'
import Navbar from './components/Navbar'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './components/Home';
import WatchPage from './components/WatchPage';
import Blog from './components/Blog';
const appRouter = createBrowserRouter([
  {
      path:'/',
      element:<Home/>,
  
  children:[
    {
      path:'/',
      element:<Blog/>
    },
    {
      path:'watchpage',
      element:<WatchPage/>
    }
  ]}
])

function App() {

  return (
    <>
    <div className=''>
      <Navbar/>
      <RouterProvider router={appRouter}/>
    </div>

    </>
  )
}

export default App
