import React from 'react';
import './Food.css'; // Import CSS file for styling

const Foodcard = ({ food }) => {
  return (
    <div className="food-card" style={{ backgroundColor: food.color }}>
      <img src={food.image} alt={food.name} />
      <div className="food-details">
        <h3>{food.name}</h3>
        <p>{food.details}</p>
        <ul>
        <li>{food.price}</li>
        <li><del>{food.actual_price}</del></li>
        <li style={{color:"red"}}>{food.discount}</li>
        </ul>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

const Food = () => {
  const food = [
    {
      id: 1,
      name: 'Formal Suit',
      details: 'Tailored fit suit, perfect for formal occasions',
      price: '$199.99',
      actual_price:'$299',
      discount:'50%',
      image: '/images/food1.jpeg',
      color: '#333333'
    },
    {
      id: 2,
      name: 'Casual Shirt',
      details: 'Comfortable cotton shirt for everyday wear',
      price: '$49.99',
      actual_price:'$299',
      discount:'50%',
      image: '/images/food2.jpeg',
      color: '#3366FF'
    },
    {
      id: 3,
      name: 'Formal Suit',
      details: 'Tailored fit suit, perfect for formal occasions',
      price: '$199.99',
      actual_price:'$299',
      discount:'50%',
      image: '/images/food3.jpeg',
      color: '#333333'
    },
    {
      id: 4,
      name: 'Formal Suit',
      details: 'Tailored fit suit, perfect for formal occasions',
      price: '$199.99',
      actual_price:'$299',
      discount:'50%',
      image: '/images/food4.jpeg',
      color: '#333333'
    },
    {
      id: 5,
      name: 'Formal Suit',
      details: 'Tailored fit suit, perfect for formal occasions',
      price: '$199.99',
      actual_price:'$299',
      discount:'50%',
      image: '/images/food5.webp',
      color: '#333333'
    },
    {
      id: 6,
      name: 'Casual Shirt',
      details: 'Comfortable cotton shirt for everyday wear',
      price: '$49.99',
      actual_price:'$299',
      discount:'50%',
      image: '/images/food6.jpeg',
      color: '#3366FF'
    },
    {
      id: 7,
      name: 'Formal Suit',
      details: 'Tailored fit suit, perfect for formal occasions',
      price: '$199.99',
      actual_price:'$299',
      discount:'50%',
      image: '/images/food7.jpeg',
      color: '#333333'
    },
    {
      id: 8,
      name: 'Formal Suit',
      details: 'Tailored fit suit, perfect for formal occasions',
      price: '$199.99',
      actual_price:'$299',
      discount:'50%',
      image: '/images/food8.webp',
      color: '#333333'
    },
    {
      id: 8,
      name: 'Formal Suit',
      details: 'Tailored fit suit, perfect for formal occasions',
      price: '$199.99',
      actual_price:'$299',
      discount:'50%',
      image: '/images/food9.webp',
      color: '#333333'
    },
    {
      id: 8,
      name: 'Formal Suit',
      details: 'Tailored fit suit, perfect for formal occasions',
      price: '$199.99',
      actual_price:'$299',
      discount:'50%',
      image: '/images/food10.jpeg',
      color: '#333333'
    }
  ];

  


  return (
    <div className="food-card-page">
      <h1>Food Corner</h1>
      
      <section className='food-section'>
        <div className="food-card-container">
          {food.map(food => (
            <Foodcard key={food.id} food={food} />
          ))}
        </div>
      </section>

    </div>
  );
}

export default Food;
