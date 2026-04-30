import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
const LiveChat = () => {
    useEffect(()=>{
      const i = setInterval(()=>{
        //API Polling
        console.log("APIs Polling");
 return() => clearInterval(i);
        }, 2000);
    }, []);
    return(
        <div className="w-80 h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg">
        <ChatMessage name="Amin Joy" message="First one that comment " />
        <ChatMessage name="Amin Joy" message="First one that comment " />
        <ChatMessage name="Amin Joy" message="First one that comment " />
        <ChatMessage name="Amin Joy" message="First one that comment " />
        <ChatMessage name="Amin Joy" message="First one that comment " />
        <ChatMessage name="Amin Joy" message="First one that comment " />
        <ChatMessage name="Amin Joy" message="First one that comment " />
        <ChatMessage name="Amin Joy" message="First one that comment " />
        </div>
    
    );
};
export default LiveChat;