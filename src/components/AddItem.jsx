import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increasePoints } from "../reducers/recycle";
import "../styles/addItem.css";

import plasticBottles from "../../public/plastic-bottles.jpeg";
import batteries from "../../public/batteries.jpeg";
import glassBottles from "../../public/glassbottles.jpeg";
import metalCans from "../../public/metal-cans.jpeg";
import paper from "../../public/paper.jpeg";

export const ItemSelector = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [materialImg, setMaterialImg] = useState("");

  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.recycle.loginUser);

  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
    // setMaterialImg(

    //   let imgUrl;
    //   switch(materialImg){
    //     case "plastic":
    //       imgUrl = plasticBottles;
    //       break;
    //     case "metal":
    //       imgUrl = metalCans;
    //       break;
    //     case "glass":
    //       imgUrl = glassBottles;
    //       break;
    //     case "paper":
    //       imgUrl = paper;
    //       break;
    //     case "batteries":
    //       imgUrl = batteries;
    //       break;
    //   }
    // )
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

  const itemsObjList = [
    {
    id: 1,
    name: "plastic",
    img: {plasticBottles},
    point: 10,
    },
    { 
      id: 2,
      name: "metal",
      img: {metalCans},
      point: 8,
    },
    {
      id: 3,
      name: "glass",
      img: {glassBottles},
      point: 7,
    },
    {
      id: 4,
      name: "paper",
      img: {paper},
      point: 6,
    },
    {
      id: 5,
      name: "batterie",
      img: {batteries},
      point: 6,
    },
]

  return (
    <div className="item-selector-container">
      <label htmlFor="itemSelect">Choose an item:</label>
      <select
        id="itemSelect"
        value={selectedItem}
        onChange={handleSelectChange}
      >
        <option value="">Select an item</option>
        {itemsObjList.map((item) => (
        <option key={item.id} value={item.name}>{item.name}</option>
        ))}

        {/* <option value="plastic">Plastic</option>
        <option value="metal">Metal</option>
        <option value="paper">Paper</option>
        <option value="glass">glass</option>
        <option value="other2">Battery</option>
        <option value="other2">Textil</option> */}
      </select>
      <div className="material-img">
        <img src={metalCans}/>
      </div>

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
