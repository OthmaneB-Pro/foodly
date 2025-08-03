import Input from "../../../../../reusable-ui/Input";
import type { MenuType } from "../../../../../../fakeData/MenuType";
import styled from "styled-components";
import { getInputs } from "./getInputs";

type InputValues = {
  inputValues: MenuType;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export default function RightInput({ inputValues, onChange }: InputValues) {
  return (
    <RightInputStyled>
      {getInputs.slice(0, -3).map((value) => (
        <Input
          key={value.name}
          {...value}
          value={inputValues[value.name as keyof MenuType] as string | number}
          onChange={onChange}
        />
      ))}

      <div className="small-inputs-wrapper">
        {getInputs.slice(-3).map((value) => (
          <Input
            key={value.name}
            {...value}
            value={inputValues[value.name as keyof MenuType] as string | number}
            onChange={onChange}
          />
        ))}
      </div>
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

  .input_small {
    padding: 8px 16px;
    width: 122px;
    background: #f5f5f7;

    input {
      width: 83px;
      background: #f5f5f7;
    }
  }

  .small-inputs-wrapper {
    display: flex;
    gap: 8px;
  }
`;
