import React from "react";
import classes from "./Subtotal.module.css";
import { useStateValue } from "../dataModel/Stateprovider";
import { getBasketTotal } from "../dataModel/reducer.js";
import { useNavigate } from "react-router-dom";


function Subtotal() {
  const navigate=useNavigate();
  const [{ basket }] = useStateValue();
  return (
    <div className={classes.subtotal}>
      <p>
        Subtotal({basket.length} items):
        <strong>₹{getBasketTotal(basket)}</strong>
      </p>
      <small className={classes.subtotal__gift}>
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button onClick={e=>navigate('/payment',{replace:true})}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
