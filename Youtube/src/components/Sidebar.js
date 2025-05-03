import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen=useSelector((store)=>store.nav.isMenuOpen);

    if(!isMenuOpen) return null;
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "white",
        padding: "20px",
        boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navigation Links */}
      <div style={{ marginBottom: "30px" }}>
        <h2 style={styles.menuItem}>
        <Link to={"/"}> 🏠 Home</Link> 
          </h2>
        <h2 style={styles.menuItem}>🎬 Shorts</h2>
        <h2 style={styles.menuItem}>📂 Playlist</h2>
        <h2 style={styles.menuItem}>🙋‍♂️ You</h2>
      </div>

      {/* Library Section */}
      <h3 style={styles.sectionTitle}>📁 Library</h3>
      <ul style={styles.list}>
        <li style={styles.listItem}>⏳ History</li>
        <li style={styles.listItem}>📜 Playlists</li>
        <li style={styles.listItem}>📹 Your Videos</li>
        <li style={styles.listItem}>⏰ Watch Later</li>
        <li style={styles.listItem}>👍 Liked Videos</li>
      </ul>

      {/* Subscriptions Section */}
      <h3 style={styles.sectionTitle}>🔔 Subscriptions</h3>
      <ul style={styles.list}>
        <li style={styles.listItem}>🎵 Music</li>
        <li style={styles.listItem}>⚽ Sports</li>
        <li style={styles.listItem}>🎮 Gaming</li>
        <li style={styles.listItem}>🎥 Movies</li>
      </ul>
    </div>
  );
};

// Styles
const styles = {
  menuItem: {
    fontSize: "18px",
    marginBottom: "10px",
    cursor: "pointer",
    padding: "8px",
    borderRadius: "8px",
    transition: "0.3s",
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#606060",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    fontSize: "16px",
    marginBottom: "10px",
    cursor: "pointer",
    padding: "8px",
    borderRadius: "8px",
    transition: "0.3s",
  },
};

export default Sidebar;
