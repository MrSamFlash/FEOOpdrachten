import React from "react";
import List from "./List";

function GroceryList(props) {
  //console.log(props);
  return (
    <div>
      <List
        listItems={props.groceries}
        handleClickGroceryItem={props.handleClickGroceryItem}
      />
    </div>
  );
}

export default GroceryList;
