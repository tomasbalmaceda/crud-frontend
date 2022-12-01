import React, { useContext, SetStateAction } from "react";

import * as C from "./styles";

import { ContactType } from "../../types/ContactType";

import { api } from "../../helpers/api";

import { LoadingContext } from "../../contexts/LoadingContext";

import { motion } from "framer-motion";

import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

import TableRow from "@mui/material/TableRow";

type Props = {
  contact: ContactType;
  setEditableModeId: React.Dispatch<SetStateAction<string>>;
};

export const ReadOnlyRow = ({ contact, setEditableModeId }: Props) => {
  const { setIsLoading } = useContext(LoadingContext);

  const handleDeleteContact = async (contactId: string) => {
    await api.deleteContact(contactId);
    setIsLoading(true);
  };

  return (
    <TableRow>
      <C.Cell>{contact.fullName}</C.Cell>
      <C.Cell>{contact.address}</C.Cell>
      <C.Cell>{contact.phoneNumber}</C.Cell>
      <C.Cell>{contact.email}</C.Cell>
      <C.Cell>
        <C.DisplayDiv>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <C.Button
              variant="contained"
              onClick={() => setEditableModeId(contact._id)}
            >
              <EditIcon />
            </C.Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <C.Button
              variant="contained"
              onClick={() => handleDeleteContact(contact._id)}
            >
              <DeleteIcon />
            </C.Button>
          </motion.div>
        </C.DisplayDiv>
      </C.Cell>
    </TableRow>
  );
};
