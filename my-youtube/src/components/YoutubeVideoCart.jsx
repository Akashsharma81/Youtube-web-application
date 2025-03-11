import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { API_KEY } from '../api/Youtubeapi';
import { HiOutlineDotsVertical } from "react-icons/hi";

const YoutubeVideoCart = ({ item }) => {
  const [icon, setIcon] = useState("");

  const fetchChannelLogo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=${API_KEY}`
      );
      console.log(res);
      setIcon(res.data.items[0]?.snippet?.thumbnails?.high?.url || "");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChannelLogo();
  }, [item.snippet.channelId]);

  return (
    <div className='m-2 cursor-pointer'>
      <div>
        <img className='w-full rounded-2xl' src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
      </div>
      <div className='flex justify-between m-1'>
        <Avatar src={icon} size="40" round={true} className='flex shrink-0 border'/>
        <div className='ml-3'>
          <h2 className='font-bold'>{item.snippet.title}</h2>
          <p className='text-gray-700'>{item.snippet.channelTitle}</p>
        </div>
        <div>
          
        <HiOutlineDotsVertical className='text-2xl ml-3 hover:bg-gray-300 p-1 rounded-full'/>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideoCart;
