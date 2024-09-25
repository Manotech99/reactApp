import React from "react";

function Productslist({ productlist }) {
  return (
    <div className="flex flex-col">
      <img
        className="w-full"
        src={require(`../assets/${productlist.image}.jpeg`)}
        alt={productlist.name}
      />
      <span>{productlist.name}</span>
      <span>{productlist.price}</span>
    </div>
  );
}

export default Productslist;
