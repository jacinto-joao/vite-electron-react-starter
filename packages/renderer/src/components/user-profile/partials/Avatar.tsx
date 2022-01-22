import React, { useEffect, useState } from 'react';
import Webcam from 'webcamjs';

function Avatar() {

 const [isCameraOpen, setIsCameraOpen] = useState(false);
 const [isPhotoTaken, setIsPhotoTaken] = useState(false);
 const [openCameraLabel, setOpenCameraLabel] = useState<string>('Open camera');
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
   
  };

  //Open camera and take picture.
  const takePicture = async () =>{
    setOpenCameraLabel('Please wait...');
    if (!isCameraOpen) {
      await	Webcam.attach( '#camera-container');

      //wait for the js to be attached.
     setTimeout( async () => {
      setIsCameraOpen(true);
      setOpenCameraLabel('Open camera');

     await Webcam.snap( function(data_uri: any) {
        //Do something with the data.
        console.log(data_uri);
      });
     }, 2000);
    }
  };

  //close camera
  const closeCamera = async () => {
    setIsCameraOpen(false);
   await Webcam.reset();
    setOpenCameraLabel('Open camera');
  };

  return (
    <>
      <div className="avatar" id='camera-container'></div>
      {!isCameraOpen ? (
         <button className='btn btn__selfie' onClick={takePicture}>
         {openCameraLabel}
       </button>
      ):(
        <button className='btn btn__selfie' onClick={closeCamera}>
        Close camera;
      </button>
      )}
    </>
  );
}

export default Avatar;
