import { useContext } from "react";
import CardContainer from "./CardContainer";
import EmptyAdmin from "./emptyMenu/EmptyAdmin";
import EmptyCustomer from "./emptyMenu/EmptyCustomer";
import { MenuContext } from "../../../../context/MenuContext";

export default function ListCard() {
  const { isAdmin, menu } = useContext(MenuContext);
  return (
    <div>
      {menu.length > 0 ? (
        <CardContainer />
      ) : isAdmin ? (
        <EmptyAdmin />
      ) : (
        <EmptyCustomer />
      )}
    </div>
  );
}

