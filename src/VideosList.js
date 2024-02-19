import React, { useEffect, useState } from 'react';
import './App.css'

const VideosList = () => {
    
    const [categories, setCategories] = useState([]);
    
    const videosList = [
    {
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",  
      title: 'Big Buck Bunny'
    },
    {
      video:  "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      title: 'Elephant Dream'
    },
    {
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      title: 'For Bigger Blazes'
    },
    {
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      title: '"For Bigger Fun'
    },
    {
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      title: 'For Bigger Escape'
    },
    {
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      title: 'For Bigger Joyrides'
    },
    {
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      title: 'For Bigger Meltdowns'
    },
   
    {
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      title: 'Subaru Outback On Street And Dirt'
    },
    {
      video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      title: "Tears of Steel"
    },
    {
        video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        title: 'Volkswagen GTI Review'
    },
    {
        video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        title: 'We Are Going On Bullrun'
    },
    {
        video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        title: 'What care can you get for a grand?'
    }

  ];

  useEffect(() => {
    const uniqueCategories = [...new Set(videosList.map(item => item.title))];
    setCategories(uniqueCategories);
  }, [videosList]);

  const handleClick = (videoSrc, title) => {
    const mainVideo = document.querySelector('.main-video');
    const mainTitle = document.querySelector('.main-vid-title');

    mainVideo.src = videoSrc;
    mainTitle.innerHTML = title;

    mainVideo.play();
  };


  return (
    <div>    
    <div>
        <center>
            <h1 style={{"color":"white"}}>
                VIDEO HUB
            </h1>
        </center>
    </div>
    <div className="container">
      <div className="main-video-container">
        <video  src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"  autoPlay controls className="main-video"></video>
        
        <h1 className="main-vid-title">Big Buck Bunny</h1>
      </div>
      <div className="video-list-container">
        {categories.map((category, index) => (
          <div className="list active" key={index} onClick={() => handleClick(videosList[index].video, videosList[index].title)}>
            <video   src={videosList[index].video} className="list-video"></video>
          
            <h1 className="list-title">{category}</h1>
          </div>
        ))}
      </div>
      
    </div>
    </div>
  );
};

export default VideosList;
