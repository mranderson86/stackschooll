import React from "react";

import { Select, Option, Wrapper } from "./styles";

import ArrowIconSVG from "../../assets/images/icons/arrow-select-svg.svg";

interface Item {
  id: number;
  option: string;
}

export interface OptionsProps {
  items: Item[];
}

const Options: React.FC<OptionsProps> = ({ items }): JSX.Element => {
  return (
    <Wrapper>
      <Select>
        {items.map(item => {
          return (
            <Option key={item.id} value={item.id}>
              {item.option}
            </Option>
          );
        })}
      </Select>
      <ArrowIconSVG />
    </Wrapper>
  );
};

export { Options };
