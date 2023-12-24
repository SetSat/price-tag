// App.js

import React from 'react';
import PriceCard from './PriceCard';


const App = () => {
  const priceCardsData = [
    {
      type: 'Free',
      price: '$0',
      features: ['Basic feature 1', 'Basic feature 2', 'Basic feature 3'],
    },
    {
      type: 'Plus',
      price: '$9.99/month',
      features: ['All Free', 'Plus feature 1', 'Plus feature 2'],
    },
    {
      type: 'Pro',
      price: '$19.99/month',
      features: ['All Plus', 'Pro feature 1', 'Pro feature 2'],
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {priceCardsData.map((data, index) => (
          <div className="col-md-4" key={index}>
            <PriceCard {...data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
