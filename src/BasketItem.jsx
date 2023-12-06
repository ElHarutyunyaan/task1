import React from "react";

export const BasketItem = ({
  toggleComplete,
  item,
  handleQuantityDecrease,
  handleQuantityIncrease,
  index,
}) => {
  return (
    <div className="item-container">
      <div className="item-name">
        <span>
          <input
            type="checkbox"
            name=""
            id=""
            className="checkbox"
            checked={item.isSelected}
            onChange={() => toggleComplete(index)}
          />
          {item.itemName}
        </span>
      </div>
      <div className="quantity">
        <button onClick={() => handleQuantityDecrease(index)}>{"<"}</button>
        <span> {item.quantity} </span>
        <button onClick={() => handleQuantityIncrease(index)}>{">"}</button>
      </div>
    </div>
  );
};
