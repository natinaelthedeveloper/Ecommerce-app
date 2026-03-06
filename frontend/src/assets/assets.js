import p_img1 from "./p_img1.webp";
import p_img1_1 from "./p_img1_1.webp";
import p_img1_2 from "./p_img1_2.webp";
import p_img1_3 from "./p_img1_3.webp";
import p_img2 from "./p_img2.webp";
import p_img2_1 from "./p_img2_1.webp";
import p_img2_2 from "./p_img2_2.webp";
import p_img2_3 from "./p_img2_3.webp";
import p_img3 from "./p_img3.jpg";
import p_img4 from "./p_img4.jpg";
import p_img4_1 from "./p_img4_1.webp";
import p_img4_2 from "./p_img4_2.webp";
import p_img5 from "./p_img5.jpg";
import p_img6_1 from "./p_img6_1.jpg";
import p_img6_2 from "./p_img6_2.jpg";
import p_img7 from "./p_img7.webp";
import p_img7_1 from "./p_img7_1.webp";
import p_img7_2 from "./p_img7_2.webp";
import p_img7_3 from "./p_img7_3.webp";
import p_img8 from "./p_img8.jpg";
import p_img9 from "./p_img9.webp";
import p_img9_1 from "./p_img9_1.webp";
import p_img9_2 from "./p_img9_2.webp";
import p_img10 from "./p_img10.webp";
import p_img10_1 from "./p_img10_1.webp";
import p_img10_2 from "./p_img10_2.webp";
import p_img11 from "./p_img11.webp";
import p_img11_1 from "./p_img11_1.webp";
import p_img11_2 from "./p_img11_2.webp";
import p_img12 from "./p_img12.webp";
import p_img12_1 from "./p_img12_1.webp";
import p_img12_2 from "./p_img12_2.webp";
import p_img12_3 from "./p_img12_3.webp";
import p_img13 from "./p_img13.jpg";
import p_img14 from "./p_img14.jpg";
import p_img15 from "./p_img15.jpg";
import p_img16 from "./p_img16.webp";
import p_img17 from "./p_img17.jpg";
import p_img18 from "./p_img18.webp";
import p_img18_1 from "./p_img18_1.webp";
import p_img18_2 from "./p_img18_2.webp";
import p_img19 from "./p_img19.jpg";
import p_img20 from "./p_img20.jpg";
import p_img21 from "./p_img21.jpg";
import p_img22 from "./p_img22.webp";
import p_img22_1 from "./p_img22_1.webp";
import p_img22_2 from "./p_img22_2.webp";
import p_img23 from "./p_img23.webp";
import p_img23_1 from "./p_img23_1.webp";
import p_img23_2 from "./p_img23_2.webp";
import p_img23_3 from "./p_img23_3.webp";

import about_img from "./about_img.jpg";
import bin_icon from "./bin_icon.png";
import cart_icon from "./cart_icon.png";
import complet_icon from "./complet_icon.png";
import contact_icon from "./contact_img.jpg";
import cross_icon from "./cross_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import headseet_icon from "./headseet_icon.png";
import hero_img from "./hero_img.jpg";
import logo from "./logo.png";
import menu_icon from "./menu_icon.png";
import profile_icon from "./profile_icon.png";
import search_icon from "./search_icon.png";
import stripe_logo from './stripe_logo.jfif'
import star_icon from './star_icon.png'
import star_icon1 from "./star_inon1.png";


export const assets = {
  about_img,
  bin_icon,
  cart_icon,
  search_icon,
  profile_icon,
  menu_icon,
  logo,
  hero_img,
  headseet_icon,
  exchange_icon,
  dropdown_icon,
  cross_icon,
  contact_icon,
  complet_icon,
  stripe_logo,
  star_icon,
  star_icon1,
};

