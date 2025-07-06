import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";

export const buttonLists = (
  isPanelOpen: boolean,
  mode: "add" | "edit",
  handlers: {
    togglePanel: () => void;
    selectMode: (m: "add" | "edit") => void;
  }
) => [
  {
    label: "",
    Icon: isPanelOpen ? <FiChevronDown /> : <FiChevronUp />,
    className: !isPanelOpen ? "dark" : "white",
    onClick: handlers.togglePanel,
  },
  {
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    className: mode === "add" ? "dark" : "white",
    onClick: () => handlers.selectMode("add"),
  },
  {
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    className: mode === "edit" ? "dark" : "white",
    onClick: () => handlers.selectMode("edit"),
  },
];
