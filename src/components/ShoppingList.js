import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [ selectedCategory, setSelectedCategory ] = useState("All");

  const handleCategoryFilter = (e) => {
    setSelectedCategory(e.target.value);
  }

  let toDisplay = items;
  if(selectedCategory !== "All"){
    toDisplay = items.filter(item=> {
      return item.category === selectedCategory;
    });
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {toDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;