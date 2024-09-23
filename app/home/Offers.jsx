import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Offers() {
  return (
    <div className="px-6 grid grid-cols-3 gap-6 my-20">
      <div className="flex flex-col items-center">
        <div className="overflow-hidden h-80 w-full relative">
          <Image
            src="https://i.postimg.cc/9MYfdQXj/two-girls-stand-front-rack-clothes-with-one-wearing-blue-dress-with-bow-front-1191871-42540.jpg"
            alt="offer"
            width={640}
            height={180}
            className="h-full w-full object-cover transition-transform duration-1000 ease-in-out hover:scale-105"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <h3 className="text-xl font-medium">
            Upto 50% Off On Favorite Brands
          </h3>
          <p className="text-yellow-600 flex items-center gap-2 mt-2">
            Shop Now{" "}
            <span>
              <IoIosArrowForward />
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="overflow-hidden h-80 w-full relative">
          <Image
            src="https://i.postimg.cc/cLztCCC9/image.jpg"
            alt="offer"
            width={640}
            height={180}
            className="h-full w-full object-cover transition-transform duration-1000 ease-in-out hover:scale-105"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <h3 className="text-xl font-medium">Buy 1 Get 1 Free</h3>
          <p className="text-yellow-600 flex items-center gap-2 mt-2">
            Shop Now{" "}
            <span>
              <IoIosArrowForward />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="overflow-hidden h-80 w-full relative">
          <Image
            src="https://i.postimg.cc/DZXrnscP/my-vintage-kiddos-preloved-kidwear.jpg"
            alt="offer"
            width={640}
            height={180}
            className="h-full w-full object-cover transition-transform duration-1000 ease-in-out hover:scale-105"
          />
        </div>

        <div className="flex flex-col items-center justify-center mt-4">
          <h3 className="text-xl font-medium">Autumn 24 Offer Available</h3>
          <p className="text-yellow-600 flex items-center gap-2 mt-2">
            Shop Now
            <span>
              <IoIosArrowForward />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
