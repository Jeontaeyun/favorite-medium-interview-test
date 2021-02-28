import React, { MouseEvent } from "react";
import styled from "@emotion/styled";

import FMButton from "../../button/FMButton";

export type SimpleFavoriteContactCardPropType = {
  name: string;
  email: string;
  phoneNumber?: string;
  favorited?: boolean;
  onClickFavoriteButton?: (event: MouseEvent<HTMLDivElement>) => void;
};

function SimpleFavoriteContactCard({
  name,
  email,
  phoneNumber = "",
  favorited = false,
  onClickFavoriteButton,
}: SimpleFavoriteContactCardPropType) {
  return (
    <Container>
      <FavoriteButton onClick={onClickFavoriteButton} favorited={favorited} />
      <InfoContainer>
        <NameText>{name}</NameText>
        <ContactInfoContainer>
          <EmailText>{email}</EmailText>
          <PhoneNumberText>{phoneNumber}</PhoneNumberText>
        </ContactInfoContainer>
      </InfoContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100px;
  box-sizing: border-box;
  padding: 10px;
`;

const FavoriteButton = styled.div<{ favorited: boolean }>`
  cursor: pointer;
  width: 24px;
  height: 24px;
  border-radius: 18px;
  border: 1px solid ${(props) => props.theme.colors.main01};
  background-color: ${(props) => props.favorited && props.theme.colors.main01};
  margin-right: 24px;
  margin-left: 12px;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

const NameText = styled.q`
  ${(props) => props.theme.fonts.title3}
`;

const EmailText = styled.q`
  ${(props) => props.theme.fonts.caption}
`;

const PhoneNumberText = styled.q`
  ${(props) => props.theme.fonts.caption}
`;

const ButtonContainer = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default React.memo(SimpleFavoriteContactCard);
