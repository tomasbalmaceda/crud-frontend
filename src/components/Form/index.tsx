import React, { useContext, useRef } from "react";
import * as C from "./styles";

import { api } from "../../helpers/api";

import { DataContext } from "../../contexts/DataContext";

export const Form = () => {
  const { setLoading } = useContext(DataContext);

  const fullNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const addressRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const phoneNumberRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await api.addNewContact(
      fullNameRef.current.value,
      addressRef.current.value,
      phoneNumberRef.current.value,
      emailRef.current.value
    );

    fullNameRef.current.value = "";
    addressRef.current.value = "";
    phoneNumberRef.current.value = "";
    emailRef.current.value = "";

    setLoading(true);
  };

  return (
    <div>
      <C.Form onSubmit={handleFormSubmit}>
        <C.StyledTextField
          variant="filled"
          type="text"
          label="Enter a name..."
          required
          size="small"
          inputRef={fullNameRef}
        />
        <C.StyledTextField
          variant="filled"
          type="text"
          label="Enter a address..."
          required
          size="small"
          inputRef={addressRef}
        />
        <C.StyledTextField
          variant="filled"
          type="text"
          label="Enter a phone..."
          required
          size="small"
          inputRef={phoneNumberRef}
        />
        <C.StyledTextField
          variant="filled"
          type="email"
          label="Enter an email..."
          required
          size="small"
          inputRef={emailRef}
        />

        <C.StyledButton variant="contained" type="submit">
          Add
        </C.StyledButton>
      </C.Form>
    </div>
  );
};
