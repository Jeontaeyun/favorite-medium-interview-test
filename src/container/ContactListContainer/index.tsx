import React, { useCallback, useContext, useMemo, useState } from "react";
import styled from "@emotion/styled";

import FMButton from "../../component/button/FMButton";
import ContactForm from "../../component/form/ContactForm";
import SimpleContactCard from "../../component/card/SimpleContactCard";
import { RoledexContext } from "../../lib/context/RoledexContextProvider";
import LocalStorageService from "../../lib/service/LocalStorageService";
import { ContactType } from "../../types/contact";

function ContactListContainer() {
  const {
    contactList,
    createContact,
    updateContact,
    deleteContact,
    addFavorite,
    removeFavorite,
    checkIsFavorited,
  } = useContext(RoledexContext);
  const [contactFormModalConfig, setContactFormModalConfig] = useState({
    visible: false,
    isUpdate: false,
    previousData: null as ContactType | null,
  });

  const onClickFavoriteButton = useCallback(
    (id: string) => () => {
      const favorited = checkIsFavorited(id);
      favorited ? removeFavorite(id) : addFavorite(id);
    },
    [addFavorite, removeFavorite, checkIsFavorited]
  );

  const onEditContactButton = useCallback(
    (id: string) => () => {
      const item = LocalStorageService.shared.getContactWithId(id);
      setContactFormModalConfig({ visible: true, isUpdate: true, previousData: item });
    },
    []
  );

  const onDeleteContactButton = useCallback(
    (id: string) => () => {
      deleteContact(id);
    },
    [deleteContact]
  );

  const onClickNewContactButton = useCallback(() => {
    setContactFormModalConfig({ visible: true, isUpdate: false, previousData: null });
  }, []);

  const onSubmitContact = useCallback(
    (data: ContactType) => {
      if (!data.name) return alert("You need to register name");
      if (!data.email) return alert("You need to register email");
      if (data.id) updateContact(data.id, data);
      else createContact(data);
      setContactFormModalConfig({ visible: false, isUpdate: false, previousData: null });
    },
    [createContact, updateContact]
  );

  const ContactCardList = useMemo(() => {
    return contactList.map((id) => {
      const item = LocalStorageService.shared.getContactWithId(id);
      const favorited = checkIsFavorited(id);
      if (!item) return null;
      return (
        <SimpleContactCard
          key={item.id}
          name={item.name}
          email={item.email}
          phoneNumber={item.phoneNumber}
          favorited={favorited}
          onClickFavoriteButton={onClickFavoriteButton(item.id)}
          onClickDeleteButton={onDeleteContactButton(item.id)}
          onClickEditButton={onEditContactButton(item.id)}
        />
      );
    });
  }, [contactList, checkIsFavorited, onClickFavoriteButton, onDeleteContactButton, onEditContactButton]);

  return (
    <Container>
      <ContactItemContainer>{ContactCardList}</ContactItemContainer>
      <ButtonContainer>
        <FMButton onClick={onClickNewContactButton}>{"New Contact"}</FMButton>
      </ButtonContainer>
      {contactFormModalConfig.visible && (
        <ContactForm onSubmit={onSubmitContact} previousData={contactFormModalConfig.previousData} />
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-width: 425px;
  min-width: 320px;
`;

const ContactItemContainer = styled.div`
  height: 100px;
  min-height: 400px;
  border: 1px solid ${(props) => props.theme.colors.gray50};
  border-radius: 4px;
  overflow-y: scroll;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export default React.memo(ContactListContainer);
