import React, { useContext, useState } from "react";
import * as C from "./styles";

import { api } from "../../helpers/api";

import { DataContext } from "../../contexts/DataContext";

export const Form = () => {
  const { setLoading } = useContext(DataContext);

  const [tempUserData, setTempUserData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTempUserData((prevAddFormData) => ({
      ...prevAddFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await api.addNewContact(
      tempUserData.fullName,
      tempUserData.address,
      tempUserData.phoneNumber,
      tempUserData.email
    );

    setLoading(true);
  };

  return (
    <div>
      <C.Form onSubmit={handleFormSubmit}>
        <C.StyledTextField
          variant="outlined"
          id="outlined-basic"
          type="text"
          label="Enter a name..."
          name="fullName"
          required
          onChange={handleChange}
        />
        <C.StyledTextField
          variant="outlined"
          id="outlined-basic"
          type="text"
          label="Enter a address..."
          name="address"
          required
          onChange={handleChange}
        />
        <C.StyledTextField
          variant="outlined"
          id="outlined-basic"
          type="text"
          label="Enter a phone..."
          name="phoneNumber"
          required
          onChange={handleChange}
        />
        <C.StyledTextField
          variant="outlined"
          id="outlined-basic"
          type="email"
          label="Enter an email..."
          name="email"
          required
          onChange={handleChange}
        />

        <C.StyledButton variant="contained" type="submit">
          Add
        </C.StyledButton>
      </C.Form>
    </div>
  );
};
