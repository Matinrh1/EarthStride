import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Link, useLocation, useNavigate } from "react-router-dom";
import canvass from "../assets/back-grounds/womencard1.png";
import card2 from "../assets/back-grounds/womencard2.png";
import products from "../products/Womenshoes";
import MensShoesExplore from "./WomensShoesExplore";
import FAQSection from "./FAQsection";
import ProductColorsSlider from "../Men/ProductColorsSlider";

const WomenShoes = () => {
  const [selectedImages, setSelectedImages] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = product.image;
      return acc;
    }, {})
  );

  const handleColorChange = (productId, newImage) => {
    setSelectedImages((prevImages) => ({
      ...prevImages,
      [productId]: newImage,
    }));
  };
  const sizes = [
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
    "10.5",
    "11",
    "11.5",
    "12",
    "12.5",
    "13",
    "13.5",
    "14",
    "W5/M3",
    "W6/M4",
    "W7/M5",
    "W8/M6",
    "W9/M7",
    "W10/M8",
    "W11/M9",
    "W12/M10",
    "W13/M11",
    "W14/M12",
    "W15/M13",
    "W16/M14",
  ];
  const numericSizes = sizes.filter((size) => !size.includes("W"));
  const wmSizes = sizes.filter((size) => size.includes("W"));

  const bestForOptions = [
    "Everyday",
    "Warm Weather",
    "Active",
    "Cool Weather",
    "Wet Weather",
  ];
  const materialOptions = [
    "Tree Fiber Blend",
    "Wool",
    "Corduroy",
    "Luxe Collection",
    "Cotton Blend",
    "Canvas",
    "Free & Bouncy Sugar",
  ];
  const hueOptions = [
    { name: "Blue", color: "#4A6484" },
    { name: "White", color: "#dddddd" },
    { name: "Beige", color: "#D8C3A5" },
    { name: "Brown", color: "#8D6E63" },
    { name: "Green", color: "#4F6F52" },
    { name: "Red", color: "#B71C1C" },
    { name: "Grey", color: "#757575" },
    { name: "Black", color: "#000000" },
  ];

  const [selectedHues, setSelectedHues] = useState([]);

  const toggleHue = (name) => {
    setSelectedHues((prev) =>
      prev.includes(name) ? prev.filter((hue) => hue !== name) : [...prev, name]
    );
  };

  const [filters, setFilters] = useState({
    size: [],
    bestFor: [],
    material: [],
    hue: [],
  });
  const toggleFilter = (category, value) => {
    setFilters((prevFilters) => {
      const updatedCategory = prevFilters[category].includes(value)
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value];

      return { ...prevFilters, [category]: updatedCategory };
    });
  };
  const getActiveFilters = () => {
    const active = [];

    Object.entries(filters).forEach(([key, values]) => {
      if (values.length > 0) {
        values.forEach((val) => {
          active.push({ category: key, value: val });
        });
      }
    });

    selectedHues.forEach((hue) => {
      active.push({ category: "hue", value: hue });
    });

    return active;
  };

  const clearAllFilters = () => {
    setFilters({
      size: [],
      bestFor: [],
      material: [],
      hue: [],
    });
    setSelectedHues([]);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        if (!isSidebarOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSidebarOpen]);

  // Reset scroll on route change
  useEffect(() => {
    document.body.style.overflow = "auto";
    window.scrollTo(0, 0);
  }, [location.pathname]);

  function useScreenWidth() {
    const [isSmOrLarger, setIsSmOrLarger] = useState(window.innerWidth >= 640);

    useEffect(() => {
      const handleResize = () => {
        setIsSmOrLarger(window.innerWidth >= 640);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isSmOrLarger;
  }

  const isSmOrLarger = useScreenWidth();

  return (
    <div className="relative">
      {!isSidebarOpen && (
        <div
          className="fixed inset-0 bg-[rgba(10,10,10,0.5)] z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(true)}
        ></div>
      )}

      <div
        className={`women-shoes lg:flex [&@media(min-width:300px)]:p-4  pt-30 lg:pt-25 `}
      >
        {/* Sidebar Filters */}

        {!isSidebarOpen && (
          <div
            className="lg:hidden text-2xl sm:text-3xl right-5 fixed top-5 border-b  z-50 cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        )}

        <aside
          className={`w-5/7 sm:w-2/5  lg:w-1/4 fixed lg:static right-0 lg:left-auto top-0 lg:top-auto h-full bg-white shadow-lg z-40 lg:z-30 transform pt-3 pl-5 lg:pl-5 ${
            isSidebarOpen ? "translate-x-[100%]" : "translate-x-0"
          } transform duration-300 ease-in-out overflow-y-auto max-h-full lg:block`}
        >
          <p
            className="pt-3 lg:pt-0 pb-5 font-semibold underline cursor-pointer inline-block"
            onClick={() => {
              setIsSidebarOpen(true);
              setTimeout(() => {
                navigate("/");
              }, 10);
            }}
          >
            Home 
          </p>
          <div className="pb-5">
            <h3 className="font-semibold text-3xl">Women's Shoes</h3>
            <ul className="mt-2 space-y-3">
              {[
                "Everyday Sneakers",
                "Active Shoes",
                "Water-Repellent Shoes",
                "Slip-Ons",
                "High Tops",
                "Sandals",
                "Bestsellers",
                "Sale Shoes",
              ].map((category) => (
                <li key={category} className="cursor-pointer  hover:underline">
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <div className="flex justify-between border-b-1 border-gray-300 pb-3 mb-3">
              <h2 className="font-bold text-xl  border-gray-300">Filter By:</h2>
              {getActiveFilters().length > 0 && (
                <p
                  className="pt-[4px] border-b mx-2 cursor-pointer hover:text-gray-500 text-sm text-gray-700"
                  onClick={clearAllFilters}
                >
                  Clear All
                </p>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {getActiveFilters().length > 0 ? (
                getActiveFilters().map((filter, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-md border-1 border-gray-400  px-2 py-1 rounded-full flex items-center gap-1"
                  >
                    {filter.value}
                    <button
                      onClick={() =>
                        filter.category === "hue"
                          ? toggleHue(filter.value)
                          : toggleFilter(filter.category, filter.value)
                      }
                      className="text-gray-500  border-1 hover:bg-gray-800 rounded-full pb-[3px] px-[10px] ml-1 hover:text-black transition duration-200 cursor-pointer"
                    >
                      <p className="text-2xl hover:text-white">×</p>
                    </button>
                  </span>
                ))
              ) : (
                <p className="text-sm text-gray-500">None selected</p>
              )}
            </div>
          </div>

          <div className="my-5 border-b-1 border-gray-300 pb-7 pr-2">
            <h3 className="font-bold text-xl pb-4 mb-1">Sizes</h3>
            <div className="flex flex-col gap-4">
              {/* Numeric Sizes */}
              <div className="grid grid-cols-4 gap-2">
                {numericSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleFilter("size", size)}
                    className={`border px-2 py-1 text-sm cursor-pointer ${
                      filters.size.includes(size)
                        ? "text-white bg-slate-900 "
                        : ""
                    }hover:bg-gray-400`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* W/M Sizes */}
              <div className="grid grid-cols-4 gap-2">
                {wmSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleFilter("size", size)}
                    className={`border px-2 py-1 text-sm hover:bg-gray-400 cursor-pointer text-center break-words min-w-0 ${
                      filters.size.includes(size)
                        ? "bg-slate-900 text-white"
                        : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-4 border-b-1 border-gray-300 pb-5">
            <h3 className="font-bold text-xl pb-1 mb-1 ">Best For</h3>
            {bestForOptions.map((option) => (
              <div key={option} className="flex items-center space-y-3">
                <input
                  type="checkbox"
                  id={option}
                  checked={filters.bestFor.includes(option)}
                  onChange={() => toggleFilter("bestFor", option)}
                  className="mr-2 mt-3 cursor-pointer hover:bg-gray-200 hover:opacity-70 accent-black"
                />
                <label
                  htmlFor={option}
                  className="cursor-pointer hover:text-slate-600"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
          <div className="mb-4 border-b-1 border-gray-300 pb-5">
            <h3 className="font-bold text-xl pb-3 mb-1">Material</h3>
            {materialOptions.map((option) => (
              <div key={option} className="flex space-y-3 items-center">
                <input
                  type="checkbox"
                  id={option}
                  checked={filters.material.includes(option)}
                  onChange={() => toggleFilter("material", option)}
                  className="mr-2 mt-3 cursor-pointer hover:bg-gray-200 hover:opacity-70 accent-black"
                />
                <label
                  className="cursor-pointer hover:text-slate-600"
                  htmlFor={option}
                >
                  {option}
                </label>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <h3 className="font-bold text-xl pb-1 mb-2">Hue</h3>
            <div className="flex flex-col gap-4">
              {hueOptions.map(({ name, color }) => (
                <div key={name} className="flex items-center ">
                  <div
                    onClick={() => toggleHue(name)}
                    className={`w-4 h-4 rounded-full cursor-pointer  mr-2 p-3  ${
                      selectedHues.includes(name)
                        ? "outline-3 outline-gray-600 outline-offset-1"
                        : ""
                    }`}
                    style={{ backgroundColor: color }}
                  ></div>
                  <label
                    onClick={() => toggleHue(name)}
                    className="cursor-pointer"
                  >
                    {name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="lg:w-3/4 sm:p-4">
          {/* Top Right Button */}
          <div className="flex py-2 justify-between lg:justify-end">
            <div className="border-1 ml-2 sm:mx-5 lg:mx-0 border-gray-500 p-[2px] rounded-full overflow-hidden flex">
              <Link
                to="/women"
                className="px-1 sm:px-3 py-2 bg-slate-900 text-white rounded-full"
              >
                Women
              </Link>
              <Link to="/men" className="px-3 sm:px-5 py-2  rounded-full ">
                Men
              </Link>
            </div>
            <div
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden pl-4 pt-1 "
            >
              <button className="flex items-center gap-2 border-1 border-gray-500 mx-2 rounded-full px-4 py-3 text-sm font-semibold text-black hover:bg-gray-100 transition cursor-pointer">
                <span>FILTERS</span>
                <i className="fas fa-sliders-h text-lg"></i>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6">
            {products.map((product, index) => (
              <React.Fragment key={product.id}>
                {/* Product Card */}
                <div className="rounded-lg p-1 sm:p-4 sm:shadow-sm relative group hover:shadow-[0px_6px_20px_rgba(0,0,5,0.3)]">
                  {/* Product Image */}
                  <div className="relative bg-gray-100 cursor-pointer">
                    <img
                      src={selectedImages[product.id]}
                      alt={product.name}
                      className="w-full object-cover rounded"
                    />
                    <span className="bg-white text-sm font-semibold px-2 m-1 [@media(min-width:450px)]:m-4 py-1 rounded">
                      {product.label}
                    </span>
                  </div>

                  {/* Product Name & Price */}
                  <div className="min-h-20">
                    <h2 className="lg:text-lg w-fit font-semibold mt-2">
                      {product.name}
                    </h2>
                    <p className="text-gray-700">{product.price}</p>
                  </div>

                  {/* Color Variations Swiper */}
                  <ProductColorsSlider
                    product={product}
                    handleColorChange={handleColorChange}
                  />

                  {/* Shoe Sizes (Appear on Hover) */}
                  <div className="absolute hidden z-10 group-hover:block sm:bg-white sm:shadow-[0px_6px_20px_-8px_rgba(0,0,5,0.3)] p-3 w-full mt-2 left-0">
                    <p className="hidden sm:block font-semibold text-sm mb-2">
                      Quick Add
                    </p>
                    <div className="hidden sm:grid grid-cols-6 gap-1">
                      {numericSizes.map((size) => (
                        <button
                          key={size}
                          className="border border-black py-1 rounded-xs text-sm hover:bg-gray-200"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div
                    key={WomenShoes.id}
                    className="sm:hidden relative mt-2 w-full"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="flex justify-between items-center w-full p-3 bg-white border-t border-gray-300 text-left cursor-pointer"
                    >
                      <p className="font-semibold text-sm">Quick Add</p>
                      <span className="text-2xl font-bold">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className={`transition-all duration-200 ease-in-out overflow-hidden ${
                        openIndex === index
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="z-10 bg-white w-full left-0">
                        <div className="grid grid-cols-4 gap-1">
                          {numericSizes.map((size) => (
                            <button
                              key={size}
                              className="border border-black py-1 rounded text-sm hover:bg-gray-200"
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {index === 1 && (
                  <div className="col-span-2 sm:col-span-1 flex flex-col h-[450px] sm:h-auto justify-center  sm:items-end text-center relative">
                    <img
                      src={canvass}
                      alt="Canvas Sneakers"
                      className="pt-4 h-full object-cover"
                    />

                    <div className="absolute flex flex-col justify-end w-full h-full items-center bg-opacity-40 text-white p-6">
                      <h2 className="text-xl font-bold">
                        Start With Fresh Canvas
                      </h2>
                      <p className="text-sm mt-2">
                        Sophisticated sneakers, endless possibilities.
                      </p>

                      {/* Ensure buttons are in a row on large screens */}
                      <div className="mt-4 w-full flex flex-col xl:flex-row lg:gap-2">
                        <button className="w-full py-2 bg-white text-black font-semibold rounded-lg hover:bg-black hover:text-white cursor-pointer ">
                          SHOP MEN
                        </button>
                        <button className="mt-2 lg:mt-0 w-full py-2 bg-white text-black font-semibold rounded-lg hover:bg-black hover:text-white cursor-pointer">
                          SHOP WOMEN
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {(isSmOrLarger && index === 6) ||
                (!isSmOrLarger && index === 7) ? (
                  <div className="col-span-2 sm:col-span-1 flex flex-col h-[450px] sm:h-auto justify-center sm:items-end text-center relative">
                    <img
                      src={card2}
                      alt="Canvas Sneakers"
                      className="pt-4 h-full object-cover"
                    />

                    <div className="absolute flex flex-col justify-end w-full h-full items-center bg-opacity-40 text-white p-6">
                      <h2 className="text-xl font-bold">
                        Start With Fresh Canvas
                      </h2>
                      <p className="text-sm mt-2">
                        Sophisticated sneakers, endless possibilities.
                      </p>

                      <div className="mt-4 w-full flex flex-col xl:flex-row lg:gap-2">
                        <button className="w-full py-2 bg-white text-black font-semibold rounded-lg hover:bg-black hover:text-white cursor-pointer">
                          SHOP MEN
                        </button>
                        <button className="mt-2 lg:mt-0 w-full py-2 bg-white text-black font-semibold rounded-lg hover:bg-black hover:text-white cursor-pointer">
                          SHOP WOMEN
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      {/*explore more shoes*/}
      <MensShoesExplore />
      <FAQSection />
    </div>
  );
};

export default WomenShoes;
