import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { API_KEY } from '../api/Youtubeapi';
import Avatar from 'react-avatar';
import { BiLike,BiDislike } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";
import { TfiDownload } from "react-icons/tfi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TbBellRingingFilled } from "react-icons/tb";


const WatchPage = () => {
    const [singleVideo, setsingleVideo] = useState(null);
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    
    // console.log("Current Video ID:", videoId);

    const getOneVideo = async () => {
        if (!videoId) return;  // ✅ Agar videoId `null` hai to API call mat karo
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
            
            // console.log("Fetched Video Data:", res?.data?.items[0]);
            
            setsingleVideo(res?.data?.items[0]);
        } catch (error) {
            console.error("Error fetching video:", error);
        }
    };

    useEffect(() => {
        if (videoId) getOneVideo();  // ✅ Dependency list me videoId add kiya
    }, [videoId]);  // ✅ Ab jab bhi videoId change hoga, API call hogi

    // console.log("Single Video State:", singleVideo);

    return (
        <>
        <div className='m-3 '>
            {videoId ? (
                <div >
                    <iframe className='rounded-md'
                        width="600" 
                        height="315" 
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                    <h1 className='font-semibold'>{singleVideo?.snippet?.title || "Loading..."}</h1>
                </div>
               
            ) : (
                <h1>Invalid Video ID</h1>
            )}
            <div>
                <div>
                <div className='flex justify-between items-center w-full p-2'>
    {/* Left Side: Avatar + Channel Name + Buttons */}
    <div className="flex items-center gap-2">
        <Avatar googleId="118096717852922241760" size="40" round={true} className='shrink-0' />
        <h1 className='mx-2 font-semibold'>{singleVideo?.snippet?.channelTitle}</h1>
        
        {/* Buttons */}
        {/* <button className='bg-black text-white px-4 py-1 rounded-full'>Join</button> */}
       
       <div className=' flex items-center gap-1.5 bg-gray-100 px-4 py-1 rounded-full'>
            <button><TbBellRingingFilled /></button>
        <button >Subscribe</button>

       </div>
    </div>

    {/* Right Side: Action Buttons */}
    <div className='flex items-center gap-3'>

        <div>
        <button className="bg-gray-100 p-2 pr-5 rounded-l-full relative">
  <BiLike />
  <span className="absolute right-0 top-1/2 -translate-y-1/2 h-3/4 border-r border-gray-900"></span>
</button>
{/* <ThumbsDown /> */}
        <button className='bg-gray-100 p-2 rounded-r-full'><BiDislike /></button>
        </div>
        <button className='bg-gray-100 p-2 px-3 rounded-full items-center text-center '><TbShare3 /></button>
        <button className='bg-gray-100 p-2 rounded-full'><TfiDownload /></button>
        <button className='bg-gray-100 p-2 rounded-full'><HiOutlineDotsHorizontal /></button>
    </div>
</div>

                   
                </div>
            </div>
        </div>
        </>
    );
};

export default WatchPage;
