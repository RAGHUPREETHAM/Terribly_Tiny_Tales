import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, size, bgColor, iconColor, text, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        marginRight: '12px',
        padding: '8px', 
        cursor: 'pointer'
      }}
    >
      <div
        style={{
          backgroundColor: bgColor, 
          border: '1px solid white', 
          borderRadius: '50%', 
          padding: '8px', 
          marginRight: '4px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FontAwesomeIcon icon={icon} size={size} color={iconColor} />
      </div>
      <span style={{ color: 'black' }}>{text}</span>
    </div>
  );
};

export default Icon;
