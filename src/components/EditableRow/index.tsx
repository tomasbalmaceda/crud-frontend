import React, { useContext, useState, SetStateAction } from "react";

import * as C from "./styles";

import { UserType } from "../../types/UserType";

import { api } from "../../helpers/api";

import { DataContext } from "../../contexts/DataContext";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ClearIcon from "@mui/icons-material/Clear";

import { motion } from "framer-motion";

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

export const EditableRow = ({ item, setEditableModeId }: Props) => {
  const { setLoading } = useContext(DataContext);

  const [tempData, setTempData] = useState({
    _id: item._id,
    fullName: item.fullName,
    address: item.address,
    phoneNumber: item.phoneNumber,
    email: item.email,
  });

  const handleChangeEditContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTempData((prevEditFormData) => ({
      ...prevEditFormData,
      [name]: value,
    }));
  };

  const handleEditContact = async () => {
    await api.editContact(tempData);
    setLoading(true);
    setEditableModeId("");
  };

  return (
    <TableRow>
      <TableCell>
        <C.StyledTextField
          size="small"
          id="outlined-basic"
          label="Enter a name..."
          type="text"
          required
          value={tempData.fullName}
          onChange={handleChangeEditContact}
          name="fullName"
        />
      </TableCell>
      <TableCell>
        <C.StyledTextField
          size="small"
          id="outlined-basic"
          label="Enter a address..."
          type="text"
          required
          value={tempData.address}
          onChange={handleChangeEditContact}
          name="address"
        />
      </TableCell>
      <TableCell>
        <C.StyledTextField
          size="small"
          id="outlined-basic"
          label="Enter a phone number..."
          type="text"
          required
          value={tempData.phoneNumber}
          onChange={handleChangeEditContact}
          name="phoneNumber"
        />
      </TableCell>
      <TableCell>
        <C.StyledTextField
          size="small"
          id="outlined-basic"
          label="Enter an email..."
          type="email"
          required
          value={tempData.email}
          onChange={handleChangeEditContact}
          name="email"
        />
      </TableCell>
      <TableCell>
        <C.StyledButton variant="contained" onClick={handleEditContact}>
          <motion.div variants={svgVariants} initial="hidden" animate="visible">
            <SaveAltIcon />
          </motion.div>
        </C.StyledButton>
        <C.StyledButton
          variant="contained"
          onClick={() => setEditableModeId("")}
        >
          <motion.div variants={svgVariants} initial="hidden" animate="visible">
            <ClearIcon />
          </motion.div>
        </C.StyledButton>
      </TableCell>
    </TableRow>
  );
};
