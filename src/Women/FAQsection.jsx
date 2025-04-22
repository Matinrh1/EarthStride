import { useState } from "react";

const faqs = [
  {
    question: "DOES EARTHSTRIDE RUN TRUE TO SIZE?",
    answer: `Yes, Earthstride shoes generally run true to size. For those who prefer a snugger fit or plan to wear the shoes without socks, we typically recommend sticking to your usual size. If you prefer a roomier fit or plan to wear thicker socks, consider sizing up for comfort. If you’d like more guidance, refer to the size guides found on every product’s page.`,
  },
  {
    question: "ARE EARTHSTRIDE SHOES  CONSIDERED ALL-DAY SHOES?",
    answer: `Absolutely! Earthstride shoes are designed to support your feet through long hours of wear, making them perfect for your daily routines. Features like supportive midsoles, lightweight construction, ample breathability, and soft materials ensure that you can stay on your feet longer without discomfort—ideal for all-day wear.`,
  },
  {
    question: "CAN EARTHSTRIDE SHOES BE WORN BAREFOOT?",
    answer: `Although our shoes are incredibly soft and plush enough for sockless wear, they are not specifically designed for continuous use without socks.

That said, for days when you really want to go sockless, our breathable ZQ Merino wool or eucalyptus tree fiber, paired with the odor-minimizing insoles made from castor bean oil, will keep your feet comfortable and fresh. Need some comfy socks to match with your Earthstride? Take a look at our Anytime sock collection to find the perfect pair that matches your style and color preferences.`,
  },
  {
    question: "ARE EARTHSTRIDE SHOES GOOD FOR WALKING ALL DAY?",
    answer: `Yes! Earthstride shoes are crafted to provide unrivaled comfort throughout the day. Our daily wear favorites, including the Wool Mizzles, Tree Dashers, and Wool Pipers, utilize sustainable and ethically-sourced materials like our soft ZQ Merino wool, springy SweetFoam® sugarcane midsoles, and plush, odor-minimizing castor bean oil insoles.

Together, these elements result in a shoe that is lightweight, breathable, flexible, and extraordinarily comfortable.

Strut in your Earthstride with a spring in your step, whether you’re heading to work, running errands, traveling, or anything else on your agenda.`,
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
          Women's Shoes
        </h2>
        <p className="md:mb-20 mb-12 text-[17px]">
          Explore the sustainable fusion of style and all-day comfort with our women’s shoes collection. Whether you need some new flats for the office or a brisk pair of active shoes to log some miles in, we’ve got your perfect pair—but it’s up to you to pick them out.
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
          The Earthstride approach
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 px-5 lg:px-30 text-left">
        <div className="flex flex-col h-full">
          <h3 className="font-semibold text-lg">Wear-All-Day Comfort</h3>
          <p className="text-gray-600 mt-1">
            Lightweight, bouncy, and wildly comfortable, Earthstride shoes make any
            outing feel effortless.
          </p>
          <a href="#" className="text-gray-800 border-b-1 mt-auto max-w-fit inline">
            Learn More
          </a>
        </div>
        <div className="flex flex-col h-full">
          <h3 className="font-semibold text-lg">Sustainability In Every Step</h3>
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
    </>
  );
}
