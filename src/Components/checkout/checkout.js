import React from "react";
import { useStateValue } from "../../store/StateProvider";
import BasketItem from "../BasketItem";
import SubTotal from "../subtotal/subtotal";
import "./checkout.css";

function Checkout() {
  const [{ basket, user }, dispactch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://m.media-amazon.com/images/G/31/img21/Family/Pampers/Pampers_Aloe_1300x90px.jpg"
          alt="checkout"
          className="checkout__ad"
        />
        <div>
          <h1 className="checkout__title">Hello..! {user?.email}</h1>
          <h2 className="checkout__title">Your shopping cart</h2>
          {basket
            .sort((item, item2) => {
              return item.price > item2.price;
            })
            .map((item, ind) => (
              <BasketItem
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              ></BasketItem>
            ))}
        </div>
      </div>

      <div className="checkout__right">
        <SubTotal></SubTotal>
      </div>
    </div>
  );
}

export default Checkout;
