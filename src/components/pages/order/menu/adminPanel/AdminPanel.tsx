import styled from "styled-components";
import ListPanel from "./ListPanel";
import { useContext } from "react";
import { MenuContext } from "../../../../../context/MenuContext";
import AddPanel from "./addPanel/AddPanel";
import EditPanel from "./editPanel/EditPanel";

export default function AdminPanel() {
  const { mode, isPanelOpen, setIsPanelOpen } = useContext(MenuContext);

  return (
    <AdminPanelStyled>
      <ListPanel isPanelOpen={isPanelOpen} setIsPanelOpen={setIsPanelOpen} />

      {isPanelOpen && (
        <div className="bloc">
          {mode === "add" ? <AddPanel /> : <EditPanel />}
        </div>
      )}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: sticky;
  bottom: 0;
  margin-left: 350px;
  z-index: 100;

  .bloc {
    height: 210px;
    background-color: white;
    border-top: 1px solid #e4e5e9;
    box-shadow: 0px -6px 8px -2px #0000001a;
    padding: 20px;
  }
`;
