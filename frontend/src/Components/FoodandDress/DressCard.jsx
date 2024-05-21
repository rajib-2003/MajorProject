import React from 'react';
import './DressCard.css';

const DressCard = ({ dress, addToCart, removeFromCart, isAddedToCart }) => {
  const handleCartToggle = () => {
    if (isAddedToCart) {
      removeFromCart(dress);
    } else {
      addToCart(dress);
    }
  };

  return (
    <div className="dress-card">
      <div className="dress-image">
        <img src={dress.image} alt={dress.name} />
      </div>
      <div className="dress-details">
        <h3>{dress.name}</h3>
        <p>{dress.details}</p>
        <ul>
          <li>{dress.material}</li>
        </ul>
        <h5>{dress.origin}</h5>
      </div>
      <div className="dress-cart">
        <ul>
          <li>{dress.price}</li>
          <li>
            <del>{dress.actual_price}</del>
          </li>
          <li style={{ color: 'red' }}>{dress.discount}</li>
        </ul>
        <button onClick={handleCartToggle}>
          {isAddedToCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default DressCard;
