import React from 'react';

const Navbar = ({ title, bgColor }) => {
  const navbarStyle = {
    backgroundColor: bgColor,
    padding: '10px 20px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1000px',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  return (
    <div style={navbarStyle}>
      <div style={titleStyle}>{title}</div>
      {/* You can add other navbar items here */}
    </div>
  );
};

export default Navbar;
