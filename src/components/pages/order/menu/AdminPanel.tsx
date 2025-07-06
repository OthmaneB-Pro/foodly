import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      <button className="first">
        <FiChevronUp />
      </button>
      <button>
        <AiOutlinePlus />
        <span>Ajouter un produit</span>
      </button>
      <button>
        <MdModeEditOutline /> <span>Modifier un produit</span>
      </button>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: sticky;
  bottom: 0;
  padding-left: 70px;
  display: flex;
  gap: 1px;

  .first {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }
  button {
    height: 43px;
    border-radius: 5px 5px 0px 0px;
    background: ${theme.colors.white};
    color: ${theme.colors.greySemiDark};
    border-color: ${theme.colors.greyLight};
    border: 1px solid ${theme.colors.greyLight};
    border-bottom: none;
    padding: 13px 22px 13px 22px;
    display: flex;
    cursor: pointer;
    box-shadow: 0px -6px 8px -2px #0000001a;

    span {
      margin-left: 13px;

      &:hover {
        text-decoration: underline;
      }
    }
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
