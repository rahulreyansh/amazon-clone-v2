import React from "react";
import { useStateValue } from "../dataModel/Stateprovider";
import classes from "./Checkout.module.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const[{basket, user}]=useStateValue();
  return (
    <div className={classes.checkout}>
      <section className={classes.checkout__left}>
        <img
          className={classes.checkout__add}
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
          alt="Ad"
        />
        <h2>{user ? user.email : 'Hello Guest'}</h2>
        <h2 className={classes.checkout__title}>Your Shopping Basket</h2>
       {
        basket.map((item)=>(
            <CheckoutProduct key={Math.random()} id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating}/>
        ))
       }
      </section>
      <section className={classes.checkout__right}>
        <Subtotal />
      </section>
    </div>
  );
}

export default Checkout;
