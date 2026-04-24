
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    useEffect(()=> {
//APIs Call
console.log(searchQuery);
//make an apis call after key press
// but if the difference between 2 APIs call <200ms 
//decline the APIs call
   const timer = setTimeout(()=>getSearchSuggestions(), 200);
       return () => {
clearTimeout(timer);
       };
    }, [searchQuery]);

    /** 
     * key -i
     * - render the component
     * - useEffect();
     * - start timer => make apis call after 200ms
     *   
     * key-ip
     * -destory the component, also call return useffect
     * - re-render the component
     * - useEffect();
     * - start timer => new timer => make apis call after 200ms 
    */
    const getSearchSuggestions = async () => {
        console.log(searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        console.log(json[1]); 
    }
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };
    return(
        <div className="grid grid-flow-col p-4 m-2 shadow-lg cursor-pointer">
            
            <div className="flex col-span-1">
                <i onClick={() => toggleMenuHandler()} 
                className="fa-solid fa-bars text-2xl"></i>
                <a href="/">
                <img 
                    alt='logo' 
                    className="w-10 h-8 mx-2"
                    src='C:\Users\dell\Desktop\Aniflex\aniflex\public\logo192.png'
                />
                </a>
            </div>
       
            <div className="col-span-10 px-10">
                <input type="text" className="px-2 w-1/2 border border-gray-400 p-2 rounded-l-full" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <button className="border border-gray-400 px-5 p-2 rounded-r-full bg-gray-100 ">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div> 
       
            <div className="col-span-1">
                <i className="fa-solid fa-user text-2xl"></i>
            </div>
   
        </div>
    );
};

export default Head;