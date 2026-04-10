import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early return pattern
  if(!isMenuOpen) return null;
  return (
    <div className="p-4 shadow-lg w-48">
         <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
        <li>News</li>
      </ul>
      <h2 className="font-bold pt-5">Subscriber</h2>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>News</li>
      </ul>
      <h2 className="font-bold pt-5">Watch Later</h2>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default Sidebar;