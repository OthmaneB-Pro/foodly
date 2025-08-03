import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";
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
    className: "input_small",
  },
  {
    placeholder: "",
    Icon: <FiPackage />,
    type: "select",
    name: "isAvailable",
    className: "input_small",
    options: [
      { label: "En stock", value: "true" },
      { label: "En rupture", value: "false" },
    ],
  },
  {
    placeholder: "",
    Icon: <GoMegaphone />,
    type: "select",
    name: "isAdvertised",
    className: "input_small",
    options: [
      { label: "Sans pub", value: "false" },
      { label: "Avec pub", value: "true" },
    ],
  },
];
