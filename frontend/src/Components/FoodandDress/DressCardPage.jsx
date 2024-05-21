import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DressCard from './DressCard';
import './DressCardPage.css';

const DressCardPage = ({ cartItems, addToCart, removeFromCart }) => {
  const [dresses, setDresses] = useState([]);

  useEffect(() => {
    const fetchDresses = async () => {
      try {
        const menResponse = await axios.get('http://localhost:5000/api/men-dresses');
        const womenResponse = await axios.get('http://localhost:5000/api/women-dresses');
        setDresses([...menResponse.data, ...womenResponse.data]);
      } catch (error) {
        console.error('Error fetching dresses:', error);
      }
    };

    fetchDresses();
  }, []);

  return (
    <div className="dress-card-page">
      <h1>Shop Dresses</h1>
      <section className="dress-section">
        <div className="dress-card-container">
          {dresses.map((dress) => (
            <DressCard
              key={dress._id}
              dress={dress}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isAddedToCart={cartItems.some((item) => item._id === dress._id)}
            />
          ))}
        </div>
      </section>
      {/* <Link to="/cart-summary">
        <button>View Cart Summary</button>
      </Link> */}
    </div>
  );
};

export default DressCardPage;
