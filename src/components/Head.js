import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API, GOOGLE_API_KEY } from "../utils/contants";
import {cacheResults} from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
if(searchCache[searchQuery]) {
  setSuggestions(searchCache[searchQuery]);
}else {
  getSearchSuggestions();
}
    }, 200);
   

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(
        YOUTUBE_SEARCH_API + searchQuery + "&key=" + GOOGLE_API_KEY
      );

      const json = await data.json();

      setSuggestions(json?.items || []);
    } catch (error) {
      console.error("API Error:", error);
    }
    //Update cache
    dispatch(cacheResults({
      [searchQuery] : json[1]
    }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      
      {/* LEFT SECTION */}
      <div className="flex col-span-1 items-center">
        <i
          onClick={toggleMenuHandler}
          className="fa-solid fa-bars text-2xl cursor-pointer"
        ></i>

        <a href="/">
          <img
            alt="logo"
            className="w-10 h-8 mx-2"
            src="/logo192.png"
          />
        </a>
      </div>

      {/* SEARCH SECTION */}
      <div className="col-span-10 px-10 relative">
        <div>
          <input
            type="text"
            className="px-3 w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
 
            onFocus={() => setShowSuggestions(true)}

            // HIDE 
            onBlur={() => setShowSuggestions(false)}

            placeholder="Search..."
          />

          <button className="border border-gray-400 px-5 p-2 rounded-r-full bg-gray-100">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {/*  Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute bg-white py-2 px-5 w-1/2 shadow-lg rounded-lg">
            <ul>
              {suggestions.map((item) => (
                <li
                  key={item?.etag} // ✅ safer unique key
                  className="flex items-center gap-3 py-2 px-2 hover:bg-gray-100 cursor-pointer"
                >
                  <i className="fa-solid fa-magnifying-glass text-gray-500"></i>

                  <span className="text-sm">
                    {item?.snippet?.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* RIGHT SECTION */}
      <div className="col-span-1 flex items-center justify-end">
        <i className="fa-solid fa-user text-2xl"></i>
      </div>
    </div>
  );
};

export default Head;