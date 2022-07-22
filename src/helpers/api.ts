import axios from "axios";

import { UserType } from "../types/UserType";

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

  editContact: async (item: UserType) => {
    try {
      await http.patch(`${item._id}`, item);
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
    try {
      let response = await http.post("/", {
        fullName,
        address,
        phoneNumber,
        email,
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
};
