import React, { useContext, useRef } from "react";
import * as C from "./styles";

import { api } from "../../helpers/api";

import { LoadingContext } from "../../contexts/LoadingContext";

import { motion } from "framer-motion";

export const Form = () => {
  const { setIsLoading } = useContext(LoadingContext);

  const fullNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const addressRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const phoneNumberRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleAddNewContact = async (e: React.FormEvent<HTMLFormElement>) => {
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

    setIsLoading(true);
  };

  return (
    <div>
      <C.Form onSubmit={handleAddNewContact}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.09 }}>
          <C.TextInput
            variant="filled"
            type="text"
            label="Enter a name..."
            required
            size="small"
            inputRef={fullNameRef}
            inputProps={{ maxLength: 20 }}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.09 }}>
          <C.TextInput
            variant="filled"
            type="text"
            label="Enter a address..."
            required
            size="small"
            inputRef={addressRef}
            inputProps={{ maxLength: 20 }}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.09 }}>
          <C.TextInput
            variant="filled"
            type="email"
            label="Enter an email..."
            required
            size="small"
            inputRef={emailRef}
            inputProps={{ maxLength: 20 }}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.09 }}>
          <C.TextInput
            variant="filled"
            type="text"
            label="Enter a phone..."
            required
            size="small"
            inputRef={phoneNumberRef}
            inputProps={{ maxLength: 20 }}
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <C.Button variant="contained" type="submit">
            Add
          </C.Button>
        </motion.div>
      </C.Form>
    </div>
  );
};
