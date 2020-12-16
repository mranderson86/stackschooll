import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 5rem;

  max-width: 500px;
  min-width: 400px;

  cursor: pointer;
  position: relative;

  > svg {
    position: absolute;

    > path {
      fill: ${props => props.theme.colors.textComplement};
    }

    width: 100%;
    height: 100%;

    max-width: 2.5rem;
    max-height: 2.5rem;

    top: calc(100% - 2.5rem);
    right: 16px;
  }
`;

export const Select = styled.select`
  appearance: none;

  width: 100%;
  height: 100%;

  border: 0.2rem solid ${props => props.theme.colors.lineWhite};
  border-radius: 0.8rem;
  outline: none;

  margin-top: 1rem;
  padding-left: 2.5rem;
  padding-right: 5rem;

  font: 400 1.25rem Poppins;
  line-height: 2.5rem;
  color: ${props => props.theme.colors.textBase};

  cursor: pointer;
`;

export const Option = styled.option`
  width: 100%;
  height: 5rem;

  cursor: pointer;
`;
