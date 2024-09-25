import React, { useState } from "react";

function Filter() {
  const [active, setActive] = useState(1);

  // Event handler for setting the active state
  const handleClick = (value) => () => {
    setActive(value);
  };

  return (
    <div className="w-4/6 mx-auto pt-12 text-center space-x-8">
      <button
        className={`${
          active === 1 ? "filerbtn-active" : "filterbtn"
        } font-poppins`}
        onClick={handleClick(1)}
      >
        Latest
      </button>
      <button
        className={`${
          active === 2 ? "filerbtn-active" : "filterbtn"
        } font-poppins`}
        onClick={handleClick(2)}
      >
        Best Seller
      </button>
      <button
        className={`${
          active === 3 ? "filerbtn-active" : "filterbtn"
        } font-poppins`}
        onClick={handleClick(3)}
      >
        Special
      </button>
    </div>
  );
}

export default Filter;
