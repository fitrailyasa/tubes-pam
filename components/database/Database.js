export const COLOURS = {
  white: "#FFFFFF",
  black: "#000000",
  green: "#00CF7E",
  red: "#C04345",
  backgroundLight: "#ADEFD1",
  backgroundDark: "#00203F",
};

export const Items = [
  {
    id: 1,
    category: "product",
    productName: "Nintendo Switch V2 Console",
    productPrice: 3199000,
    description:
      "Nintendo switch console New Model V2 (Extra life Battery)",
    isOff: true,
    offPercentage: 10,
    productImage: require("../database/images/Elektronik/N1.png"),
    isAvailable: true,
    productImageList: [
      require("../database/images/Elektronik/N1.png"),
      require("../database/images/Elektronik/N2.png"),
      require("../database/images/Elektronik/N3.jpg"),
    ],
  },
  {
    id: 2,
    category: "product",
    productName: "Sony Playstation™ 5 Console",
    productPrice: 9799000,
    description:
      "The PS5™ console unleashes new gaming possibilities that you never anticipated",
    isOff: false,
    productImage: require("../database/images/Elektronik/p1.png"),
    isAvailable: true,
    productImageList: [
      require("../database/images/Elektronik/p1.png"),
      require("../database/images/Elektronik/p2.png"),
      require("../database/images/Elektronik/p3.png"),
    ],
  },
  {
    id: 3,
    category: "accessory",
    productName: "Converse X DC Comic ",
    productPrice: 1999000,
    description:
      "Converse X DC Comic Chuck Taylor All Star 70 Hi",
    isOff: true,
    offPercentage: 18,
    productImage: require("../database/images/Fashion/sepatu_1.png"),
    isAvailable: true,
    productImageList: [
      require("../database/images/Fashion/sepatu_1.png"),
      require("../database/images/Fashion/sepatu_1.png"),
      require("../database/images/Fashion/sepatu_1.png"),
    ],
  },
  {
    id: 4,
    category: "accessory",
    productName: "1 Mid SE Take Flight",
    productPrice: 3399000,
    description:
      "Compared to the AJ1 High, the Air Jordan 1 Mid lacks many of the restrictions arbitrability placed by the public",
    isOff: false,
    productImage: require("../database/images/Fashion/sepatu.2.png"),
    isAvailable: true,
    productImageList: [
      require("../database/images/Fashion/sepatu.2.png"),
      require("../database/images/Fashion/sepatu.2_1.png"),
      require("../database/images/Fashion/sepatu.2_2.png"),
    ],
  },
  {
    id: 5,
    category: "accessory",
    productName: "RITOM_W22 Regular Fit Sweater Dark Blue",
    productPrice: 2499000,
    description:
      "A sporty sweater in a straight fit by BOSS Menswear. Detailed with piping and a curved BOSS logo ",
    isOff: false,
    productImage: require("../database/images/Fashion/ls.png"),
    isAvailable: false,
    productImageList: [
      require("../database/images/Fashion/ls.png"),
      require("../database/images/Fashion/ls_2.png"),
      require("../database/images/Fashion/ls3.png"),
    ],
  },
  {
    id: 6,
    category: "accessory",
    productName: "Dressed Fox Patch Classic T-Shirt Black",
    productPrice: 1299000,
    description:
      "Short sleeve cotton t-shirt. Classic cut with Dressed Fox patch embroidered on the breast.",
    isOff: false,
    productImage: require("../database/images/Fashion/baju.png"),
    isAvailable: true,
    productImageList: [
      require("../database/images/Fashion/baju.png"),
      require("../database/images/Fashion/baju_2.png"),
      require("../database/images/Fashion/baju_3.png"),
    ],
  },
];
