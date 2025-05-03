import React from 'react';

const Button = ({ name }) => {
  return (
    <div>
      <button style={styles.button}>{name}</button>
    </div>
  );
};

const styles = {
  button: {
    padding: '12px 24px',  // Increased padding for better spacing
    fontSize: '14px',  // Adjust font size for readability
    fontWeight: '600',  // Bold font weight for emphasis
    color: '#888',  // White text for good contrast
    backgroundColor: '#fafafa',  // Professional blue color
    border: 'none',  // Remove default border
    borderRadius: '30px',  // Rounded corners for a smooth look
    cursor: 'pointer',  // Pointer cursor on hover
    transition: 'all 0.3s ease',  // Smooth transition for hover effects
    textTransform: 'uppercase',  // Uppercase text for consistency
    letterSpacing: '0.5px',  // Slight spacing between letters for clarity
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  // Light shadow for depth
    outline: 'none',  // Remove focus outline for a cleaner look
    minWidth: '160px',  // Ensure buttons have consistent width
    display: 'inline-block',
    textAlign: 'center',
    marginBottom: '10px',  // Space between buttons if stacked
  },
  buttonHover: {
    backgroundColor: '#444',  // Darken background on hover
    transform: 'scale(1.05)',  // Slight scale effect on hover
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',  // Darker shadow on hover
  },
};

export default Button;

