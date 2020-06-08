import React from "react";
import ListItem from "./ListItem";

let List = (props) => {
  const listElements = props.listItems.map((item) => {
    return (
      <ListItem
        key={item.id}
        title={item.title}
        handleClickGroceryItem={() => props.handleClickGroceryItem(item)}
      />
    );
  });

  return (
    <div>
      <ul>{listElements}</ul>
    </div>
  );
};
export default List;
