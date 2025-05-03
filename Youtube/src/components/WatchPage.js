import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/NavSlice";
import Comments from "./Comments";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch closeMenu action immediately when component mounts
    dispatch(closeMenu());
  }, [dispatch]); // Ensures this only runs once when the component mounts

  return (
    <div style={styles.pageContainer}>
      <div style={styles.contentContainer}>
        <div style={styles.videoContainer}>
          <iframe
            width="800"
            height="450"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={styles.videoIframe}
          ></iframe>
        </div>

        <div style={styles.liveChatContainer}>
          <LiveChat />
        </div>
      </div>

      <div style={styles.commentsContainer}>
        <Comments />
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },
  videoContainer: {
    flex: 1,
  },
  videoIframe: {
    borderRadius: "12px",
    border: "2px solid #ddd",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  },
  liveChatContainer: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "400px",
  },
  commentsContainer: {
    width: "100%",
    maxWidth: "1200px",
    overflowY: "scroll",
    backgroundColor: "#fff",
    marginTop: "20px",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxHeight: "600px",
  },
};

export default WatchPage;
