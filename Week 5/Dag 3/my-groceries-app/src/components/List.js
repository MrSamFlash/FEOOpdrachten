import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
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
    };
  }
  render() {
    const items = this.state.groceryItems.map((item) => (
      <ListItem key={item.id} item={item} />
    ));
    return (
      <div>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default List;
