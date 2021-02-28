import React from "react";
import styled from "@emotion/styled";

type ContainerLabelPropType = {
  children: string;
};

function ContainerLabel({ children }: ContainerLabelPropType) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  ${(props) => props.theme.fonts.title3}
  font-weight:bold;
  margin-bottom: 24px;
`;

export default React.memo(ContainerLabel);
