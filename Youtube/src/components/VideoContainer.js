import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEO} from "../Utils/constants"
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    getVideos();
  })

  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_VIDEO);
    const json=await data.json();
    console.log(json);
    setVideos(json.items)
  }
  if(!videos) return<h1>
    Loading
  </h1>
  return (
    <div>
       {/* <VideoCard info={videos[0]}/> */}
     { videos[0] && <AdVideoCard info={videos[0]}/>}
       { videos.map(video=>
       <Link key={video.id} to={"/watch?v="+video.id}><VideoCard  info={video}/> </Link> 
      )}
     {/* <Link to={"/watch"}> Video Container API </Link> */}
    </div>
  )
}



export default VideoContainer
