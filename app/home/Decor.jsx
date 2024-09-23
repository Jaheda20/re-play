import Image from "next/image";
import React from "react";

export default function Decor() {
  return (
    <div className="px-6 flex items-center my-20 gap-10">
      <div className="w-2/3">
        <Image
          src="https://i.postimg.cc/G3JP9L9w/PH199501.jpg"
          width={500}
          height={500}
          alt="decor ideas"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="w-1/3">
        <h1 className="text-3xl font-semibold leading-normal">
          From Blank Walls to Dream Worlds: Kids' Room Décor Inspiration
        </h1>
        <p className="mt-8">
          Turn your child's room into a magical space where creativity and
          dreams come to life. Explore our range of furniture to create a fun,
          functional environment for kids to thrive in.
        </p>
        <button className="btn mt-8 border-yellow-600 bg-white font-semibold">
          Discover More
        </button>
      </div>
    </div>
  );
}
