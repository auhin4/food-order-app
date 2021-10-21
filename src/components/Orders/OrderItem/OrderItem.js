import React from "react";
import classes from "./OrderItem.module.css";

const OrderItem = (props) => {
  const calculateTotalCost = () => {
    let totalCost = 0;
    let orderedItemsArray = [...props.orderedItems];

    orderedItemsArray.forEach(
      (orderedItem) => (totalCost += orderedItem.price * orderedItem.amount)
    );

    totalCost = `$${totalCost.toFixed(2)}`;

    return totalCost;
  };

  return (
    <li className={classes.order}>
      <div>
        <h3>{props.user.name}</h3>
        <div className={classes.id}>Order ID: {props.id}</div>
        <div className={classes.address}>Address:</div>
        <div className={classes.description}>{props.user.street}</div>
        <div className={classes.description}>
          {props.user.city} {props.user.postalCode}
        </div>
        <div className={classes.price}>
          Total Items: {props.orderedItems.length} | Total Cost:{" "}
          {calculateTotalCost()}
        </div>
      </div>
      <div></div>
    </li>
  );
};

export default OrderItem;
