import React from "react";

const VideoCard = ({ info }) => {
    console.log(info);
    const { snippet, statistics } = info;
    if (!snippet) return null;

    const { channelTitle, title, thumbnails } = snippet;
    const viewCount = statistics?.viewCount ?? "N/A";

    return (
        <div className="p-2 m-2 w-72 shadow-lg">
            <img className="rounded-lg" alt="thumbnail" src={thumbnails?.medium?.url} />
            <ul>
                <li className="font-bol py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{viewCount} views</li>
            </ul>
        </div>
    );
};
//Higher Order function
export const AdVideoCard = ({ info }) => {
    return (
<div className="p-1 m-1 border border-grey-600"><VideoCard info={info}/></div>
    )
    
    
};


export default VideoCard;