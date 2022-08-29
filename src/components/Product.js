import React from "react";
import classes from "./Product.module.css";
import { useStateValue } from "../dataModel/Stateprovider";

function Product(props) {
  console.log(props);
  //very imp point - always declare both the state and dispatch variables, otherwise it will throw error: dispatch id not a function
const[state,dispatch]=useStateValue();
  console.log(dispatch);

  const addToBasketHandler = () => {
    //dispatch the item into the data layer
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:props.id,
        title:props.title,
        image:props.image,
        rating:props.rating,
        price:props.price
      }
    });
  };

  return (
    <div className={classes.product}>
      <div className={classes.product__info}>
        <p>{props.title}</p>
        <p className={classes.product__price}>
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
        <div className={classes.product__rating}>
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p key={Math.random()}>⭐</p>
            ))}
        </div>
      </div>
      <img src={props.image} alt="Product__Image" />
      <button onClick={addToBasketHandler}>Add to Basket</button>
    </div>
  );
}

export default Product;
