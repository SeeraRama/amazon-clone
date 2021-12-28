import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../store/StateProvider";
import { signOutUser } from "../firebasefile";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
          alt="amazon logo"
        ></img>
      </Link>
      <div className="header__search">
        <input className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">
            {user ? user.email : ""}
          </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">&Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">your prime</span>
          {user ? (
            <div className="header__SignIn__SignOut">
              <span
                className="header__optionLineTwo"
                onClick={(e) => {
                  signOutUser();
                  navigate("/login");
                }}
              >
                Sign Out
              </span>
            </div>
          ) : (
            <Link className="header__SignIn__SignOut" to="/login">
              <span className="header__optionLineTwo">Signin</span>
            </Link>
          )}
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
