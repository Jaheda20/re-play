import Image from "next/image";
import React from "react";

export default function FreeShippingItems() {
  return (
    <div className="px-6 my-20 flex items-center gap-10">
      <div className="w-1/4">
        <h1 className="text-3xl font-semibold leading-normal">
          Products with Free Shipping
        </h1>
        <p className="mt-8">
          Make advantage of free shipping, except on select pieces by creators.
          Discover items that perfectly match your style for any space.
        </p>
        <button className="btn mt-8 border-yellow-600 bg-white font-semibold">
          Find Out More
        </button>
      </div>

      <div className="flex items-center gap-6 w-3/4">
        <div className="flex flex-col">
          <div className="relative">
            <Image
              src="https://i.postimg.cc/0jym90dW/PH199491.jpg"
              alt=""
              width={320}
              height={288}
              className="w-80 h-72 object-cover"
            />
            <p className="absolute bg-slate-800 text-slate-100 px-3 top-5 left-4 rounded-md">
              Sale!
            </p>
          </div>
          <div className="flex items-center justify-between mt-6">
            <h3 className="text-slate-500">Kids Room Interior</h3>
            <p className="text-yellow-600">$40.00</p>
          </div>

          <p className="mt-2 text-sm">Play Table Set (Pre-Owned)</p>
        </div>

        <div className="flex flex-col">
          <div className="relative">
            <Image
              src="https://i.postimg.cc/SKVC3Pc2/s-l400.jpg"
              alt=""
              width={320}
              height={288}
              className="w-80 h-72 object-cover"
            />
            <p className="absolute bg-slate-800 text-slate-100 px-3 top-5 left-4 rounded-md">
              Sale!
            </p>
          </div>
          <div className="flex items-center justify-between mt-6">
            <h3 className="text-slate-500">Footwear</h3>
            <p className="text-yellow-600">$60.00</p>
          </div>

          <p className="mt-2 text-sm">Nike Shoes (Pre-Owned)</p>
        </div>

        <div className="flex flex-col">
          <div className="relative">
            <Image
              src="https://i.postimg.cc/QCcp4dms/infantcarseats-2048px-8494.jpg"
              alt=""
              width={320}
              height={288}
              className="w-80 h-72 object-cover"
            />
            <p className="absolute bg-slate-800 text-slate-100 px-3 top-5 left-4 rounded-md">
              Sale!
            </p>
          </div>
          <div className="flex items-center justify-between mt-6">
            <h3 className="text-slate-500">Baby Gear</h3>
            <p className="text-yellow-600">$45.00</p>
          </div>

          <p className="mt-2 text-sm">Infant carseat (Pre-Owned)</p>
        </div>
      </div>
    </div>
  );
}
