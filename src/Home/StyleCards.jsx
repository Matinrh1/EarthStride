import React from "react";
import tree from "../assets/back-grounds/treestyle.png"
import trail from "../assets/back-grounds/trail.png"

export default function StyleCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4  pt-0">
      {/* Tree Styles Card */}
      <div className="relative overflow-hidden group ">
        <div
          className="relative w-full h-[500px]  sm:h-[600px] lg:h-[700px] bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(${tree})` }}
        >
          <div className="absolute inset-0 bg-black/30 flex flex-col  justify-start text-white text-center p-4 py-15">
            <h2 className="text-2xl font-bold">Tree Styles</h2>
            <p className="text-sm">Sneakers Made From Cool, Breathable Eucalyptus Fiber</p>
          </div>
        </div>
        <div className="absolute inset-0 flex items-end justify-center gap-4 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-10">
          <a href="/men" className="px-4 py-2 w-[140px] [@media(min-width:900px)]:w-[200px] bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 cursor-pointer text-center">
            Shop Men
          </a>
          <a href="/women" className="px-4 py-2 w-[140px] [@media(min-width:900px)]:w-[200px] bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 cursor-pointer text-center">
            Shop Women
          </a>
        </div>
      </div>

      {/* Trail Runner Card */}
      <div className="relative overflow-hidden group ">
        <div
          className="relative w-full h-[500px] md:h-full sm:h-[600px] lg:h-[700px] bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(${trail})` }}
        >
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-start text-white text-center p-4 py-15">
            <h2 className="text-2xl font-bold">Trail Runner</h2>
            <p className="text-sm">Tough, Grippy, Ready To Explore</p>
          </div>
        </div>
        <div className="absolute inset-0 flex items-end justify-center gap-4 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-10">
          <a href="/men" className="px-4 py-2 w-[140px] [@media(min-width:900px)]:w-[200px] bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 cursor-pointer text-center">
            Shop Men
          </a>

          <a href="/women" className="px-4 py-2 w-[140px] [@media(min-width:900px)]:w-[200px] bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 cursor-pointer text-center">
            Shop Women
          </a>
        </div>
      </div>
    </div>
  );
}
