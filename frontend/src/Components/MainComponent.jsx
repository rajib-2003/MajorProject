// MainComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainComponent = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/cards');
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  return (
    <div className="container mt-5">
      <Form fetchCards={fetchCards} />
      <div className="row mt-3">
        {cards.map(card => (
          <div key={card._id} className="col-md-4 mb-4">
            <Card card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
