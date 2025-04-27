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
    bestFor: ["Everyday", "Warm Weather"],
    materials: ["Tree Fiber Blend"],
    sizesAvailable: ["8", "9", "10", "11", "12"], 
    colors: [
      { hues: ["White","Orange"], image: getImage("1/1.png") },
      { hues: ["Grey"], image: getImage("1/2.png") },
      { hues: ["Blue"], image: getImage("1/3.png") },
      { hues: ["Black"], image: getImage("1/4.png") },
      { hues: ["White","Beige","Brown"], image: getImage("1/5.png") },
      { hues: ["Black","Grey"], image: getImage("1/6.png") },
      { hues: ["Red","White"], image: getImage("1/7.png") },
      { hues: ["White","Grey"], image: getImage("1/8.png") },
      { hues: ["Black"], image: getImage("1/9.png") },
      { hues: ["Green","Beige"], image: getImage("1/10.png") }
    ],
  },
  {
    id: 2,
    name: "Men's Canvas Pipers",
    price: "$90",
    image: getImage("2/1.png"),
    label: "NEW",
    bestFor: ["Everyday"],
    materials: ["Canvas"],
    sizesAvailable: ["8", "9", "10", "11"],
    colors: [
      { hues: ["White",], image: getImage("2/1.png") },
      { hues: ["White","Brown"], image: getImage("2/2.png") },
      { hues: ["White","Blue","Beige"], image: getImage("2/3.png") },
      { hues: ["Blue","White"], image: getImage("2/4.png") },
      { hues: ["Grey"], image: getImage("2/5.png") },
      { hues: ["Black"], image: getImage("2/6.png") },
      { hues: ["Black"], image: getImage("2/7.png") }
    ],
  },
  {
    id: 3,
    name: "Men's Tree Dasher 2 - Utility",
    price: "$145",
    image: getImage("3/1.png"),
    label: "NEW",
    colors: [
      { hues: ["Brown","White"], image: getImage("3/1.png") },
      { hues: ["Black"], image: getImage("3/2.png") },
      { hues: ["White"], image: getImage("3/3.png") },
      { hues: ["White"], image: getImage("3/4.png") }
    ],
    bestFor: ["Everyday"],
    materials: ["Canvas"],
    sizesAvailable: ["8", "9", "10", "11"],
  },
  {
    id: 4,
    name: "Men's Tree Dasher 2",
    price: "$135",
    image: getImage("4/1.png"),
    label: "BESTSELLER",
    colors: [
      { hues: ["White","Blue"], image: getImage("4/1.png") },
      { hues: ["Orange"], image: getImage("4/2.png") },
      { hues: ["Grey"], image: getImage("4/3.png") },
      { hues: ["Blue"], image: getImage("4/4.png") },
      { hues: ["Black"], image: getImage("4/5.png") },
      { hues: ["White"], image: getImage("4/6.png") },
      { hues: ["Beige"], image: getImage("4/7.png") },
      { hues: ["Black","Blue"], image: getImage("4/8.png") },
      { hues: ["White","Blue"], image: getImage("4/9.png") },
      { hues: ["White"], image: getImage("4/10.png") },
      { hues: ["Grey"], image: getImage("4/11.png") }
    ],
    bestFor: ["Everyday"],
    materials: ["Canvas"],
    sizesAvailable: ["8", "9", "10", "11"],
  },
  {
    id: 5,
    name: "Men's Tree Gliders",
    price: "$135",
    image: getImage("5/1.png"),
    label: "BESTSELLER",
    colors: [
      { hues: ["Blue","White"], image: getImage("5/1.png") },
      { hues: ["White","Orange"], image: getImage("5/2.png") },
      { hues: ["Black","White"], image: getImage("5/3.png") },
      { hues: ["Beige"], image: getImage("5/4.png") },
      { hues: ["White","Red"], image: getImage("5/5.png") },
      { hues: ["Black"], image: getImage("5/6.png") },
      { hues: ["Grey"], image: getImage("5/7.png") },
      { hues: ["Blue"], image: getImage("5/8.png") },
      { hues: ["White"], image: getImage("5/9.png") },
    ],
    bestFor: ["Everyday"],
    materials: ["Canvas"],
    sizesAvailable: ["8", "9", "10", "11"],
  },
  {
    id: 6,
    name: "Men's Tree Dasher Relay",
    price: "$130",
    image: getImage("6/1.png"),
    label: "EASY ON, EASY OFF",
    colors: [
      { hues: ["Blue"], image: getImage("6/1.png") },
      { hues: ["Beige"], image: getImage("6/2.png") },
      { hues: ["Blue"], image: getImage("6/3.png") },
      { hues: ["Black"], image: getImage("6/4.png") },
      { hues: ["White"], image: getImage("6/5.png") },
      { hues: ["Black"], image: getImage("6/6.png") },
      { hues: ["Green","Black"], image: getImage("6/7.png") }
    ],
    bestFor: ["Everyday"],
    materials: ["Canvas"],
    sizesAvailable: ["8", "9", "10", "11"],
  },
  {
    id: 7,
    name: "Men's Wool Runner Mizzles",
    price: "$125",
    image: getImage("7/1.png"),
    label: "WATER-REPELLENT",
    colors: [
      { hues: ["Grey"], image: getImage("7/1.png") },
      { hues: ["Grey","White"], image: getImage("7/2.png") },
      { hues: ["Black"], image: getImage("7/3.png") },
      { hues: ["Blue"], image: getImage("7/4.png") },
      { hues: ["Blue"], image: getImage("7/5.png") },
      { hues: ["Black"], image: getImage("7/6.png") },
      { hues: ["Beige"], image: getImage("7/7.png") }
    ],
    bestFor: ["Everyday"],
    materials: ["Canvas"],
    sizesAvailable: ["8", "9", "10", "11"],
  },
  {
    id: 8,
    name: "Men's Wool Dasher Mizzles",
    price: "$145",
    image: getImage("8/1.png"),
    label: "WATER-REPELLENT",
    colors: [
      { hues: ["Beige"], image: getImage("8/1.png") },
      { hues: ["Grey"], image: getImage("8/2.png") },
      { hues: ["Beige"], image: getImage("8/3.png") },
      { hues: ["Blue"], image: getImage("8/4.png") },
      { hues: ["Black"], image: getImage("8/5.png") }
    ],
    bestFor: ["Everyday"],
    materials: ["Canvas"],
    sizesAvailable: ["8", "9", "10", "11"],
  },
  {
    id: 9,
    name: "Men's SuperLight Tree Runners",
    price: "$115",
    image: getImage("9/1.png"),
    label: "LIGHTWEIGHT",
    colors: [
      { hues: ["Blue"], image: getImage("9/1.png") },
      { hues: ["White","Grey"], image: getImage("9/2.png") },
      { hues: ["Black"], image: getImage("9/3.png") },
      { hues: ["Beige"], image: getImage("9/4.png") },
      { hues: ["White"], image: getImage("9/5.png") }
    ],
    bestFor: ["Everyday"],
    materials: ["Canvas"],
    sizesAvailable: ["8", "9", "10", "11"],
  },
  {
    id: 10,
    name: "Men's Trail Runners",
    price: "$140",
    image: getImage("10/1.png"),
    label: "BESTSELLER",
    colors: [
      { hues: ["Beige","Grey","White"], image: getImage("10/1.png") },
      { hues: ["Blue","White"], image: getImage("10/2.png") },
      { hues: ["Blue","Black"], image: getImage("10/3.png") },
      { hues: ["Grey"], image: getImage("10/4.png") },
      { hues: ["Black"], image: getImage("10/5.png") },
      { hues: ["Brown","Beige"], image: getImage("10/6.png") }
    ],
    bestFor: ["Everyday"],
    materials: ["Canvas"],
    sizesAvailable: ["8", "9", "10", "11"],
  }
];

export default products;
