import React from "react";

const TopBar = () => {
  return (
    <div className="hidden md:flex md:items-center md:justify-between text-slate-600 px-6">
      <p className="font-medium">Free Express Shipping on orders $200</p>

      <div className="font-medium">
        <ul className="flex items-center gap-6">
          <li>Shipping</li>
          <li>FAQ</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
