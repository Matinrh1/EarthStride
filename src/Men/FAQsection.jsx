import { useState } from "react";

const faqs = [
  {
    question: "DO EARTHSTRIDES RUN TRUE TO SIZE?",
    answer: `Yes, Earthstride shoes run true to size. If you’re looking at any of our shoes that come only in whole sizes and you’re in between, just know that Earthstride whole sizes fit true to size for most customers. If you have wide feet or are between sizes, we suggest you size up for all whole-size styles.

For those shoes that do come in half sizes, like our Tree Gliders and Tree Dasher 2s, you can order your normal size, unless you plan on wearing thick socks for hiking or trail running.`,
  },
  {
    question: "ARE EARTHSTRIDE SHOES WIDE OR NARROW?",
    answer:
      "Earthstride shoes are designed to have a medium fit, which works for most foot widths. However, customers with especially narrow or wide feet may want to try sizing up or down, or consider styles with more flexible materials.",
  },
  {
    question: "ARE EARTHSTRIDES MEANT TO BE WORN WITHOUT SOCKS?",
    answer:
      "Yes, many Earthstride shoes are designed with soft, breathable materials that make them comfortable to wear without socks. That said, it comes down to personal preference!",
  },
  {
    question: "ARE EARTHSTRIDE SHOES WASHABLE?",
    answer:
      "Yes! Most Earthstride shoes are machine washable. Just remove the insoles and laces, wash in cold water on a gentle cycle, and let them air dry. Easy!",
  },
];

export default function FAQSection() {
    const [openStates, setOpenStates] = useState(Array(faqs.length).fill(false));
  
    const toggle = (index) => {
      setOpenStates((prev) => {
        const newStates = [...prev];
        newStates[index] = !newStates[index];
        return newStates;
      });
    };
  

  return (
    <>
    <div className="max-w-[1200px] mx-auto p-6 ">
      <h2 className="text-2xl  sm:text-3xl md:text-4xl font-bold mb-7">
        Men's Shoes
      </h2>
      <p className="md:mb-20 mb-12 text-[17px]">
        Find your perfect blend of style and comfort with our collection of
        men’s shoes for any occasion. From business casual days to meeting up
        with friends after work to taking on your favorite trail, our men’s
        shoes provide the ultimate in sustainable support for every step of your
        day—and look incredible while doing so.
      </p>
      {faqs.map((faq, index) => (
        <div key={index} className="border-t">
          <button
            className="w-full  text-left py-5 font-semibold flex justify-between items-center cursor-pointer"
            onClick={() => toggle(index)}
          >
            {faq.question}
            <i
              className={`fas fa-chevron-down transition-transform duration-300 pl-5 ${
                openStates[index] ? "rotate-180" : "rotate-0"
              }`}
            ></i>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openStates[index] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-4 text-gray-700 whitespace-pre-line">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}  
    </div>

    {/* Information Section */}
    <div>
    <h1 className="px-5 lg:px-30 pt-3 pb-8 text-2xl sm:text-3xl md:text-4xl capitalize md:mt-12">
      The earthstride approach
    </h1>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 px-5 lg:px-30 text-left">
    <div className="flex flex-col h-full">
      <h3 className="font-semibold text-lg">Wear-All-Day Comfort</h3>
      <p className="text-gray-600 mt-1">
        Lightweight, bouncy, and wildly comfortable, EarthStride shoes make any
        outing feel effortless.
      </p>
      <a href="#" className="text-gray-800 border-b-1 mt-auto max-w-fit inline">
        Learn More
      </a>
    </div>
    <div className="flex flex-col h-full">
      <h3 className="font-semibold text-lg">
        Sustainability In Every Step
      </h3>
      <p className="text-gray-600 mt-1">
        From materials to transport, we’re working to reduce our carbon
        footprint to near zero.
      </p>
      <a href="#" className="text-gray-800 border-b-1 mt-auto max-w-fit inline">
        Learn More
      </a>
    </div>
    <div className="flex flex-col h-full">
      <h3 className="font-semibold text-lg">Materials From The Earth</h3>
      <p className="text-gray-600 mt-1">
        We replace petroleum-based synthetics with natural alternatives
        wherever we can. Like using wool, tree fiber, and sugar cane.
      </p>
      <a href="#" className="text-gray-800 border-b-1 max-w-fit mt-auto inline">
        Learn More
      </a>
    </div>
  </div>
  </>);
}
