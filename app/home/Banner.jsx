import React from "react";

const Banner = () => {
  const bounceAnimation = {
    animation: "bounce 3s infinite",
  };

  return (
    <div className="bg-[url('https://i.postimg.cc/sgp276LF/photo-1560328055-e938bb2ed50a-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg')] bg-cover bg-no-repeat h-screen w-full bg-[position:center] relative">
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-30px);
            }
            60% {
              transform: translateY(-15px);
            }
          }
        `}
      </style>
      <div>
        <img
          src="https://i.postimg.cc/4dKy7fkP/wooden-toy-plane-with-red-blue-tail-is-white-background-902639-20186.jpg"
          alt="toys"
          className="w-96 rounded-md absolute right-60 top-20 "
          style={bounceAnimation}
        />
      </div>
      <div className="flex flex-col items-start absolute bottom-40 right-10 max-w-2xl w-full ">
        <h1 className="text-6xl font-extrabold bg-gradient-to-br from-blue-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
          Playful, Preloved, Affordable
        </h1>
        <p className="mt-3 font-medium text-slate-600 w-10/12">
          Where Fun Meets Value: Explore Our Collection of Cherished Gems.
          Discover Affordable Joy and Quality in Every Find!
        </p>
        <button className="btn mt-6 bg-blue-300 font-semibold">
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default Banner;
