import { useContext } from "react";
import CardContainer from "./CardContainer";
import EmptyAdmin from "./emptyMenu/EmptyAdmin";
import EmptyCustomer from "./emptyMenu/EmptyCustomer";
import { MenuContext } from "../../../../context/MenuContext";
// import Loading from "../../../reusable-ui/Loading";

export default function ListCard() {
  const { isAdmin, menu, 
    // loading 
    } = useContext(MenuContext);

  return (
    <div>
      {
      // loading ? 
      // <Loading text="Chargement du menu" /> : 
      menu.length > 0 
      ? (
        <CardContainer />
      ) : isAdmin ? (
        <EmptyAdmin />
      ) : (
        <EmptyCustomer />
      )} 
    </div>
  );
}

