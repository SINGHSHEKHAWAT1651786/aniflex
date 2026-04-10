
import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
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
                <input type="text" className="border px-2 w-1/2 border border-gray-400 p-2 rounded-l-full" />
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