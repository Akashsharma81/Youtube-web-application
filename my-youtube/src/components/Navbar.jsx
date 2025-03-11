import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../util/appSlice';
const Navbar = () => {
  const [notificationCount, setNotificationCount] = useState(4);
  const dispatch=useDispatch();

const toggleHandler = ()=>{
  dispatch(toggleSidebar())
}

  return (
    <>
    <div className='flex items-center justify-between px-5 sticky top-0 bg-white z-10'>
      
      <div className='flex items-center cursor-pointer'>
        <div className='pl-2'>

      <RxHamburgerMenu onClick={()=>toggleHandler()} className='size-6 text-black'/>
        </div>
      <img className='w-35 p-2' src='/assets/logo.png' alt="youtube" />
      </div>

      <div className='flex w-[40%] items-center '>
        <div className='w-[100%] ' >
            <input className='border border-gray-400 outline-0 w-full p-2 rounded-l-full ' type="text" placeholder='search here'/>
        </div>
            <div className='flex items-center '>

            <button className='border border-gray-400 text-2xl p-2 px-4 bg-gray-100  rounded-r-full cursor-pointer'><CiSearch /></button>
            <button>

            <MdKeyboardVoice className='m-2 bg-gray-100 rounded-full text-4xl p-1 cursor-pointer'/>
            </button>
            </div>
      </div>

      <div className='mr-13 gap-3 flex items-center w-[10%] justify-between text-2xl cursor-pointer'>
      <div className='text-sm flex items-center font-semibold bg-gray-100 px-4 rounded-full py-2 text-gray-700 cursor-pointer hover:bg-gray-200 transition'>
      <MdAdd className='text-xl mr-1' />
      <span>Create</span>
    </div>
    <div className='flex items-center gap-2'>
    {/* <IoIosNotifications /> */}
    <div className="relative inline-block">
      {/* Bell Icon */}
      <IoIosNotifications className="text-2xl  text-gray-700 cursor-pointer" />

      {/* Notification Badge */}
      {notificationCount > 0 && (
        <span className="absolute -top-1 -right-3 bg-red-600 text-white text-xs font-bold px-1  rounded-full">
          {notificationCount}+
        </span>
      )}
    </div>
      {/* <CiVideoOn /> */}
      <Avatar googleId="118096717852922241760"className='ml-2' size="40" round={true} />
    </div>
      </div>

    </div>
    </>
  )
}

export default Navbar
