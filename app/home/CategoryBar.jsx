"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CategoryBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="mt-20 mb-32 px-6">
      <h1 className="text-2xl font-semibold text-slate-700">
        Shop By Categories
      </h1>
      <div className="grid grid-cols-7 gap-6 mt-6">
        {categories.map((category, index) => (
          <motion.div
            key={category?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.7, duration: 0.6 }}
          >
            <img
              src={category?.image}
              alt=""
              className="w-40 h-40 rounded-full object-cover"
            />
            {/* <Image
              src={category?.image}
              width={20}
              height={20}
              alt=""
              className="rounded-full object-cover"
            /> */}
          </motion.div>
        ))}
        {/* {categories.map((category) => (
          <div key={category.id}>
            <img
              src={category.image}
              alt=""
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default CategoryBar;
