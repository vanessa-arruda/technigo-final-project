// ItemSelector.jsx
import React, { useState } from 'react';
import '../styles/addItem.css';

export const ItemSelector = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedItem) {
      setSelectedItems((prevItems) => [...prevItems, selectedItem]);
      setSelectedItem('');
    }
  };

  return (
    <div className="item-selector-container">
      <label htmlFor="itemSelect">Choose an item:</label>
      <select id="itemSelect" value={selectedItem} onChange={handleSelectChange}>
        <option value="">Select an item</option>
        <option value="plastic">Plastic</option>
        <option value="metal">Metal</option>
        <option value="paper">Paper</option>
        <option value="other1">Other 1</option>
        <option value="other2">Other 2</option>
      </select>

      {selectedItem && (
        <p className="selected-item">You selected: {selectedItem}</p>
      )}

      <button onClick={handleSubmit} disabled={!selectedItem}>
        Submit
      </button>

      <div className="selected-items-container">
        <h2>Selected Items:</h2>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
