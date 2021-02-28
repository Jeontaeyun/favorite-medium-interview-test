import styled from "@emotion/styled";
import React from "react";

function ContactListContainer() {
  return <Container></Container>;
}

const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 425px;
  min-height: 300px;
  background-color: red;
  overflow-y: scroll;
`;

export default React.memo(ContactListContainer);
