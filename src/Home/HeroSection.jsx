import React, { useState, useEffect, useRef } from "react";
import nature from "../assets/back-grounds/house.png";
import nature2 from "../assets/back-grounds/test8.png"
import New from "../assets/back-grounds/test4.png";
import shoe from "../assets/back-grounds/test2.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef(null);

  const [screenIsMdUp, setScreenIsMdUp] = useState(window.innerWidth >= 768);

  const images = [
    {
      src: screenIsMdUp ? nature : nature2,
      alt: "Sustainable Earthstride Shoes",
      headline: "Curious",
      sub: " by Nature",
      subheadline:
        "Where nature meets craftsmanship—embrace warmth, comfort, and conscious style.",
    },
    {
      src: screenIsMdUp ? New : shoe,
      alt: "Earthstride Eco-Friendly Materials",
      headline: "Step into Comfort",
      subheadline:
        "Discover nature-inspired shoes crafted with sustainable materials for ultimate comfort and style.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenIsMdUp(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    intervalRef.current = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 2);
    }, 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <div className="relative w-full top-25 lg:top-8  h-[85vh] sm:h-screen bg-neutral-200">
        <div className=" w-full  bg-neutral-200 pt-7 lg:pt-10  pb-5 z-50 flex justify-center space-x-10  text-sm md:text-base font-medium">
          <a
            href="#"
            class="relative inline-block 
         before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:h-[2px] before:w-0 before:bg-black 
         before:transition-all before:duration-200 before:ease-in-out 
         hover:before:w-full hover:before:left-0"
          >
            <Link to="/men">Men's Shoes</Link>
          </a>
          <a
            href="#"
            class="relative inline-block 
         before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:h-[2px] before:w-0 before:bg-black 
         before:transition-all before:duration-200 before:ease-in-out 
         hover:before:w-full hover:before:left-0"
          >
            <Link to="/women">Women's Shoes</Link>{" "}
          </a>
        </div>

        <div className="relative w-full  h-10/11 flex">
          {images.map((image, index) =>
            index === 1 && image.src === New ? (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full  flex transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
                
              >
                {/* Left 60%: Image section */}
                <div className="w-full lg:w-[70%] h-full relative bg-[#811a4d]  lg:pr-4">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover  lg:rounded-r-full lg:border-r-10 mr-1  lg:border-neutral-200"
                  />
                </div>
                

                {/* Right 40%: Colored background */}
                <div className="lg:w-[30%] h-full bg-[#811a4d] absolute  right-0 overflow-hidden">
                </div>
              </div>
            ) : (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
            )
          )}
        </div>

        <div className="absolute mb-1 sm:mb-3 text-white text-center [@media(min-width:520px)]:text-right bg-transparent bottom-1 [@media(min-width:520px)]:right-1 px-6 max-w-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            {images[currentImage].headline}
          </h1>
          <p className="text-3xl md:text-5xl mb-2">
            {images[currentImage].sub}
          </p>
          <p className="text-lg font-bold [@media(min-width:520px)]:pl-5 lg:ml-30 xl:ml-2  mb-4 sm:mb-6">
            {images[currentImage].subheadline}
          </p>
          {currentImage === 1 ? (
            <div className="flex flex-row gap-4 justify-center [@media(min-width:520px)]:justify-end mb-3">
              <Link
                to="/men"
                className="bg-white sm:w-40 text-center min-w-fit text-black px-5 sm:px-2 py-2 text-lg font-semibold rounded-sm z-30 hover:bg-slate-900 hover:text-white transition"
              >
                Shop Men
              </Link>
              <Link
                to="/women"
                className="bg-white sm:w-40 text-center min-w-fit text-black px-2 py-2 text-lg font-semibold rounded-sm z-30 hover:bg-slate-900 hover:text-white transition"
              >
                Shop Women
              </Link>
            </div>
          ) : (
            <div className="justify-center z-20 mb-5">
              <Link
                to="/men"
                href="#"
                className="bg-white relative sm:w-full z-30 [@media(min-width:520px)]:w-fit [@media(min-width:520px)]:inline text-black px-6 py-3 text-lg font-semibold rounded-sm hover:bg-slate-900 hover:text-white transition"
              >
                Watch Now
              </Link>
            </div>
          )}
        </div>

        {/* Navigation Dots */}
        <div className="absolute right-3 top-1/2 transform translate-y-1/2 flex flex-col gap-3 z-10 items-center">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                clearInterval(intervalRef.current);
                setCurrentImage(index);
                intervalRef.current = setInterval(() => {
                  setCurrentImage(
                    (prevImage) => (prevImage + 1) % images.length
                  );
                }, 5000);
              }}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                index === currentImage ? "bg-white w-3.5 h-3.5" : "bg-gray-400"
              } transition-colors duration-300`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
