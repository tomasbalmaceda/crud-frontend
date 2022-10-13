import React, { useContext, useEffect, SetStateAction, useRef } from "react";

import * as C from "./styles";

import { UserType } from "../../types/UserType";

import { api } from "../../helpers/api";

import { DataContext } from "../../contexts/DataContext";

import TableRow from "@mui/material/TableRow";

import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ClearIcon from "@mui/icons-material/Clear";

import { motion } from "framer-motion";

const divVariants = {
  hidden: { rotate: 90 },
  visible: {
    rotate: 0,
  },
};

type Props = {
  item: UserType;
  setEditableModeId: React.Dispatch<SetStateAction<string>>;
};

export const EditableRow = ({ item, setEditableModeId }: Props) => {
  const { setLoading } = useContext(DataContext);

  const fullNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const addressRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const phoneNumberRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    fullNameRef.current.value = item.fullName;
    addressRef.current.value = item.address;
    phoneNumberRef.current.value = item.phoneNumber;
    emailRef.current.value = item.email;
  }, []);

  const handleEditContact = async () => {
    const user = {
      _id: item._id,
      fullName: fullNameRef.current.value,
      address: addressRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      email: emailRef.current.value,
    };

    if (
      fullNameRef.current.value === item.fullName &&
      addressRef.current.value === item.address &&
      phoneNumberRef.current.value === item.phoneNumber &&
      emailRef.current.value === item.email
    ) {
      return setEditableModeId("");
    }

    await api.editContact(user);
    setLoading(true);
    setEditableModeId("");
  };

  return (
    <TableRow>
      <C.StyledCell>
        <C.StyledTextField
          size="small"
          id="outlined-basic"
          label="Enter a name..."
          type="text"
          required
          inputRef={fullNameRef}
        />
      </C.StyledCell>
      <C.StyledCell>
        <C.StyledTextField
          size="small"
          id="outlined-basic"
          label="Enter a address..."
          type="text"
          required
          inputRef={addressRef}
        />
      </C.StyledCell>
      <C.StyledCell>
        <C.StyledTextField
          size="small"
          id="outlined-basic"
          label="Enter a phone number..."
          type="text"
          required
          inputRef={phoneNumberRef}
        />
      </C.StyledCell>
      <C.StyledCell>
        <C.StyledTextField
          size="small"
          id="outlined-basic"
          label="Enter an email..."
          type="email"
          required
          inputRef={emailRef}
        />
      </C.StyledCell>
      <C.StyledCell>
        <C.StyledButton variant="contained" onClick={handleEditContact}>
          <motion.div variants={divVariants} initial="hidden" animate="visible">
            <SaveAltIcon />
          </motion.div>
        </C.StyledButton>
        <C.StyledButton
          variant="contained"
          onClick={() => setEditableModeId("")}
        >
          <motion.div variants={divVariants} initial="hidden" animate="visible">
            <ClearIcon />
          </motion.div>
        </C.StyledButton>
      </C.StyledCell>
    </TableRow>
  );
};
