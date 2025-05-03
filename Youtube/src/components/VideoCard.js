import React from 'react';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  const timeAgo = new Date(publishedAt).getFullYear();

  return (
    <div
      style={{
        width: '320px',
        margin: '8px',
        cursor: 'pointer',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Thumbnail with duration */}
      <div
        style={{
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          aspectRatio: '16/9',
        }}
      >
        <img
          alt="Video thumbnail"
          src={thumbnails?.medium?.url}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'filter 0.3s ease',
          }}
        />
        <span
          style={{
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white',
            fontSize: '12px',
            padding: '2px 6px',
            borderRadius: '4px',
          }}
        >
          23:35
        </span>
      </div>

      {/* Description area */}
      <div style={{ display: 'flex', marginTop: '12px' }}>
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#ccc',
            marginRight: '12px',
            flexShrink: 0,
          }}
        />
        <div style={{ fontSize: '14px' }}>
          <h3 style={{ fontWeight: 600, margin: 0, lineHeight: '1.2em' }}>
            {title}
          </h3>
          <p style={{ color: '#666', fontSize: '12px', marginTop: '4px', marginBottom: '2px' }}>
            {channelTitle}
          </p>
          <p style={{ color: '#999', fontSize: '12px', margin: 0 }}>
            {Number(statistics?.viewCount).toLocaleString()} views · {timeAgo}
          </p>
        </div>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div
      style={{
        border: '1px solid #facc15',
        backgroundColor: '#fefce8',
        borderRadius: '12px',
        padding: '4px',
        display: 'inline-block',
      }}
    >
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
