import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import category1 from "../assets/back-grounds/category1.png";
import category2 from "../assets/back-grounds/category2.png";
import category3 from "../assets/back-grounds/category3.png";

const CategorySection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    {
      title: "Bestsellers",
      description: "Fan-Favorite Sneakers, Flats, and Slip-Ons",
      image: category2,
      shopMen: "#",
      shopWomen: "#",
    },
    {
      title: "New Arrivals",
      description: "The Latest Styles & Limited-Edition Colors",
      image: category3,
      shopMen: "#",
      shopWomen: "#",
    },
    {
      title: "Spring Essentials",
      description: "Breezy Shoes Made From Tree Fiber For Warmer Days Ahead",
      image: category1,
      shopMen: "#",
      shopWomen: "#",
    },
  ];

  return (
    <section className="relative lg:px-10 pt-35 pb-10 lg:pt-32 lg:pb-20 overflow-x-visible">
      {isMobile ? (
        <Splide
          options={{
            type: "loop",
            focus:"center",
            perPage: 1.25,
            gap: ".75rem",
            autoplay: true,
            interval: 3000,
            arrows: false,
            pagination: true,
            clones:6,
            breakpoints: {
              766: { perPage: 1.25 },
              1080: { perPage: 2 },

            },
          }}
          className="overflow-visible"
        >
          {categories.map((category, index) => (
            <SplideSlide key={index}>
              <CategoryCard category={category} />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      )}
    </section>
  );
};

const CategoryCard = ({ category }) => (
  <div className="relative group rounded-lg shadow-lg overflow-hidden">
    <img
      src={category.image}
      alt={category.title}
      className="w-full h-130  sm:h-150  object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex flex-col items-center text-center text-white p-6">
      <h3 className="text-2xl font-bold">{category.title}</h3>
      <p className="text-md mt-2">{category.description}</p>
    </div>
    <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-4  sm:space-x-6 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <a
        href="/men"
        className="min-w-fit  text-center bg-white text-black px-4 sm:px-8 py-2 my-2 text-sm uppercase font-semibold hover:bg-black hover:text-white transition"
      >
        Shop Men
      </a>
      <a
        href="/women"
        className="min-w-fit  text-center bg-white text-black px-2 sm:px-4 py-2 my-2 text-sm uppercase font-semibold hover:bg-black hover:text-white transition"
      >
        Shop Women
      </a>
    </div>
  </div>
);

export default CategorySection;