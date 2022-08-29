import React, { useEffect, useState } from "react";
import classes from "../components/Orders.module.css";
import { useStateValue } from "../dataModel/Stateprovider";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState();

  useEffect(() => {
    console.log('fun call');
    if (user) {
      console.log('if part');
     const fetchData=async()=>{
      const querySnapshot = await getDocs(collection(db, "users"));
      setOrders(querySnapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
     }
     fetchData();
    } else {
      setOrders([]);
    }
   
  }, [user]);
  console.log('Orders',orders);
  
  return <div className={classes.orders}>
    <h1>Your Orders</h1>
    <div className={classes.orders__order}>
    {orders?.map(order=>(
      <Order order={order}/>
    ))}
    </div>
  </div>; 
}

export default Orders;
