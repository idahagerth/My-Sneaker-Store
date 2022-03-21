import { atom } from "recoil";

export const shopping = [
  {
    id: 1,
    title: "Reebok",
    price: "1500",
    description:
      "DESCRIPTION: A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.",
    photo: "/img/img1.jpg",
  },
  {
    id: 2,
    title: "Vans",
    price: "1500",
    description:
      "DESCRIPTION: A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.",
    photo: "/img/img2.jpg",
  },
  {
    id: 3,
    title: "Reebok",
    price: "2000",
    description:
      "DESCRIPTION: A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.",
    photo: "/img/img3.jpg",
  },
  {
    id: 4,
    title: "Vans",
    price: "1700",
    description:
      "DESCRIPTION: A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.",
    photo: "/img/img4.jpg",
  },
  {
    id: 5,
    title: "Reebok",
    price: "1200",
    description:
      "DESCRIPTION: A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.",
    photo: "/img/img5.jpg",
  },
  {
    id: 6,
    title: "Nike",
    price: "900",
    description:
      "DESCRIPTION: A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.",
    photo: "/img/img6.jpg",
  },
];

export const shoppingState = atom({
  key: "shoppingState",
  default: shopping,
});
