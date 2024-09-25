import React, { useState } from "react";

const Appbar = () => {
  const [click, setClick] = useState(false);
  const ClickHandler = () => {
    const newClickState = !click;
    setClick(newClickState);
    newClickState ? console.log("click true") : console.log("click false");
  };

  return (
    <nav>
      <div className=" md:flex justify-between px-6 pt-4 max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div>
            <span className="text-green-600 text-3xl font-bold">Fruit</span>
            <span className="text-slate-500 text-3xl font-thin ">Shop</span>
          </div>
          <div className="block md:hidden" onClick={ClickHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <div className={`${click ? "block" : "hidden"} md:block`}>
          <ul className="flex justify-between space-x-5 font-poppins">
            <li className="menubtn border-b-4 border-green-600">
              <a href="Fruits"></a>Fruits
            </li>
            <li className="menubtn">
              <a href="Vegtables"></a> Vegtables
            </li>
            <li className="menubtn">
              <a href="More"></a> More
            </li>
            <li className=" pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
