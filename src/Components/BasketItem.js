import React from "react";
import "./BasketItem.css";
import { useStateValue } from "../store/StateProvider";

function BasketItem({ id, title, image, price, rating }) {
  const [{ basket }, dispactch] = useStateValue();
  const onClickRemvoe = (e) => {
    e.preventDefault();
    dispactch({
      type: "REMOVE_FROM_BASKET",
      payload: { id: id, price: price },
    });
  };
  return (
    <div className="basket__item">
      <img src={image} alt="" />
      <div className="basket__info">
        <p className="basket__title">{title}</p>
        <p className="basket__price">${price}</p>
        <div className="basket__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <div className="basket__remvoe">
          <button
            onClick={(e) => {
              onClickRemvoe(e);
            }}
            className="basket__remvoe__button"
          >
            Remove from basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
