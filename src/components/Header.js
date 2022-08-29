import React from "react";
import classes from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../dataModel/Stateprovider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(user);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <img
          className={classes.header__logo}
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon_Logo"
        />
      </Link>
      <div className={classes.header__search}>
        <input type="text" className={classes.header__searchInput} />
        <SearchIcon className={classes.header__searchIcon} />
      </div>
      <nav className={classes.header__nav}>
        <Link to={!user && "/login"}>
          <div
            onClick={handleAuthentication}
            className={classes.header__option}
          >
            <span className={classes.header__optionLine1}>Hello</span>
            <span className={classes.header__optionLine2}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className={classes.header__option}>
            <span className={classes.header__optionLine1}>Returns</span>
            <span className={classes.header__optionLine2}>& Orders</span>
          </div>
        </Link>
        <div className={classes.header__option}>
          <span className={classes.header__optionLine1}>Your</span>
          <span className={classes.header__optionLine2}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className={classes.header__optionBasket}>
            <ShoppingBasketIcon />
            <span
              className={`${classes.header__optionLine2} ${classes.header__basketCount}`}
            >
              {basket.length}
            </span>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
