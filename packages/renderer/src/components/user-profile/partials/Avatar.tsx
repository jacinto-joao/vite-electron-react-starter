import React, { useEffect } from 'react';
import Webcam from 'webcamjs';

function Avatar() {

  useEffect(() => {
    initCamera();
  },[]);

  const initCamera = async  () => {
    await  Webcam.set({
        width: 320,
        height: 240,
        image_format: 'jpeg',
        jpeg_quality: 90
      });
    await	Webcam.attach( '#camera-container');
  };

  return (
    <>
      <div className="avatar"></div>
      <button className='btn btn__selfie'>
        Take selfie;
      </button>

      <div id="camera-container"  className='camera-container'></div>
    </>
  );
}

export default Avatar;
