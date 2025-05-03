import React from "react";

const ChatMsg = ({ name, message }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "8px",
        background: "#f1f1f1",
        borderRadius: "8px",
        marginBottom: "5px",
        transition: "0.3s",
        border: "1px solid #ddd",
      }}
    >
      <img
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          marginRight: "10px",
        }}
        src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid"
        alt="avatar"
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "14px",
            color: "#333",
            marginBottom: "2px",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontSize: "13px",
            color: "#555",
          }}
        >
          {message}
        </span>
      </div>
    </div>
  );
};

export default ChatMsg;


