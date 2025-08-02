import Input from "../../../../../reusable-ui/Input";
import type { MenuType } from "../../../../../../fakeData/MenuType";
import styled from "styled-components";
import { getInputs } from "./getInputs";

type InputValues = {
  inputValues: MenuType;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function RightInput({ inputValues, onChange }: InputValues) {
  return (
    <RightInputStyled>
      {getInputs.map((value) => (
        <Input
          key={value.name}
          placeholder={value.placeholder}
          Icon={value.Icon}
          type={value.type}
          value={inputValues[value.name as keyof MenuType] as string | number}
          name={value.name}
          onChange={onChange}
          className={value.className}
        />
      ))}
    </RightInputStyled>
  );
}

const RightInputStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .input {
    padding: 8px 16px;
    width: 448px;
    background: #f5f5f7;

    input {
      width: 412px;
      background: #f5f5f7;
    }
  }
  .input_price {
    padding: 8px 16px;
    width: 122px;
    background: #f5f5f7;
   

    input {
      width: 83px;
      background: #f5f5f7;
    }
  }
`;
