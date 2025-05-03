import React from 'react';
import Button from './Button';

const ButtonList = () => {
  return (
    <div style={styles.buttonList}>
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Fun" />
      <Button name="Movie" />
      <Button name="Games" />
      <Button name="Posted Recently" />
    </div>
  );
};

const styles = {
  buttonList: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',  // Allow the buttons to wrap on smaller screens
    justifyContent: 'flex-start',
    margin: '20px 0',  // Add spacing above and below
  }
};

export default ButtonList;
