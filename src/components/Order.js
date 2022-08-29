import React from "react";
import classes from "./Order.module.css";
import CheckoutProduct from "./CheckoutProduct";
import moment from "moment-js";


function Order({ order }) {
  let dateString = moment.tz(order.data.created).format("MM/DD/YYYY");
  console.log(dateString);
  return (
    <div className={classes.order}>
      <h2>Order</h2>
      <p>{order.data.created}</p>
      <p className={classes.order__id}>
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          key={Math.random()}
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rating={item.rating}
          hideButton
        />
      ))}
      <h3 className={classes.order__total}>Order Total: {order.data.amount}</h3>
    </div>
  );
}

export default Order;