export const products = [
  {
    _id: "aaaaa",
    name: "T short",
    description: "men dreas",
    price: 5,
    image: [p_img1, p_img1_1, p_img1_2, p_img1_3],
    category: "men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 112436654,
    bestseller: false,
  },
  {
    _id: "aaaab",
    name: "yello",
    description: "women dreas",
    price: 5,
    image: [p_img2, p_img2_1, p_img2_2, p_img2_3],
    category: "women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: true,
  },
  {
    _id: "aaaac",
    name: "child T",
    description: "women dreas",
    price: 5,
    image: [p_img3],
    category: "women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: false,
  },
  {
    _id: "aaaad",
    name: "boy",
    description: "women dreas",
    price: 5,
    image: [p_img4, p_img4_1, p_img4_2],
    category: "men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: true,
  },
  {
    _id: "aaaae",
    name: "n3",
    description: "women dreas",
    price: 5,
    image: [p_img5],
    category: "women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: true,
  },
  {
    _id: "aaaaf",
    name: "child",
    description: "women dreas",
    price: 5,
    image: [p_img6_1, p_img6_2],
    category: "kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: false,
  },
  {
    _id: "aaaag",
    name: "nice boy",
    description: "women dreas",
    price: 5,
    image: [p_img7, p_img7_1, p_img7_2, p_img7_3],
    category: "men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: 11243634,
    bestseller: true,
  },
  {
    _id: "aaaah",
    name: "nice",
    description: "women dreas",
    price: 3,
    image: [p_img8],
    category: "women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: true,
  },
  {
    _id: "aaaai",
    name: "nice",
    description: "womendd dreas",
    price: 76,
    image: [p_img9, p_img9_1, p_img9_2],
    category: "men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: false,
  },
  {
    _id: "aaaaj",
    name: "nice",
    description: "women dreas",
    price: 98,
    image: [p_img10, p_img10_1, p_img10_2],
    category: "kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: false,
  },
  {
    _id: "aaaak",
    name: "nice",
    description: "women dd dreas",
    price: 5,
    image: [p_img11, p_img11_1, p_img11_2],
    category: "men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: true,
  },
  {
    _id: "aaaal",
    name: "nice",
    description: "women cc dreas",
    price: 56,
    image: [p_img12, p_img12_1, p_img12_2, p_img12_3],
    category: "men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: false,
  },
  {
    _id: "aaaam",
    name: "nice",
    description: "women cc dreas",
    price: 5,
    image: [p_img13],
    category: "women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: false,
  },
  {
    _id: "aaaan",
    name: "nice",
    description: "women cc dreas",
    price: 89,
    image: [p_img14],
    category: "men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: false,
  },
  {
    _id: "aaaao",
    name: "nice",
    description: "women bb dreas",
    price: 5,
    image: [p_img15],
    category: "women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: false,
  },
  {
    _id: "aaaap",
    name: "nice",
    description: "women bb dreas",
    price: 52,
    image: [p_img16],
    category: "kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: false,
  },
  {
    _id: "aaaaq",
    name: "nice",
    description: "women bb dreas",
    price: 444,
    image: [p_img17],
    category: "kids",
    subCategory: "Bottomwearr",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: false,
  },
  {
    _id: "aaaar",
    name: "nice",
    description: "women kk dreas",
    price: 5,
    image: [p_img18, p_img18_1, p_img18_2],
    category: "kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: true,
  },
  {
    _id: "aaaas",
    name: "nice",
    description: "women dreas",
    price: 165,
    image: [p_img19],
    category: "women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: false,
  },
  {
    _id: "aaaat",
    name: "nice",
    description: "women kk dreas",
    price: 5,
    image: [p_img20],
    category: "women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: false,
  },
  {
    _id: "aaaau",
    name: "nice",
    description: "women kk dreas",
    price: 34,
    image: [p_img21],
    category: "women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: false,
  },
  {
    _id: "aaaav",
    name: "nice",
    description: "women kk dreas",
    price: 34,
    image: [p_img22, p_img22_1, p_img22_2],
    category: "men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: true,
  },
  {
    _id: "aaaaw",
    name: "nice",
    description: "women kk dreas",
    price: 34,
    image: [p_img23, p_img23_1, p_img23_2, p_img23_3],
    category: "women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L"],
    date: 11243654,
    bestseller: true,
  },
];
