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
  font-size: 16px;
  color: white;
  line-height: 24px;
  background: #e20078;
  border-radius: 4px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export default React.memo(FMButton);
