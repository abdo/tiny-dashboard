import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        width: '100%',
        zIndex: -1,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#f0f0f0',
      }}
    >
      &#169; 2020 IDEX Limited
    </div>
  );
};

export default Footer;
