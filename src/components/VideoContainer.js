import React, { useEffect } from "react";
const VideoContainer =() => {
    useEffect(()=>{
        getVideos();
    }, []);
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_API_URL);
        const json = await data.json();
        console.log();

    };
    
    return <div>Video Container</div>
    
};

export default VideoContainer;
