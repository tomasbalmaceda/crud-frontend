import axios from "axios";

import { ContactType } from "../types/ContactType";

const http = axios.create({
  baseURL: "http://localhost:4000/users",
});

export const api = {
  getAllContacts: async () => {
    try {
      let response = await http.get("/");
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
  deleteContact: async (id: string) => {
    try {
      await http.delete(`${id}`);
    } catch (err) {
      console.error(err);
    }
  },

  editContact: async (contact: ContactType) => {
    try {
      await http.patch(`${contact._id}`, contact);
    } catch (err) {
      console.error(err);
    }
  },

  addNewContact: async (
    fullName: string,
    address: string,
    phoneNumber: string,
    email: string
  ) => {
    const contact = {
      fullName,
      address,
      phoneNumber,
      email,
    };

    try {
      let response = await http.post("/", contact);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
};
