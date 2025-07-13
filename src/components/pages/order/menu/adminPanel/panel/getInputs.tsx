import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";

export const getInputs = [
  {
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger />,
    type: "text",
    name: "title",
    className: "input",
  },
  {
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill />,
    type: "text",
    name: "imageSource",
    className: "input",
  },
  {
    placeholder: "Prix",
    Icon: <MdOutlineEuro />,
    type: "text",
    name: "price",
    className: "input",
  },
];
