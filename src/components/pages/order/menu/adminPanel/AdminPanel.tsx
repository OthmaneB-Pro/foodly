import styled from "styled-components";
import ListPanel from "./ListPanel";
import { useContext } from "react";
import { MenuContext } from "../../../../../context/MenuContext";
import AddPanel from "./addPanel/AddPanel";
import EditPanel from "./editPanel/EditPanel";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function AdminPanel() {
  const { mode, isPanelOpen, setIsPanelOpen } = useContext(MenuContext);

  return (
    <TransitionGroup component={AdminPanelStyled}>
      <CSSTransition classNames={"animation-panel"} timeout={5000}>
        <div>
          <ListPanel
            isPanelOpen={isPanelOpen}
            setIsPanelOpen={setIsPanelOpen}
          />

          {isPanelOpen && (
            <div className="bloc">
              {mode === "add" ? <AddPanel /> : <EditPanel />}
            </div>
          )}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

const AdminPanelStyled = styled.div`
  position: sticky;
  bottom: 0;
  margin-left: 350px;

  .animation-panel-enter {
    opacity: 0;
    transform: translateY(200px);
  }

  .animation-panel-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s ease;
  }

  .animation-panel-exit {
    opacity: 1;
    transform: translateY(0);
  }

  .animation-panel-exit-active {
    opacity: 0;
    transform: translateY(200px);
    transition: all 0.5s ease;
  }

  .bloc {
    height: 210px;
    background-color: white;
    border-top: 1px solid #e4e5e9;
    box-shadow: 0px -6px 8px -2px #0000001a;
    padding: 20px;
  }
`;
