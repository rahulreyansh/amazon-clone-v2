import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./dataModel/Stateprovider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51LbLkQSAO6jyxvsAdtAer0iS4Kmxljg9UMfHa5Fr4OanG70Kjy5mlMlfWTYBZfD2TkGNQdMlf47VIwcUNw4hifnr00vf3IaWPj"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        ></Route>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        ></Route>
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
