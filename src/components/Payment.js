import React, { useEffect, useState } from "react";
import classes from "../components/Payment.module.css";
import { useStateValue } from "../dataModel/Stateprovider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../dataModel/reducer.js";
import axios from "axios";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 

function Payment(props) {
  const [{ basket, user }, dispatch] = useStateValue();
  const basketTotal = basket?.length;
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stripe expects the total in a currencies subunits
        // url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
        url: `http://localhost:5001/clone-5f0f0/us-central1/api/payments/create?total=${
          getBasketTotal(basket) * 100
        }`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("client secret", clientSecret);

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(async({ paymentIntent }) => {
        console.log('Amount');
        console.log(paymentIntent.amount);
        //paymentIntent = payment confirmation

        //  setDoc(doc(db,"users",user?.uid),{
        //   basket:basket,
        //   amount:paymentIntent.amount,
        //   created:paymentIntent.created
        // })
        console.log('Add Data');
        await addDoc(collection(db, "users"), {
          basket:basket,
          amount:paymentIntent.amount,
          created:paymentIntent.created
        });
        // db.collection("users")
        //   .doc(user?.uid)
        //   .collection("orders")
        //   .doc(paymentIntent.id)
        //   .set({
        //     basket: basket,
        //     amount: paymentIntent.amount,
        //     created: paymentIntent.created,
        //   });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        // navigate.replace("/orders");
        navigate("/orders", { replace: true });
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className={classes.payment}>
      <div className={classes.payment__container}>
        <h1>
          Checkout(<Link to="/checkout">{basketTotal} items</Link>)
        </h1>
        <div className={classes.payment__section}>
          <div className={classes.payment__title}>
            <h3>Delivery Address</h3>
          </div>
          <div className={classes.payment__address}>
            <p>{user?.email}</p>
            <p>Address Line 1</p>
            <p>Address Line 2</p>
          </div>
          <div className={classes.payment__title}>
            <h3>Review Items and Delivery</h3>
          </div>
          <div className={classes.payment__items}>
            {basket.map((item) => (
              <CheckoutProduct
                key={Math.random()}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className={classes.payment__section}>
          <div className={classes.payment__title}>
            <h3>Payment Method</h3>
          </div>
          <div className={classes.payment__details}>
            <form onSubmit={formSubmitHandler}>
              <CardElement onChange={handleChange} />
              <div className={classes.payment__priceContainer}>
                <h3>₹{getBasketTotal(basket)}</h3>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
