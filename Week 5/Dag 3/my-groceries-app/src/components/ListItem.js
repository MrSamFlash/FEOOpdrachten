import React from "react";

function ListItem({ item }) {
  return <li key={item.id}>{item.title}</li>;
}

export default ListItem;
