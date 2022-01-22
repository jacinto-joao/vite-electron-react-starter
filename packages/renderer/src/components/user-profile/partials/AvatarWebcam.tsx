import React, { useState } from 'react';

// Avatar Web cam using Native navigator media interface
const AvatarWebcam = () => {
    const camHeight = 150;
    const camWidth = 150;
    const [isWebcamOpen, setWebCamOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    //Open a web camera;
    const openWebcam = () => {

    };

    //close web cam
    const closeWebcam = () => {
        //
    };
    
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

                {
                    !isWebcamOpen ? (
                        <button>
                            {isLoading ?'please wait ...':'Take picture'}
                        </button>
                    ):(
                        <button>
                            Close camera
                        </button>
                    )
                }
        </div>
    </div>
  );
};

export default AvatarWebcam;
