const imageModules = import.meta.glob('../assets/shoes/womenshoes/**/*.{png,jpg,jpeg,svg}', { eager: true });

const getImage = (filename) => {
  const path = `../assets/shoes/womenshoes/${filename}`;
  return imageModules[path]?.default;
};

const products = [
  {
    id: 1,
    name: "Women's Tree Runners",
    price: "$120",
    image: getImage("1/1.png"), 
    label: "BESTSELLER",
    bestFor: ["Everyday", "Warm Weather"],
    materials: ["Tree Fiber Blend", "Cotton Blend"],
    sizesAvailable: [
      "8", "8.5", "9", "9.5",
      "10", "10.5", "11", "11.5",
      "12", "12.5", "13", "13.5", "14",
      "W5/M3", "W6/M4", "W7/M5", "W8/M6",
      "W9/M7", "W10/M8", "W11/M9", "W12/M10",
      "W13/M11", "W14/M12", "W15/M13", "W16/M14"
    ],
    colors: [
      { hues: ["Red","White"], image: getImage("1/1.png") },
      { hues: ["Grey"], image: getImage("1/2.png") },
      { hues: ["White"], image: getImage("1/3.png") },
      { hues: ["Black"], image: getImage("1/4.png") },
      { hues: ["Beige", "Brown"], image: getImage("1/5.png") },
      { hues: ["Black", "White"], image: getImage("1/6.png") },
      { hues: ["Red"], image: getImage("1/7.png") },
      { hues: ["Blue"], image: getImage("1/8.png") },
      { hues: ["Black"], image: getImage("1/9.png") },
      { hues: ["Green", "Beige"], image: getImage("1/10.png") }
    ],
  },
  {
    id: 2,
    name: "Women's Canvas Pipers",
    price: "$90",
    image: getImage("2/1.png"),
    label: "NEW",
    bestFor: ["Everyday", "Cool Weather"],
    materials: ["Canvas"],
    sizesAvailable: [
      "8", "8.5", "9", "9.5",
      "10", "10.5", "11", "11.5",
      "12", "12.5", "13", "13.5", "14",
      "W5/M3", "W6/M4", "W7/M5", "W8/M6",
      "W9/M7", "W10/M8", "W11/M9", "W12/M10",
      "W13/M11", "W14/M12", "W15/M13", "W16/M14"
    ],
    colors: [
      { hues: ["White"], image: getImage("2/1.png") },
      { hues: ["White", "Brown"], image: getImage("2/2.png") },
      { hues: ["White", "Blue", "Beige"], image: getImage("2/3.png") },
      { hues: ["Blue", "White"], image: getImage("2/4.png") },
      { hues: ["Grey"], image: getImage("2/5.png") },
      { hues: ["Black"], image: getImage("2/6.png") },
      { hues: ["Black"], image: getImage("2/7.png") }
    ],
  },
  {
    id: 3,
    name: "Women's Tree Dasher 2 - Utility",
    price: "$145",
    image: getImage("3/1.png"),
    label: "NEW",
    bestFor: ["Everyday", "Active", "Cool Weather"],
    materials: ["Tree Fiber Blend", "Cotton Blend"],
    sizesAvailable: [
      "8", "8.5", "9", "9.5",
      "10", "10.5", "11", "11.5",
      "12", "12.5", "13", "13.5", "14",
      "W5/M3", "W6/M4", "W7/M5", "W8/M6",
      "W9/M7", "W10/M8", "W11/M9", "W12/M10",
      "W13/M11", "W14/M12", "W15/M13", "W16/M14"
    ],
    colors: [
      { hues: ["Brown", "White"], image: getImage("3/1.png") },
      { hues: ["Black"], image: getImage("3/2.png") },
      { hues: ["White"], image: getImage("3/3.png") },
      { hues: ["White"], image: getImage("3/4.png") }
    ],
  },
  {
    id: 4,
    name: "Women's Tree Dasher 2",
    price: "$135",
    image: getImage("4/1.png"),
    label: "BESTSELLER",
    bestFor: ["Everyday", "Active", "Warm Weather"],
    materials: ["Tree Fiber Blend", "Cotton Blend", "Corduroy"],
    sizesAvailable: [
      "8", "8.5", "9", "9.5",
      "10", "10.5", "11", "11.5",
      "12", "12.5", "13", "13.5", "14",
      "W5/M3", "W6/M4", "W7/M5", "W8/M6",
      "W9/M7", "W10/M8", "W11/M9", "W12/M10",
      "W13/M11", "W14/M12", "W15/M13", "W16/M14"
    ],
    colors: [
      { hues: ["White", "Mauve"], image: getImage("4/1.png") },
      { hues: ["Orange"], image: getImage("4/2.png") },
      { hues: ["White","Blue"], image: getImage("4/3.png") },
      { hues: ["Blue"], image: getImage("4/4.png") },
      { hues: ["Black"], image: getImage("4/5.png") },
      { hues: ["White"], image: getImage("4/6.png") },
      { hues: ["Beige"], image: getImage("4/7.png") },
      { hues: ["Black", "Blue"], image: getImage("4/8.png") },
      { hues: ["White", "Blue"], image: getImage("4/9.png") },
      { hues: ["White"], image: getImage("4/10.png") },
      { hues: ["Grey"], image: getImage("4/11.png") },
      { hues: ["Grey"], image: getImage("4/12.png") }
    ],
  },
  {
    id: 5,
    name: "Women's Tree Gliders",
    price: "$135",
    image: getImage("5/1.png"),
    label: "BESTSELLER",
    bestFor: ["Everyday", "Active", "Cool Weather"],
    materials: ["Tree Fiber Blend"],
    sizesAvailable: [
      "8", "8.5", "9", "9.5",
      "10", "10.5", "11", "11.5",
      "12", "12.5", "13", "13.5", "14",
      "W5/M3", "W6/M4", "W7/M5", "W8/M6",
      "W9/M7", "W10/M8", "W11/M9", "W12/M10",
      "W13/M11", "W14/M12", "W15/M13", "W16/M14"
    ],
    colors: [
      { hues: ["Mauve", "White"], image: getImage("5/1.png") },
      { hues: ["White", "Orange"], image: getImage("5/2.png") },
      { hues: ["Black", "White"], image: getImage("5/3.png") },
      { hues: ["Beige"], image: getImage("5/4.png") },
      { hues: ["White", "Red"], image: getImage("5/5.png") },
      { hues: ["White","Blue"], image: getImage("5/6.png") },
      { hues: ["Grey"], image: getImage("5/7.png") },
      { hues: ["Blue"], image: getImage("5/8.png") },
      { hues: ["White"], image: getImage("5/9.png") },
      { hues: ["Black"], image: getImage("5/10.png") },

    ],
  },
  {
    id: 6,
    name: "Women's Tree Dasher Relay",
    price: "$130",
    image: getImage("6/1.png"),
    label: "EASY ON, EASY OFF",
    bestFor: ["Everyday", "Active", "Warm Weather"],
    materials: ["Tree Fiber Blend"],
    sizesAvailable: [
      "8", "8.5", "9", "9.5",
      "10", "10.5", "11", "11.5",
      "12", "12.5", "13", "13.5", "14",
      "W5/M3", "W6/M4", "W7/M5", "W8/M6",
      "W9/M7", "W10/M8", "W11/M9", "W12/M10",
      "W13/M11", "W14/M12", "W15/M13", "W16/M14"
    ],
    colors: [
      { hues: ["Mauve"], image: getImage("6/1.png") },
      { hues: ["Beige"], image: getImage("6/2.png") },
      { hues: ["Blue"], image: getImage("6/3.png") },
      { hues: ["Blue"], image: getImage("6/4.png") },
      { hues: ["White"], image: getImage("6/5.png") },
      { hues: ["Black"], image: getImage("6/6.png") },
      { hues: ["Green", "Black"], image: getImage("6/7.png") },
      { hues: ["Black"], image: getImage("6/7.png") }
    ],
  },
  {
    id: 7,
    name: "Women's Wool Runner Mizzles",
    price: "$125",
    image: getImage("7/1.png"),
    label: "WATER-REPELLENT",
    bestFor: ["Everyday", "Active", "Cool Weather", "Wet Weather"],
    materials: ["Wool"],
    sizesAvailable: [
      "8", "8.5", "9", "9.5",
      "10", "10.5", "11", "11.5",
      "12", "12.5", "13", "13.5", "14",
      "W5/M3", "W6/M4", "W7/M5", "W8/M6",
      "W9/M7", "W10/M8", "W11/M9", "W12/M10",
      "W13/M11", "W14/M12", "W15/M13", "W16/M14"
    ],
    colors: [
      { hues: ["Beige"], image: getImage("7/1.png") },
      { hues: ["Grey", "White"], image: getImage("7/2.png") },
      { hues: ["Black"], image: getImage("7/3.png") },
      { hues: ["Blue"], image: getImage("7/4.png") },
      { hues: ["Navy"], image: getImage("7/5.png") },
      { hues: ["Black"], image: getImage("7/6.png") },
      { hues: ["Grey"], image: getImage("7/7.png") }
    ],
  },
  {
    id: 8,
    name: "Women's Wool Dasher Mizzles",
    price: "$145",
    image: getImage("8/1.png"),
    label: "WATER-REPELLENT",
    bestFor: ["Everyday", "Active", "Cool Weather", "Wet Weather"],
    materials: ["Wool"],
    sizesAvailable: [
      "8", "8.5", "9", "9.5",
      "10", "10.5", "11", "11.5",
      "12", "12.5", "13", "13.5", "14",
      "W5/M3", "W6/M4", "W7/M5", "W8/M6",
      "W9/M7", "W10/M8", "W11/M9", "W12/M10",
      "W13/M11", "W14/M12", "W15/M13", "W16/M14"
    ],
    colors: [
      { hues: ["Beige"], image: getImage("8/1.png") },
      { hues: ["Grey"], image: getImage("8/2.png") },
      { hues: ["Beige"], image: getImage("8/3.png") },
      { hues: ["Blue"], image: getImage("8/4.png") },
      { hues: ["Black"], image: getImage("8/5.png") }
    ],
  },
  {
    id: 9,
    name: "Women's SuperLight Tree Runners",
    price: "$115",
    image: getImage("9/1.png"),
    label: "LIGHTWEIGHT",
    bestFor: ["Everyday"],
    materials: ["Tree Fiber Blend", "Cotton Blend"],
    sizesAvailable: [
      "8", "8.5", "9", "9.5",
      "10", "10.5", "11", "11.5",
      "12", "12.5", "13", "13.5", "14",
      "W5/M3", "W6/M4", "W7/M5", "W8/M6",
      "W9/M7", "W10/M8", "W11/M9", "W12/M10",
      "W13/M11", "W14/M12", "W15/M13", "W16/M14"
    ],
    colors: [
      { hues: ["Blue"], image: getImage("9/1.png") },
      { hues: ["Grey", "White"], image: getImage("9/2.png") },
      { hues: ["Black"], image: getImage("9/3.png") },
      { hues: ["Beige"], image: getImage("9/4.png") },
      { hues: ["White"], image: getImage("9/5.png") }
    ],
  },
  {
    id: 10,
    name: "Women's Trail Runners",
    price: "$140",
    image: getImage("10/1.png"),
    label: "BESTSELLER",
    bestFor: ["Everyday", "Active", "Wet Weather"],
    materials: ["Tree Fiber Blend"],
    sizesAvailable: [
      "8", "8.5", "9", "9.5",
      "10", "10.5", "11", "11.5",
      "12", "12.5", "13", "13.5", "14",
      "W5/M3", "W6/M4", "W7/M5", "W8/M6",
      "W9/M7", "W10/M8", "W11/M9", "W12/M10",
      "W13/M11", "W14/M12", "W15/M13", "W16/M14"
    ],
    colors: [
      { hues: ["Beige", "Grey"], image: getImage("10/1.png") },
      { hues: ["Blue", "White"], image: getImage("10/2.png") },
      { hues: ["Navy", "Black"], image: getImage("10/3.png") },
      { hues: ["Grey"], image: getImage("10/4.png") },
      { hues: ["Black"], image: getImage("10/5.png") },
      { hues: ["Brown", "Beige"], image: getImage("10/6.png") }
    ],
  }
];

export default products;
