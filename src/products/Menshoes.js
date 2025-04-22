const imageModules = import.meta.glob('../assets/shoes/menshoes/**/*.{png,jpg,jpeg,svg}', { eager: true });

const getImage = (filename) => {
  const path = `../assets/shoes/menshoes/${filename}`;
  return imageModules[path]?.default;
};

const products = [
  {
    id: 1,
    name: "Men's Tree Runners",
    price: "$120",
    image: getImage("1/1.png"), 
    label: "BESTSELLER",
    colors: ["1/1.png", "1/2.png", "1/3.png", "1/4.png", "1/5.png", "1/6.png", "1/7.png", "1/8.png", "1/9.png", "1/10.png"].map(getImage),
  },
  {
    id: 2,
    name: "Men's Canvas Pipers",
    price: "$90",
    image: getImage("2/1.png"),
    label: "NEW",
    colors: ["2/1.png", "2/2.png", "2/3.png", "2/4.png", "2/5.png", "2/6.png", "2/7.png",].map(getImage),
  },
  {
    id: 3,
    name: "Men's Tree Dasher 2 - Utility",
    price: "$145",
    image: getImage("3/1.png"),
    label: "NEW",
    colors: ["3/1.png", "3/2.png", "3/3.png", "3/4.png"].map(getImage),
  },
  {
    id: 4,
    name: "Men's Tree Dasher 2",
    price: "$135",
    image: getImage("4/1.png"),
    label: "BESTSELLER",
    colors: ["4/1.png", "4/2.png", "4/3.png", "4/4.png", "4/5.png", "4/6.png","4/7.png","4/8.png","4/9.png","4/10.png","4/11.png"].map(getImage),
  },
  {
    id: 5,
    name: "Men's Tree Gliders",
    price: "$135",
    image: getImage("5/1.png"),
    label: "BESTSELLER",
    colors: ["5/1.png", "5/2.png", "5/3.png", "5/4.png", "5/5.png", "5/6.png","5/7.png","5/8.png","5/9.png","5/10.png"].map(getImage),
  },
  {
    id: 6,
    name: "Men's Tree Dasher Relay",
    price: "$130",
    image: getImage("6/1.png"),
    label: "EASY ON, EASY OFF",
    colors: ["6/1.png", "6/2.png", "6/3.png", "6/4.png", "6/5.png", "6/6.png","6/7.png"].map(getImage),
  },
  {
    id: 7,
    name: "Men's Wool Runner Mizzles",
    price: "$125",
    image: getImage("7/1.png"),
    label: "WATER-REPELLENT",
    colors: ["7/1.png", "7/2.png", "7/3.png", "7/4.png", "7/5.png", "7/6.png","7/7.png"].map(getImage),
  },
  {
    id: 8,
    name: "Men's Wool Dasher Mizzles",
    price: "$145",
    image: getImage("8/1.png"),
    label: "WATER-REPELLENT",
    colors: ["8/1.png", "8/2.png", "8/3.png", "8/4.png", "8/5.png",].map(getImage),
  },
  {
    id: 9,
    name: "Men's SuperLight Tree Runners",
    price: "$115",
    image: getImage("9/1.png"),
    label: "LIGHTWEIGHT",
    colors: ["9/1.png", "9/2.png", "9/3.png", "9/4.png", "9/5.png",].map(getImage),
  },
  {
    id: 10,
    name: "Men's Trail Runners",
    price: "$140",
    image: getImage("10/1.png"),
    label: "BESTSELLER",
    colors: ["10/1.png", "10/2.png", "10/3.png", "10/4.png", "10/5.png", "10/6.png"].map(getImage),
  },
];

export default products;
