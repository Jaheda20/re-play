import React from "react";

const CategoriesNav = () => {
  return (
    <div className="mt-6 flex items-center justify-center bg-yellow-600 py-4 px-6">
      <ul className="flex space-x-10 text-slate-100 font-medium">
        <li>Toys</li>
        <li>Clothing</li>
        <li>Footwear</li>
        <li>Books</li>
        <li>Baby Gear</li>
        <li>Furniture</li>
        <li>Accessories</li>
      </ul>
    </div>
  );
};

export default CategoriesNav;
