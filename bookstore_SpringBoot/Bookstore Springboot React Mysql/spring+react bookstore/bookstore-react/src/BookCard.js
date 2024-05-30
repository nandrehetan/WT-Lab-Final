// BookCard.js

import React from 'react';

function BookCard({ bookName, price, description, category }) {
  return (
    <div style={styles.card}>
      <h3>{bookName}</h3>
      <p><strong>Price:</strong> ${price}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Category:</strong> {category}</p>
    </div>
  );
}

export default BookCard;

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
  },
  hover: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transform: 'translateY(-2px)',
  },
};

// Apply hover effect using className
// In the JSX element, add a className based on whether it's hovered or not.
// You can use onMouseEnter and onMouseLeave event handlers to toggle the class.

// Example:
// <div style={{ ...styles.card, ...(isHovered ? styles.hover : null) }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
//   {/* Card content */}
// </div>
