import React, { useContext, useState, SetStateAction } from "react";

import * as C from "./styles";

import { Context } from "../../contexts/Context";

import { UserType } from "../../types/UserType";

import { api } from "../../helpers/api";

type Props = {
  item: UserType;
  setEditableModeId: React.Dispatch<SetStateAction<string>>;
};

export const EditableRow = ({ item, setEditableModeId }: Props) => {
  const { dispatch } = useContext(Context);

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

  const handleEditContact = () => {
    api.editContact(tempData);

    dispatch({
      type: "CHANGE_LOADING_DATA",
      payload: {
        loadingData: true,
      },
    });

    setEditableModeId("");
  };

  return (
    <tr>
      <td>
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
      </td>
      <td>
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
      </td>
      <td>
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
      </td>
      <td>
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
      </td>
      <td>
        <C.StyledButton variant="contained" onClick={handleEditContact}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
          </svg>
        </C.StyledButton>
        <C.StyledButton
          variant="contained"
          onClick={() => setEditableModeId("")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </C.StyledButton>
      </td>
    </tr>
  );
};
