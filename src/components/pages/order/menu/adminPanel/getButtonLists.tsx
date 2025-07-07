import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getButtonLists = (
  mode: "add" | "edit",
  selectMode: (m: "add" | "edit") => void
) => [
  {
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    className: mode === "add" ? "dark" : "white",
    onClick: () => selectMode("add"),
  },
  {
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    className: mode === "edit" ? "dark" : "white",
    onClick: () => selectMode("edit"),
  },
];
