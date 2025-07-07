import styled from "styled-components";

type ButtonPanelType = {
  label?: string;
  className: string;
  onClick: () => void;
  Icon?: React.ReactElement;
};

export default function ButtonPanel({
  label,
  className,
  onClick,
  Icon,
}: ButtonPanelType) {
  return (
    <ButtonPanelStyled className={className} onClick={onClick}>
      {Icon && Icon}
      {label && <span>{label}</span>}
    </ButtonPanelStyled>
  );
}

const ButtonPanelStyled = styled.button`
  height: 43px;
  border-radius: 5px 5px 0px 0px;
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
`;
