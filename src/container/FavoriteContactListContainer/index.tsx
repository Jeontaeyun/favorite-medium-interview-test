import React from "react";
import styled from "@emotion/styled";

function FavoriteContactListContainer() {
  return <Container></Container>;
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 425px;
  min-width: 320px;
  min-height: 200px;
  border: 1px solid ${(props) => props.theme.colors.gray50};
  margin-bottom: 40px;
`;

export default React.memo(FavoriteContactListContainer);
