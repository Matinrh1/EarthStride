import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import React, { useState, useEffect } from "react";
import bluebg from "../assets/back-grounds/blue.png";
import blue1 from "../assets/shoes/blue1.png";
import blue2 from "../assets/shoes/blue2.png";
import blue3 from "../assets/shoes/blue3.png";
import blue4 from "../assets/shoes/blue4.png";

const products = [
  {
    name: "Tree Runner Go",
    color: "Hanami Night",
    price: "$120",
    img: blue2,
  },
  {
    name: "Tree Runner Go",
    color: "Blizzard/Hanami Night",
    price: "$120",
    img: blue3,
  },
  {
    name: "Tree Gliders",
    color: "Blizzard/Hanami Blue",
    price: "$135",
    img: blue1,
  },
  {
    name: "Tree Dasher 2",
    color: "Hanami Night",
    price: "$135",
    img: blue4,
  },
];

const ProductShowcase = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto grid [@media(min-width:900px)]:grid-cols-2 gap-4 md:px-2 py-15">
      {/* Left Section (Hero) */}
      <div className="relative h-full min-h-[500px] flex items-end justify-start p-10 text-white group overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-105"
          style={{ backgroundImage: `url(${bluebg})` }}
        />

        {/* Text & Buttons */}
        <div className="relative z-10 md:w-4/5">
          <h1 className="md:text-3xl text-2xl font-bold">
            New And Bountiful Blues
          </h1>
          <p className="text-lg mt-2">
            Cool shades to put some spring in your step.
          </p>
          <div className="mt-6 space-x-3 flex items-center justify-center text-center">
            <a
              href="/men"
              className="bg-white w-full text-black md:px-6 py-2 rounded-md hover:bg-slate-900 hover:text-white duration-200 transition-all cursor-pointer"
            >
              SHOP MEN
            </a>
            <a
              href="/women"
              className="bg-white w-full min-w-fit text-black md:px-6 py-2 rounded-md hover:bg-slate-900 hover:text-white duration-200 transition-all cursor-pointer"
            >
              SHOP WOMEN
            </a>
          </div>
        </div>
      </div>

      {/* Right Section (Grid for large screens, Swiper for small screens) */}
      {isMobile ? (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1.25}
          breakpoints={{
            450: { slidesPerView: 1.5 },
            600: { slidesPerView: 2 },
            700: { slidesPerView: 2.25 },
          }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="relative p-4 bg-gray-100 rounded-lg overflow-hidden group transition-all duration-200">
      <div className="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-40 transition-all duration-300"></div>

      <div className="relative overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full  transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="relative  z-10">
        <div className="flex justify-between">
          <h3 className="font-semibold">{product.name}</h3>
          <p>{product.price}</p>
        </div>
        <p className="text-gray-500">{product.color}</p>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <a
          href="/men"
          className="bg-white w-45 text-black font-semibold px-4 py-2 hover:bg-black hover:text-white transition-all duration-200 cursor-pointer text-center"
        >
          SHOP MEN
        </a>
        <a
          href="/women"
          className="bg-white w-45 text-black font-semibold px-4 py-2 hover:bg-black hover:text-white transition-all duration-200 cursor-pointer text-center"
        >
          SHOP WOMEN
        </a>
      </div>
    </div>
  );
};

export default ProductShowcase;
