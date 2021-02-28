import React from "react";
import styled from "@emotion/styled";

type BaseLayoutProps = {
  children: React.ReactChild | React.ReactChild[];
};

function BaseLayout({ children }: BaseLayoutProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div``;

export default React.memo(BaseLayout);
