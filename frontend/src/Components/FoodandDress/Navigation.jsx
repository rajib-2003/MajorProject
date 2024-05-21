import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import DressCardPage from './DressCardPage';
import FoodCardPage from './FoodCardPage';
import PlaceCardPage from './PlaceCardPage';
import AndhraPradesh from './AndhraPradesh';

function Navigation({ foodCartItems, dressCartItems, addToFoodCart, removeFromFoodCart, addToDressCart, removeFromDressCart }) {
  const [activeTab, setActiveTab] = useState('State');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <nav>
        <ul>
          <li className={activeTab === 'State' ? 'active' : ''} onClick={() => handleTabChange('State')}>State</li>
          <li className={activeTab === 'Dress' ? 'active' : ''} onClick={() => handleTabChange('Dress')}>Dress</li>
          <li className={activeTab === 'Food' ? 'active' : ''} onClick={() => handleTabChange('Food')}>Food</li>
          <li className={activeTab === 'Place' ? 'active' : ''} onClick={() => handleTabChange('Place')}>Place</li>
        </ul>
      </nav>
      <div className="content">
        {activeTab === 'State' && <AndhraPradesh />}
        {activeTab === 'Dress' && (
          <DressCardPage
            cartItems={dressCartItems}
            addToCart={addToDressCart}
            removeFromCart={removeFromDressCart}
          />
        )}
        {activeTab === 'Food' && (
          <FoodCardPage
            cartItems={foodCartItems}
            addToCart={addToFoodCart}
            removeFromCart={removeFromFoodCart}
          />
        )}
        {activeTab === 'Place' && <PlaceCardPage />}
      </div>
      {/* <div className="cart-link">
        <Link to="/cart-summary" className="btn btn-primary">
          View Cart
        </Link>
      </div> */}
    </div>
  );
}

export default Navigation;
