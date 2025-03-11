import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {YOUTUBE_VIDEO_API}  from '../api/Youtubeapi'
import YoutubeVideoCart from './YoutubeVideoCart'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const [video,setVideo] = useState([]);
//api calling by useffect
const fetchVideo = async () => {
  try {
    const res = await axios.get(YOUTUBE_VIDEO_API);
    // console.log("Full API Response:", res);  
    // console.log("API Response Data:", res.data);  
    // console.log("Items:", res?.data?.items);
    setVideo(res?.data?.items || []);  
  } catch (error) {
    console.log("API Fetch Error:", error);
  }
};

useEffect(() => {
  console.log("Fetching videos...");
  fetchVideo();
}, []);

  return (
    <div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 max-w-[1100px] w-full mx-auto">

    {

    video.map((item)=>{
      return(
        <Link to={`watchpage?v=${item.id}`} key={item.id} >
       <YoutubeVideoCart item = {item}/>
        </Link>

      )
    })
    }
    </div>
    </div>
)}

export default VideoContainer
