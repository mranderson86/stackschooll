import React from "react";

import { SearchAddWrapper } from "./styles";
import { Button } from "../../../components/Button";
import { InputSearch } from "../../../components/InputSearch";

export interface SearchAddProps {
  onClick?: () => void;
}

const SearchAdd: React.FC<SearchAddProps> = ({ onClick }): JSX.Element => {
  return (
    <SearchAddWrapper>
      <InputSearch name="search" label="Pesquisar" />
      <Button button="button" name="add" onClick={onClick}>
        + Novo
      </Button>
    </SearchAddWrapper>
  );
};
export { SearchAdd };
