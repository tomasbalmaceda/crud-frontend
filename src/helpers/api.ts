import axios from "axios";

import { UserType } from "../types/UserType";

const http = axios.create({
  baseURL: "http://localhost:4000/crud",
});

export const api = {
  getAllContacts: async () => {
    let response = await http.get("/get");
    return response.data;
  },

  deleteContact: async (id: string) => {
    let response = await axios.delete(
      `http://localhost:4000/crud/delete/${id}`
    );
  },

  editContact: async (item: UserType) => {
    let response = await axios.put(
      `http://localhost:4000/crud/update/${item._id}`,
      item
    );
  },

  addNewContact: async (
    fullName: string,
    address: string,
    phoneNumber: string,
    email: string
  ) => {
    let response = await http.post("/post", {
      fullName,
      address,
      phoneNumber,
      email,
    });
    return response.data;
  },
};
