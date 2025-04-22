
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import mts1 from "../assets/shoes/mts1.png"
import mts2 from "../assets/shoes/mts2.png"
import mts3 from "../assets/shoes/mts3.png"
import mts4 from "../assets/shoes/mts4.png"
import mts5 from "../assets/shoes/mts5.png"
import mts6 from "../assets/shoes/mts6.png"
import mts7 from "../assets/shoes/mts7.png"
import mts8 from "../assets/shoes/mts8.png"
import mts9 from "../assets/shoes/mts9.png"
import mts10 from "../assets/shoes/mts10.png"
import mts11 from "../assets/shoes/mts11.png"


const products = [
  {
    name: "Women's Canvas Pipers",
    color: "Natural White/Hanami Night",
    price: "$90",
    image: mts1
  },
  {
    name: "Men's Canvas Pipers",
    color: "Natural Black",
    price: "$90",
    image: mts2
  },
  {
    name: "Women's Lounger Lift",
    color: "Hanami Blue",
    price: "$105",
    image: mts3
  },
  {
    name: "Men's Tree Runner Go",
    color: "Blizzard/Hazy Indigo",
    price: "$120",
    image: mts4
  },
  {
    name: "Women's Couriers",
    color: "Blizzard/Light Khaki",
    price: "$98",
    image: mts5
  },
  {
    name: "Men's Trail Runners",
    color: "Weathered White",
    price: "$140",
    image: mts6
  },
  {
    name: "Women's Tree Dasher 2",
    color: "Blizzard/Hanami Night",
    price: "$135",
    image: mts7
  },
  {
    name: "Men's Tree Loungers",
    color: "Hanami Night",
    price: "$100",
    image: mts8
  },
  {
    name: "Women's Tree Runners",
    color: "Zen Blue",
    price: "$98",
    image: mts9
  }, 
  {
    name: "Men's Tree Runner",
    color: "Navy Night",
    price: "$98",
    image: mts10
  },
  {
    name: "Women's Tree Breezers",
    color: "Jet Black",
    price: "$100",
    image: mts11
  },
];

export default function ShopSlider() {
  return (
    <div className="w-full p-5 sm:p-10 ">
      <h2 className="text-xl font-bold mb-6">More to Shop</h2>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={0}
        breakpoints={{
            550: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.25 },
            900: {slidesPerView:3.25},
            1200: { slidesPerView: 4.25 },
          }}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev"
        }}
        modules={[Navigation]}
        className="relative"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center justify-between pe-4">
            <div className='items-center flex flex-col hover:cursor-pointer'>
            <div className='bg-gray-100 rounded-sm'><img src={product.image} alt={product.name} className="h-auto transition-all duration-200 hover:scale-110"/></div>
            <div className="text-center mt-2">
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-gray-500">{product.color}</p>
              <p className="font-semibold">{product.price}</p>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-between">
        <button className="prev text-black cursor-pointer">
          <ChevronLeft size={34} />
        </button>
        <button className="next text-black cursor-pointer">
          <ChevronRight size={34} />
        </button>
      </div>
    </div>
  );
}
