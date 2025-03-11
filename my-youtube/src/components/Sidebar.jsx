import React from 'react'
import { IoHome } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { PiPlaylistDuotone } from "react-icons/pi";
import { GoVideo } from "react-icons/go";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { PiScissorsFill } from "react-icons/pi";
import { BsFire } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi2";
import { HiOutlineMusicalNote } from "react-icons/hi2";
import { PiFilmSlateBold } from "react-icons/pi";
import { IoLogoGameControllerB } from "react-icons/io";
import { TfiCup } from "react-icons/tfi";
import { MdOutlinePodcasts } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFlag } from "react-icons/bs";
import { IoHelpCircleOutline } from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";

import { useSelector } from 'react-redux';
const SidebarItem= [
    {
        icons:<IoHome />,
        title:"Home"
    },
    {
        icons:<SiYoutubeshorts />,
        title:"Shorts"
    },
    {
        icons:<MdSubscriptions />,
        title:"Subscriptions"
    },
    {
        icons:"",
        title:"--------------------"
    },
    {
        icons:<MdOutlineHistory />,
        title:"History"
    },
    {
        icons:<PiPlaylistDuotone />,
        title:"Playlists"
    },
    {
        icons:<GoVideo />,
        title:"Your videos"
    },
    {
        icons:<FaGraduationCap />,
        title:"Your courses"
    },
    {
        icons:<MdOutlineWatchLater />,
        title:"Watch Later"
    },
    {
        icons:<BiLike />,
        title:"Liked videos"
    },
    {
        icons:" ",
        title:"--------------------"
    },
    {
        icons:<PiScissorsFill />,
        title:"Subscription"
    },
    {
        icons:<BsFire />,
        title:"Trending"
    },
    {
        icons:<HiShoppingBag />,
        title:"Shopping"
    }
    ,
    {
        icons:<HiOutlineMusicalNote />,
        title:"Music"
    },
    {
        icons:<PiFilmSlateBold />,
        title:"Films"
    },
    {
        icons:<IoLogoGameControllerB />,
        title:"Gaming"
    },
    {
        icons:<TfiCup />,
        title:"Sports"
    },
    ,
    {
        icons:<MdOutlinePodcasts />,
        title:"Podcast"
    },
    {
        icons:<IoSettingsOutline />,
        title:"Setting"
    }
    ,
    {
        icons:<BsFlag />,
        title:"Report history"
    },
    {
        icons:<IoHelpCircleOutline />,
        title:"Help"
    }
    ,
    {
        icons:<RiFeedbackLine />,
        title:"Send feedback"
    }
]
const Sidebar = () => {
    // const open = true;
    const open = useSelector((state)=>state.app.open);
  return (
    <>
    <div className='relative grid w-[20%] px-5 text-xl h-[calc(100vh-4rem)] overflow-y-scroll overflow-x-hidden'>
        {
            SidebarItem.map((item, index)=>{
                return(
            <div className='my-1 flex items-center w-[100%] hover:bg-gray-200 pl-3 py-1 rounded-lg ' key={index}>
           <h2 className='my-1'> {item.icons}</h2>
            <p className={`ml-5 text-[15px] ${open ? "":'hidden'}`}>{item.title}</p>
            </div>
       ) })}
           
    </div>
    </>
  )
}

export default Sidebar
