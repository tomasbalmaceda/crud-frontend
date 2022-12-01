import React, { useContext, useEffect, SetStateAction, useRef } from "react";

import * as C from "./styles";

import { ContactType } from "../../types/ContactType";

import { api } from "../../helpers/api";

import { LoadingContext } from "../../contexts/LoadingContext";

import { TableRow as MuiTableRow } from "@mui/material";

import {
  SaveAlt as SaveAltIcon,
  Clear as ClearIcon,
} from "@mui/icons-material";

import { motion } from "framer-motion";

type Props = {
  contact: ContactType;
  setEditableModeId: React.Dispatch<SetStateAction<string>>;
};

export const EditableRow = ({ contact, setEditableModeId }: Props) => {
  const { setIsLoading } = useContext(LoadingContext);

  const fullNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const addressRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const phoneNumberRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    fullNameRef.current.value = contact.fullName;
    addressRef.current.value = contact.address;
    phoneNumberRef.current.value = contact.phoneNumber;
    emailRef.current.value = contact.email;
  }, []);

  const handleEditContact = async () => {
    const editedContact = {
      _id: contact._id,
      fullName: fullNameRef.current.value,
      address: addressRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      email: emailRef.current.value,
    };

    if (
      fullNameRef.current.value === contact.fullName &&
      addressRef.current.value === contact.address &&
      phoneNumberRef.current.value === contact.phoneNumber &&
      emailRef.current.value === contact.email
    ) {
      return setEditableModeId("");
    }

    await api.editContact(editedContact);
    setIsLoading(true);
    setEditableModeId("");
  };

  return (
    <MuiTableRow>
      <C.Cell>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.09 }}>
          <C.TextInput
            size="small"
            id="outlined-basic"
            label="Enter a name..."
            type="text"
            required
            inputRef={fullNameRef}
          />
        </motion.div>
      </C.Cell>
      <C.Cell>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.09 }}>
          <C.TextInput
            size="small"
            id="outlined-basic"
            label="Enter a address..."
            type="text"
            required
            inputRef={addressRef}
          />
        </motion.div>
      </C.Cell>
      <C.Cell>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.09 }}>
          <C.TextInput
            size="small"
            id="outlined-basic"
            label="Enter a phone number..."
            type="text"
            required
            inputRef={phoneNumberRef}
          />
        </motion.div>
      </C.Cell>
      <C.Cell>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.09 }}>
          <C.TextInput
            size="small"
            id="outlined-basic"
            label="Enter an email..."
            type="email"
            required
            inputRef={emailRef}
          />
        </motion.div>
      </C.Cell>
      <C.Cell>
        <C.DisplayDiv>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <C.Button variant="contained" onClick={handleEditContact}>
              <SaveAltIcon />
            </C.Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <C.Button variant="contained" onClick={() => setEditableModeId("")}>
              <ClearIcon />
            </C.Button>
          </motion.div>
        </C.DisplayDiv>
      </C.Cell>
    </MuiTableRow>
  );
};
