const ChatMessage = ( {name, message}) => {
    return(
        <div className="flex items-center shadow-sm">
            <div className="col-span-1 flex items-center justify-start" alt="user">
        <i className="fa-solid fa-user text-1xl"></i>
          <span className="font-bold px-1">{name}</span>
      <span className="px-4">{message}</span>
      </div>
    
        </div>
    );
};
export default ChatMessage;