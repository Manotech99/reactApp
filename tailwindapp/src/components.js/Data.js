import React, { useState } from "react";
import Productslist from "./Productslist";

function Data() {
  const productdata = [
    { id: 1, image: "1", name: "Green Grapes", price: 100 },
    { id: 2, image: "2", name: "Pomegranate", price: 200 },
    { id: 3, image: "3", name: "Black Grapes", price: 250 },
    { id: 4, image: "4", name: "Grape Fruit", price: 300 },
    { id: 5, image: "5", name: "Berry", price: 250 },
    { id: 6, image: "6", name: "Lemon", price: 150 },
  ];

  const [data, setData] = useState(productdata);

  return (
    <div className="grid grid-cols-3 gap-4 mt-12 max-w-7xl m-auto">
      {data.map((product) => (
        <Productslist key={product.id} productlist={product} />
      ))}
    </div>
  );
}

export default Data;
