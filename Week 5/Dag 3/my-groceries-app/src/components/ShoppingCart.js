import React from "react";
import List from "./List";

function ShoppingCart(props) {
  return (
    <div>
      <List listItems={props.cartItems} />
    </div>
  );
}

export default ShoppingCart;
