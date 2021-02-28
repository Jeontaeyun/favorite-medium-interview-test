import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import styled from "@emotion/styled";
import FMButton from "../../button/FMButton";
import { ContactInputType } from "../../../types/contact";

type ContactFormProps = {
  onSubmit: (formData: ContactInputType) => void;
};

function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phoneNumber: "" });

  const onChangeInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {}, []);

  const onSubmitForm = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      onSubmit(formData);
    },
    [onSubmit, formData]
  );

  return (
    <Container>
      <FormContainer>
        <FMInputContainer>
          <FMLabel>{"Name"}</FMLabel>
          <FMInput />
        </FMInputContainer>
        <FMInputContainer>
          <FMLabel>{"Email"}</FMLabel>
          <FMInput />
        </FMInputContainer>
        <FMInputContainer>
          <FMLabel>{"Phone Number"}</FMLabel>
          <FMInput />
        </FMInputContainer>
      </FormContainer>
      <FMButton onClick={onSubmitForm}>{"Submit"}</FMButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 90%;
  min-width: 260px;
  min-height: 300px;
  background: ${(props) => props.theme.colors.gray00};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FMInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
`;

const FMInput = styled.input`
  flex: 1;
  ${(props) => props.theme.fonts.body01}
  height: 32px;
  padding: 0px 12px;
  &:focus {
    outline-color: #e20078;
  }
`;

const FMLabel = styled.label`
  display: inline-block;
  ${(props) => props.theme.fonts.body01}
  width: 140px;
`;

export default React.memo(ContactForm);
