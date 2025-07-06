import styled from "styled-components";
import ListPanel from "./ListPanel";
import { useContext, useState } from "react";
import { MenuContext } from "../../../../../context/MenuContext";

export default function AdminPanel() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const { mode } = useContext(MenuContext);

  return (
    <AdminPanelStyled>
      <ListPanel isPanelOpen={isPanelOpen} setIsPanelOpen={setIsPanelOpen} />

      {isPanelOpen && (
        <div className="bloc">
          {mode === "add" ? "Ajouter un produit" : "Modifier un produit"}
        </div>
      )}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: sticky;
  bottom: 0;

  .bloc {
    height: 210px;
    background-color: white;
    border-top: 1px solid #e4e5e9;
    box-shadow: 0px -6px 8px -2px #0000001a;
    padding: 20px;
  }
`;
