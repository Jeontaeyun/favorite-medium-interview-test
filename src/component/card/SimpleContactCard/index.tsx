import React from "react";
import styled from "@emotion/styled";

export type SimpleContactCardPropType = {
  name: string;
  email: string;
  phoneNumber?: string;
};

function SimpleContactCard({ name, email, phoneNumber = "" }: SimpleContactCardPropType) {
  return (
    <Container>
      <NameText>{name}</NameText>
      <EmailText>{email}</EmailText>
      <PhoneNumberText>{phoneNumber}</PhoneNumberText>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const NameText = styled.q``;

const EmailText = styled.q``;

const PhoneNumberText = styled.q``;

export default React.memo(SimpleContactCard);
