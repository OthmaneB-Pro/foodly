import styled from "styled-components";
import { theme } from "../../theme";

type inputType = {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
  required?: boolean;
  Icon: React.ReactNode;
  className?: string;
  name?: string;
};

export default function Input({
  value,
  onChange,
  placeholder,
  type,
  required,
  Icon,
  className,
  name,
}: inputType) {
  return (
    <InputValueStyled className={className}>
      <div className="icon">{Icon && Icon}</div>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
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
  border-radius: ${theme.borderRadius.round};

  .icon {
    color: ${theme.colors.greyBlue};
    margin-right: 12px;
  }
  input {
    width: 300px;
    border: none;
    opacity: 50%;
    padding: 1px 2px 1px 2px;
    font-size: ${theme.fonts.P0};
  }
`;
