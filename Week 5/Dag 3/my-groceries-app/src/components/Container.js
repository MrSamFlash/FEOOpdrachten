import React from "react";
// import InputField from "./InputField";
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        { id: 1, title: "Paprika" },
        { id: 2, title: "Uien" },
        { id: 3, title: "Spitskool" },
        { id: 4, title: "Mie" },
        { id: 5, title: "Gehakt" },
      ],
      shoppingCartItems: [
        { id: 1, title: "Glorix" },
        { id: 2, title: "Keelpastilles" },
      ],
    };
  }

  handleClickGroceryItem = (item) => console.log(item.title);

  render() {
    return (
      <div>
        <h1>Boodschappenlijst</h1>
        <GroceryList
          groceries={this.state.groceryItems}
          handleClickGroceryItem={this.handleClickGroceryItem}
        />
        <h1>Winkelmandje</h1>
        <ShoppingCart cartItems={this.state.shoppingCartItems} />
      </div>
    );
  }
}

export default Container;
