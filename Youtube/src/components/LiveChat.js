import React, { useEffect, useState } from "react";
import ChatMsg from "./ChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generate, generateRandomMessage } from "../Utils/helper";

const LiveChat = () => {
    const [liveMsg,setliveMsg]=useState("");
  const dispatch = useDispatch();
  const chatMsg = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
    <div
      style={{
        width: "350px",
        height: "450px",
        display: "flex",
        flexDirection: "column-reverse",
        background: "#ffffff",
        borderRadius: "10px",
        padding: "10px",
        overflowY: "scroll",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        border: "1px solid #ddd",
      }}
    >
      

      {chatMsg &&
        chatMsg.map((c, ind) => (
          <ChatMsg key={ind} name={c.name} message={c.message} />
        ))}
        </div>

         <div>
            <form onSubmit={(e)=>
            {e.preventDefault();
                dispatch(addMessage({
                    name:"keerthu",
                    message:liveMsg
                }));
                setliveMsg("")
            }
            }>
        <input type="text"  value={liveMsg}  onChange={(e)=>{
            setliveMsg(e.target.value)
        }}/>
        <button>send</button>
        </form>
    </div>
    {/* </div> */}
   
    </>
  );
};

export default LiveChat;
