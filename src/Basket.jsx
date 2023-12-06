import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { BasketItem } from "./BasketItem";
import { itemsData } from "./ItemsData";

export const Basket = () => {
  const [items, setItems] = useState(itemsData);
  const [inputValue, setInputValue] = useState("");
  const [totalItemCount, setTotalItemCount] = useState(
    itemsData.reduce((acc, item) => acc + item.quantity, 0)
  );

  const handleAddButtonClick = () => {
    const newItem = {
      id: Date.now(),
      itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setInputValue("");
    calculateTotal();
  };

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
    calculateTotal();
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity === 0) {
      return;
    } else {
      newItems[index].quantity--;
    }
    setItems(newItems);
    calculateTotal();
  };

  const toggleComplete = (index) => {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
    calculateTotal();
  };

  const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + (item.isSelected ? item.quantity : 0);
    }, 0);
    setTotalItemCount(totalItemCount);
  };

  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="add-item-input"
            placeholder="Add an item..."
          />
          <button onClick={handleAddButtonClick}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <BasketItem
              key={item.id}
              item={item}
              handleQuantityIncrease={handleQuantityIncrease}
              handleQuantityDecrease={handleQuantityDecrease}
              toggleComplete={toggleComplete}
              index={index}
            />
          ))}
        </div>
        <div className="total">Total: {totalItemCount}</div>
      </div>
    </div>
  );
};
