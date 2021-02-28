import React, { MouseEvent } from "react";
import styled from "@emotion/styled";

type FMButtonPropType = {
  children: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

function FMButton({ children, onClick }: FMButtonPropType) {
  return <Container onClick={onClick}>{children}</Container>;
}

const Container = styled.button`
  ${(props) => props.theme.fonts.body02}
  cursor: pointer;
  color: #e20078;
  border-radius: 4px;
  padding: 6px 12px;
  border: 1px solid #e20078;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:active {
    color: #ab0f62;
    border: 1px solid #ab0f62;
  }
  &:focus {
    outline: none;
  }
`;

export default React.memo(FMButton);
