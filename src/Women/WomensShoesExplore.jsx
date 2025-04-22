import React from "react";
import img1 from "../assets/back-grounds/womenexplore1.png";
import img2 from "../assets/back-grounds/womenexplore2.png";
import img3 from "../assets/back-grounds/womenexplore3.png";
import img4 from "../assets/back-grounds/womenexplore4.png";
import img5 from "../assets/back-grounds/womenexplore5.png";
import img6 from "../assets/back-grounds/womenexplore6.png";


const categories = [
  {
    title: "Everyday Sneakers",
    image: img1, 
  },
  {
    title: "Active Shoes",
    image: img2,
  },
  {
    title: "Flats",
    image: img3,
  },
  {
    title: "Slip Ons",
    image: img4,
  },
  {
    title: "Water-Repellent Shoes",
    image: img5,
  }, {
    title: "Sale Shoes",
    image: img6,
  },
];

const WomensShoesExplore = () => {
  return (
    <section className="[@media(min-width:1000px)]:flex  bg-gray-100 px-6 py-10 my-15">
      <h2 className="text-3xl min-w-fit md:text-4xl  [@media(min-width:1000px)]:px-10 [@media(min-width:1000px)]:pt-10  justify-center font-bold text-gray-900 mb-8 [@media(min-width:1000px)]:text-center">
        Explore More <br className="hidden [@media(min-width:1000px)]:inline" /> Women's Shoes
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        {categories.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-sm hover:shadow-xl rounded-sm cursor-pointer overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[350px] object-cover"
            />
            <div className="p-2 sm:p-4">
              <h3 className="sm:text-lg min-w-fit font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WomensShoesExplore;
