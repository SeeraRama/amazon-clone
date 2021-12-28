import React from "react";
import "./subtotal.css";
import NumberFormat from "react-number-format";
import { useStateValue } from "../../store/StateProvider";

function SubTotal() {
  const [{ basket, total }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <NumberFormat
        renderText={(formattedValue) => (
          <>
            <p>
              Sub Total ({basket.length}):<strong>{formattedValue}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        value={total}
        prefix={"$ "}
        thousandSeparator={true}
        readOnly
        decimalScale={2}
        displayType={"text"}
      ></NumberFormat>
      <button> Proceed to checkout</button>
    </div>
  );
}

export default SubTotal;
