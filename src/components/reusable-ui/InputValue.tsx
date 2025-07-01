import styled from "styled-components";
import { theme } from "../../theme";

type inputType = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
  required: boolean;
  Logo: React.ReactNode;
};

export default function InputValue({
  value,
  onChange,
  placeholder,
  type,
  required,
  Logo,
}: inputType) {
  return (
    <InputValueStyled>
      <div className="logo">{Logo && Logo}</div>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </InputValueStyled>
  );
}

const InputValueStyled = styled.div`
  width: 352px;
  height: 19px;
  background: white;
  display: flex;
  align-items: center;
  padding: 18px 24px 18px 24px;
  border-radius: 5px;

  .logo{
    color : ${theme.colors.greyBlue};
    margin-right: 12px;
  }
  input{
    border: none;
    opacity: 50%;
    padding: 1px 2px 1px 2px;
    font-size: ${theme.fonts.P0};
  }
`;
