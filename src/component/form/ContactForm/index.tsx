import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import styled from "@emotion/styled";
import FMButton from "../../button/FMButton";
import { ContactInputType } from "../../../types/contact";

type ContactFormProps = {
  onSubmit: (formData: ContactInputType) => void;
};

function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phoneNumber: "" });

  const onChangeInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === "name") setFormData((prev) => ({ ...prev, name: value }));
    if (id === "email") setFormData((prev) => ({ ...prev, email: value }));
    if (id === "phoneNumber") setFormData((prev) => ({ ...prev, phoneNumber: value }));
  }, []);

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
          <FMLabel htmlFor={"name"}>{"Name"}</FMLabel>
          <FMInput id={"name"} onChange={onChangeInput} />
        </FMInputContainer>
        <FMInputContainer>
          <FMLabel htmlFor={"email"}>{"Email"}</FMLabel>
          <FMInput id={"email"} />
        </FMInputContainer>
        <FMInputContainer>
          <FMLabel htmlFor={"phoneNumber"}>{"Phone Number"}</FMLabel>
          <FMInput id={"phoneNumber"} />
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
  min-width: 300px;
  min-height: 300px;
  background: ${(props) => props.theme.colors.gray00};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const FormContainer = styled.form`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 300px;
`;

const FMInputContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 8px 12px;
`;

const FMInput = styled.input`
  width: 100%;

  ${(props) => props.theme.fonts.body01}
  box-sizing: border-box;
  border: 1px solid;
  border-radius: 4px;
  &:focus {
    outline-color: #e20078;
  }
`;

const FMLabel = styled.label`
  display: inline-block;
  ${(props) => props.theme.fonts.body01}
  width: 120px;
`;

export default React.memo(ContactForm);
