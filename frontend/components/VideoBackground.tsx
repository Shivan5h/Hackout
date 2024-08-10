import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted className="video">
        <source src="/AdobeStock_429468702_Video_HD_Preview.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
    </div>
  );
};

export default VideoBackground;
