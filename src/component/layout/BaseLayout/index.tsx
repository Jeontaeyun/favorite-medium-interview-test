import React from "react";
import styled from "@emotion/styled";

type BaseLayoutProps = {
  children: React.ReactChild | React.ReactChild[];
};

function BaseLayout({ children }: BaseLayoutProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.gray00};
`;

export default React.memo(BaseLayout);
