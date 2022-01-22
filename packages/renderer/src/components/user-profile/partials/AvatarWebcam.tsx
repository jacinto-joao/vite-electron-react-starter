import React from 'react';

// Avatar Web cam using Native navigator media interface
const AvatarWebcam = () => {
    const camHeight = 150;
    const camWidth = 150;
    
  return (
    <div className='webcam'>
        <div className="webcam__container">
            <video 
                height={camHeight}
                width={camWidth}
                muted 
                autoPlay
                className='webcam__video'
                ></video>
        </div>
    </div>
  );
};

export default AvatarWebcam;
