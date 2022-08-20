import React, { useContext, SetStateAction } from "react";

import * as C from "./styles";

import { UserType } from "../../types/UserType";

import { api } from "../../helpers/api";

import { DataContext } from "../../contexts/DataContext";

import { motion } from "framer-motion";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const svgVariants = {
  hidden: { rotate: 90 },
  visible: {
    rotate: 0,
    transtion: { duration: 1 },
  },
};

type Props = {
  item: UserType;
  setEditableModeId: React.Dispatch<SetStateAction<string>>;
};

export const ReadOnlyRow = ({ item, setEditableModeId }: Props) => {
  const { setLoading } = useContext(DataContext);

  const handleDeleteContact = async (contactId: string) => {
    await api.deleteContact(contactId);
    setLoading(true);
  };

  return (
    <TableRow>
      <C.StyledCell>{item.fullName}</C.StyledCell>
      <C.StyledCell>{item.address}</C.StyledCell>
      <C.StyledCell>{item.phoneNumber}</C.StyledCell>
      <C.StyledCell>{item.email}</C.StyledCell>
      <C.StyledCell>
        <C.StyledButton
          variant="contained"
          onClick={() => setEditableModeId(item._id)}
        >
          <motion.div variants={svgVariants} initial="hidden" animate="visible">
            <EditIcon />
          </motion.div>
        </C.StyledButton>
        <C.StyledButton
          variant="contained"
          onClick={() => handleDeleteContact(item._id)}
        >
          <motion.div variants={svgVariants} initial="hidden" animate="visible">
            <DeleteIcon />
          </motion.div>
        </C.StyledButton>
      </C.StyledCell>
    </TableRow>
  );
};
