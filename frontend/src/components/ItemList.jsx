import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ItemList.css';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/items')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the items!', error);
      });
  }, []);

  return (
    <div className="item-list">
      {items.map(item => (
        <div key={item._id} className="item-card">
          
          <img src={`http://localhost:3000${item.image}`} alt={item.name} />

          <h3>{item.name}</h3>
          <p><strong>Price:</strong> ${item.price}</p>
          <p><strong>Warranty:</strong> {item.warranty}</p>
          <p>{item.description}</p>
          <button className='add-btn'>ADD</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
