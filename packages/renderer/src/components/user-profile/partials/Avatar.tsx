import React, { useEffect } from 'react';
import Webcam from 'webcamjs';

function Avatar() {

  useEffect(() => {
    initCamera();
  },[]);

  const initCamera = async  () => {
    await  Webcam.set({
        width: 150,
        height: 150,
        image_format: 'jpeg',
        jpeg_quality: 90
      });
    await	Webcam.attach( '#camera-container');
  };

  const takePicture = async () =>{
    Webcam.snap( function(data_uri: any) {
      // display results in page

      console.log(data_uri);
      // document.getElementById('results').innerHTML = 
      //   '<img src="'+data_uri+'"/>';
    });
  };

  return (
    <>
      <div className="avatar" id='camera-container'></div>
      <button className='btn btn__selfie' onClick={takePicture}>
        Take selfie;
      </button>
    </>
  );
}

export default Avatar;
