import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://61c6401cc003e70017b79a2d.mockapi.io/";

export const fetchContact = createAsyncThunk(
  "contacts/fetchContact",
  async () => {
    const { data } = await axios.get("/contacts");
    return data;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number: phone }) => {
    const contact = { name, phone };
    const { data } = await axios.post("/contacts", contact);
    return data;
  }
);

export const deletedContact = createAsyncThunk(
  "contacts/deletedContact",
  async (contactId) => {
    const {
      data: { id },
    } = await axios.delete(`/contacts/${contactId}`);
    return id;
  }
);
