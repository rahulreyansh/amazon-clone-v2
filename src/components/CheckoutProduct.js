import React from "react";
import { useStateValue } from "../dataModel/Stateprovider";
import classes from "./CheckoutProduct.module.css";

function CheckoutProduct(props) {
  console.log(props);
  const [state, dispatch] = useStateValue();
  const removeFromBasket = () => {
    console.log("fun call");
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };

  return (
    <div className={classes.checkoutProduct}>
      <img
        className={classes.checkoutProduct__image}
        src={props.image}
        alt="amazon_logo"
      />
      <div className={classes.checkoutProduct__info}>
        <p className={classes.checkoutProduct__title}>{props.title}</p>
        <p className={classes.checkoutProduct__price}>
          <small>₹</small>
          <small>{props.price}</small>
        </p>
        <div className={classes.checkoutProduct__rating}>
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p key={Math.random()}>⭐</p>
            ))}
        </div>
        {!props.hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
