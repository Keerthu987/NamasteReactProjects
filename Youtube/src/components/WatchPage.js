import React from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/NavSlice";
import Comments from "./Comments";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useDispatch(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        background: "#f4f4f4",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "start",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <iframe
          width="800"
          height="450"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            borderRadius: "10px",
            border: "2px solid #ddd",
          }}
        ></iframe>

        <LiveChat />
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          overflowY: "scroll",
          background: "#fff",
          marginTop: "20px",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Comments />
      </div>
    </div>
  );
};

export default WatchPage;

