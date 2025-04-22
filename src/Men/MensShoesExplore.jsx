import React from "react";
import img1 from "../assets/back-grounds/menexplore1.png";
import img2 from "../assets/back-grounds/menexplore2.png";
import img3 from "../assets/back-grounds/menexplore3.png";
import img4 from "../assets/back-grounds/menexplore4.png";

const categories = [
  {
    title: "Everyday Sneakers",
    image: img2, // Replace with actual image path
  },
  {
    title: "Active Shoes",
    image: img1,
  },
  {
    title: "Slip Ons",
    image: img3,
  },
  {
    title: "Water-Repellent Shoes",
    image: img4,
  },
];

const MensShoesExplore = () => {
  return (
    <section className="md:flex  bg-gray-100 px-6 py-10 my-5">
      <h2 className="text-3xl min-w-fit md:text-4xl  md:px-10 md:pt-10 lg:px-10 xl:px-25 justify-center font-bold text-gray-900 mb-8 md:text-center">
        Explore More <br className="hidden md:inline" /> Men's Shoes
      </h2>

      <div className="grid grid-cols-2 gap-5">
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
              <h3 className="sm:text-lg min-w-fit  font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MensShoesExplore;
