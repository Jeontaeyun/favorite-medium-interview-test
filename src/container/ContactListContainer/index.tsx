import React, { useCallback, useContext, useMemo, useState } from "react";
import styled from "@emotion/styled";

import FMButton from "../../component/button/FMButton";
import ContactForm from "../../component/form/ContactForm";
import { RoledexContext } from "../../lib/context/RoledexContextProvider";
import { ContactInputType, ContactType } from "../../types/contact";
import LocalStorageService from "../../lib/service/LocalStorageService";
import SimpleContactCard from "../../component/card/SimpleContactCard";

function ContactListContainer() {
  const { contactList, createContact } = useContext(RoledexContext);
  const [contactFormModalConfig, setContactFormModalConfig] = useState({
    visible: false,
    isUpdate: false,
    previousData: null as ContactType | null,
  });

  const ContactCardList = useMemo(() => {
    return contactList.map((id) => {
      const item = LocalStorageService.shared.getContactWithId(id);
      console.log(item);
      if (!item) return null;
      return <SimpleContactCard key={item.id} name={item.name} email={item.email} phoneNumber={item.phoneNumber} />;
    });
  }, [contactList]);

  const onClickNewContactButton = useCallback(() => {
    setContactFormModalConfig({ visible: true, isUpdate: false, previousData: null });
  }, []);

  const onSubmitContact = useCallback(
    (data: ContactInputType) => {
      createContact(data);
      setContactFormModalConfig({ visible: false, isUpdate: false, previousData: null });
    },
    [createContact]
  );

  return (
    <Container>
      <ContactItemContainer>{ContactCardList}</ContactItemContainer>
      <ButtonContainer>
        <FMButton onClick={onClickNewContactButton}>{"New Contact"}</FMButton>
      </ButtonContainer>
      {contactFormModalConfig.visible && <ContactForm onSubmit={onSubmitContact} />}
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
  min-height: 600px;
`;

const ContactItemContainer = styled.div`
  flex: 1;
  border: 1px solid ${(props) => props.theme.colors.gray50};
  border-radius: 4px;
  overflow-y: scroll;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export default React.memo(ContactListContainer);
