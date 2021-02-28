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
  padding-top: 80px;
  padding-bottom: 80px;
`;

export default React.memo(BaseLayout);
