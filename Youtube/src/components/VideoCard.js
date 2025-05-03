import React from 'react';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-80 sm:w-72 m-3 bg-black cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
      <div className="rounded-xl overflow-hidden">
        <img
          alt="Video thumbnail"
          src={thumbnails?.medium?.url}
          className="w-full h-44 object-cover rounded-xl"
        />
      </div>
      <div className="flex mt-3">
        {/* Placeholder for channel image */}
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex-shrink-0" />
        <div className="text-sm">
          <h3 className="font-medium text-gray-900 line-clamp-2">{title}</h3>
          <p className="text-gray-600 text-xs mt-1">{channelTitle}</p>
          <p className="text-gray-500 text-xs mt-0.5">
            {Number(statistics?.viewCount).toLocaleString()} views
          </p>
        </div>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="border border-yellow-400 rounded-xl p-1 bg-yellow-50">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
