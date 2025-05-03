import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

  const sidebarStyle = {
    width: isMenuOpen ? "4000px" : "0px",
    height: "100%",
    backgroundColor: "#fafafa",  // Darker background for contrast
    padding: isMenuOpen ? "20px" : "0px",
    boxShadow: isMenuOpen ? "2px 0px 10px rgba(0, 0, 0, 0.2)" : "none",
    fontFamily: "Arial, sans-serif",
  
    transition: "all 0.3s ease",
    

    zIndex: "100",
    color: "#000",  // White text color for readability
  };

  return (
    <div style={sidebarStyle}>
      {isMenuOpen && (
        <>
          <div style={{ marginBottom: "30px" }}>
            <h2 style={styles.menuItem}>
              <Link to={"/"}>🏠 Home</Link>
            </h2>
            <h2 style={styles.menuItem}>🎬 Shorts</h2>
            <h2 style={styles.menuItem}>📂 Playlist</h2>
            <h2 style={styles.menuItem}>🙋‍♂️ You</h2>
          </div>

          <h3 style={styles.sectionTitle}>📁 Library</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>⏳ History</li>
            <li style={styles.listItem}>📜 Playlists</li>
            <li style={styles.listItem}>📹 Your Videos</li>
            <li style={styles.listItem}>⏰ Watch Later</li>
            <li style={styles.listItem}>👍 Liked Videos</li>
          </ul>

          <h3 style={styles.sectionTitle}>🔔 Subscriptions</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>🎵 Music</li>
            <li style={styles.listItem}>⚽ Sports</li>
            <li style={styles.listItem}>🎮 Gaming</li>
            <li style={styles.listItem}>🎥 Movies</li>
          </ul>
        </>
      )}
    </div>
  );
};

const styles = {
  menuItem: {
    fontSize: "18px",
    marginBottom: "10px",
    cursor: "pointer",
    padding: "8px",
    borderRadius: "8px",
    transition: "0.3s",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",  // Remove underlines
    color: "#333",  // White text
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#444",  // Light grey for section titles
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
    display: "flex",
    alignItems: "center",
    color: "#333",  // White text
  },
  listItemHover: {
    backgroundColor: "#444",  // Slightly darker background on hover
  },
};

export default Sidebar;
