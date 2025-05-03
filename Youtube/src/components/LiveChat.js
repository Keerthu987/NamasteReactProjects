import React, { useEffect, useState } from "react";
import ChatMsg from "./ChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generate, generateRandomMessage } from "../Utils/helper";

const LiveChat = () => {
  const [liveMsg, setliveMsg] = useState("");
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
  }, [dispatch]);

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

      <div style={{ marginTop: "15px", display: "flex", alignItems: "center" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "keerthu",
                message: liveMsg,
              })
            );
            setliveMsg("");
          }}
          style={{
            display: "flex",
            width: "100%",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          <input
            type="text"
            value={liveMsg}
            onChange={(e) => setliveMsg(e.target.value)}
            placeholder="Type a message..."
            style={styles.input}
          />
          <button
            type="submit"
            style={styles.sendButton}
            disabled={!liveMsg}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

const styles = {
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "14px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    outline: "none",
    transition: "border 0.3s ease",
    color: "#333",
    backgroundColor: "#f9f9f9",
  },
  sendButton: {
    padding: "10px 15px",
    backgroundColor: "#0066cc",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    opacity: 0.7,
  },
};

export default LiveChat;
