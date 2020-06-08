import React from "react";

let ListItem = (props) => {
  return <li onClick={props.handleClickGroceryItem}>{props.title}</li>;
};

// function ListItem(props) {
//   const { title } = props;
//   return <li> {title} </li>;
// }

export default ListItem;
