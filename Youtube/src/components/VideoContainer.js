import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO } from '../Utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO);
      const json = await data.json();
      setVideos(json.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  if (!videos.length) {
    return (
      <div
        style={{
          textAlign: 'center',
          color: '#666',
          padding: '40px 0',
          fontSize: '18px',
        }}
      >
        Loading videos...
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '16px',
        padding: '16px',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
      }}
    >
      {/* Ad Video (first card) */}
      {videos[0] && <AdVideoCard info={videos[0]} />}

      {/* Remaining videos */}
      {videos.slice(1).map((video) => (
        <Link
          key={video.id}
          to={`/watch?v=${video.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
