import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductColorsSlider = ({ product, handleColorChange, selectedHues, }) => {
  const sliderRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled =
    currentSlide >= Math.ceil(product.colors.length - slidesToShow);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width < 395) setSlidesToShow(1);
      else if (width < 525) setSlidesToShow(2);
      else if (width < 767) setSlidesToShow(3);
      else if (width < 860) setSlidesToShow(2);
      else if (width < 1024) setSlidesToShow(3);
      else if (width < 1100) setSlidesToShow(2);
      else if (width < 1400) setSlidesToShow(3);
      else setSlidesToShow(4);
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow,
    slidesToScroll: slidesToShow,
    arrows: false,
    afterChange: (index) => {
      setCurrentSlide(index);
      if (window.innerWidth < 395) {
        const newColor = product.colors[index];
        handleColorChange(product.id, newColor);
      }
    },
    responsive: [
      {
        breakpoint: 1400,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 1100,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 860,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 525,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 395,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
    beforeChange: (next) => {
      setCurrentSlide(next);
      if (window.innerWidth < 395) {
        const newColor = product.colors[next];
        handleColorChange(product.id, newColor);
      }
    },
  };

  const filteredColors = product.colors.filter((color) => {
    if (selectedHues.length === 0) return true;

    return color.hues.some((hue) => selectedHues.includes(hue));
  });

  return (
    <div className="mt-3">
      <div className="relative flex  items-center justify-center">
        <button
          className={`absolute left-0 z-10 py-2 px-3 border-1 bottom-1 bg-white rounded-sm shadow-md hover:bg-gray-100  transition-opacity ${
            isPrevDisabled
              ? "opacity-40 pointer-events-none cursor-default"
              : "cursor-pointer"
          }`}
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <i className="fas fa-chevron-left text-base"></i>
        </button>

        <div className="w-full overflow-hidden pl-12 [@media(min-width:325px)]:pl-16 [@media(min-width:365px)]:pl-18 [@media(min-width:395px)]:pl-11 [@media(min-width:440px)]:pl-13 [@media(min-width:465px)]:pl-15 [@media(min-width:525px)]:pl-11 [@media(min-width:580px)]:pl-13 [@media(min-width:600px)]:pl-15 [@media(min-width:640px)]:pl-13 [@media(min-width:700px)]:pl-15 [@media(min-width:767px)]:pl-13 [@media(min-width:860px)]:pl-11 [@media(min-width:950px)_and_(max-width:1024px)]:pl-13 [@media(min-width:1024px)_and_(max-width:1100px)]:ml-4 pr-6 sm:pr-7  lg:pr-10 [@media(min-width:1440px)]:pr-5 [@media(min-width:1200px)]:pr-6 xl:pr-8 ">
          <Slider ref={sliderRef} {...settings}>
            {filteredColors.map((color, index) => (
              <div key={index} className="flex justify-center outline-none">
                <img
                  src={color.image}
                  alt={`Color variant ${index + 1}`}
                  className="w-10 h-10 rounded hover:border-gray-400 border cursor-pointer bg-gray-100 focus:outline-none"
                  onClick={() => handleColorChange(product.id, color.image)}
                  />
              </div>
            ))}
          </Slider>
        </div>

        <button
          className={`absolute right-0 z-10 px-3 py-2 bottom-1 border-1 bg-white rounded-sm shadow-md hover:bg-gray-100 cursor-pointer transition-opacity ${
            isNextDisabled
              ? "opacity-40 pointer-events-none cursor-default"
              : ""
          }`}
          onClick={() => sliderRef.current?.slickNext()}
        >
          <i className="fas fa-chevron-right text-base"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductColorsSlider;
