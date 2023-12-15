import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increasePoints } from "../reducers/recycle";
import "../styles/addItem.css";
import { LuBadgeCheck } from "react-icons/lu";
import plasticBottles from "../../public/plastic-bottles.webp";
import batteries from "../../public/batteries.webp";
import glassBottles from "../../public/glassbottles.webp";
import metalCans from "../../public/metal-cans.webp";
import paper from "../../public/paper.webp";
import greenBin from "../../public/green-bin.webp";
import { useLocation } from 'react-router-dom';

export const ItemSelector = () => {

  
  const itemsObjList = {
    plastic: {
      id: 1,
      name: "plastic",
      img: plasticBottles,
      point: 10,
    },
    metal: { 
      id: 2,
      name: "metal",
      img: metalCans,
      point: 8,
    },
    glass: {
      id: 3,
      name: "glass",
      img: glassBottles,
      point: 7,
    },
    paper: {
      id: 4,
      name: "paper",
      img: paper,
      point: 6,
    },
    battery: {
      id: 5,
      name: "battery",
      img: batteries,
      point: 6,
    },
  }

  const location = useLocation();
  const challengeItemId = location?.state?.itemId;
  const challengeNumberOfItems = location?.state?.numberOfItems;
  const challengePoint = location?.state?.challengePoint;
  
  const [selectedItem, setSelectedItem] = useState({});
  const [selectedItems, setSelectedItems] = useState(challengeItemId ? Array.from({ length: challengeNumberOfItems }, () => (
    itemsObjList[challengeItemId]
  )): []);


  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.recycle.loginUser);

  const handleSelectChange = (event) => {
    if(event.target.value) {
      setSelectedItem(itemsObjList[event.target.value]);
    } else{
      setSelectedItem({});
    }

  };

  const handleSubmit = () => {
    let totalPoints = 0;

    if (challengeItemId) {
      const selectedChallengeItems = selectedItems.filter(item => item.name === challengeItemId);
      if (selectedChallengeItems.length === challengeNumberOfItems) {
        totalPoints = challengePoint;
        alert(`You have completed this daily challenge and earned ${challengePoint} extra points`);
      }
    }

    totalPoints += selectedItems.reduce(
      (accumulator, currentItem) => accumulator + currentItem.point, 0
    );
    dispatch(increasePoints({ userName: loginUser, pointsToAdd: totalPoints}));
    setSelectedItems([]);
    
  };
  const handleAddItem = () => {
    if (Object.keys(selectedItem).length > 0) {
      setSelectedItems((prevItems) => [...prevItems, selectedItem]);
      console.log(selectedItems);
      setSelectedItem({});
    }
  };

  return (
    <div className="item-selector-container">
      <div className="selectedItem-img-items-container">
        <div className="material-img">
          <img alt={selectedItem.name} src={selectedItem.img || greenBin}/>
        </div>
        <div className="selectedItem-container">
          <label htmlFor="itemSelect">Choose an item:</label>
          <select
            id="itemSelect"
            //value={selectedItem.name}
            onChange={handleSelectChange}
          >
            <option value="" selected={!selectedItem.name}>Select an item</option>
            {Object.values(itemsObjList).map((item) => (
              <option key={item.id} value={item.name}>{item.name}</option>
            ))}
          </select>
          {selectedItem && Object.keys(selectedItem).length > 0 
          // && (
          //   <p className="selected-item">You selected: {selectedItem.name}</p>)
          }
          <button className="add-items-btn" onClick={handleAddItem} disabled={!selectedItem}>
            Add
          </button>
        </div>
      </div>
      <div className="selected-items-container">
        <h2>Selected Items List</h2>
        <p>🚮</p>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}><div className="li-item-name"><LuBadgeCheck /> {item.name}</div><div className="li-item-points">+ {item.point} points</div></li>
          ))}
        </ul>
        <button className="submit-btn" onClick={handleSubmit} disabled={!selectedItems.length}>
          submit
        </button>
      </div>
    </div>
  );
};
