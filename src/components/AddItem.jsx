import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increasePoints } from "../reducers/recycle";
import "../styles/addItem.css";

export const ItemSelector = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.recycle.loginUser);

  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleSubmit = () => {
      // Dispatch the increasePoints action to add 10 points
      dispatch(increasePoints({ userName: loginUser, pointsToAdd: selectedItems.length*10 }));
      // console.log (loginUser);
      setSelectedItems([]);
    
  };
  const handleAddItem = () => {
    if (selectedItem) {
      setSelectedItems((prevItems) => [...prevItems, selectedItem]);
      setSelectedItem("");
    }
  };

  return (
    <div className="item-selector-container">
      <label htmlFor="itemSelect">Choose an item:</label>
      <select
        id="itemSelect"
        value={selectedItem}
        onChange={handleSelectChange}
      >
        <option value="">Select an item</option>
        <option value="plastic">Plastic</option>
        <option value="metal">Metal</option>
        <option value="paper">Paper</option>
        <option value="glass">glass</option>
        <option value="other2">Battery</option>
        <option value="other2">Textil</option>
      </select>

      {selectedItem && (
        <p className="selected-item">You selected: {selectedItem}</p>
      )}

      <button className="add-items-btn" onClick={handleAddItem} disabled={!selectedItem}>
        Add
      </button>
      <div className="selected-items-container">
        <h2>Selected Items:</h2>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button className="submit-btn" onClick={handleSubmit} disabled={!selectedItems.length}>
          submit
        </button>
      </div>
    </div>
  );
};
