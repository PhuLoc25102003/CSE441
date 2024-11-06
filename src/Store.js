import { createSlice, configureStore } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export const mapContacts = (contact) => {
    const {name, picture, phone, cell, email} = contact;
    return {
        id: v4(),
        name: name.first + ' ' + name.last,
        avatar: picture.large,
        phone,
        cell,
        email,
        favourite: Math.random() < 0.1 ? true : false,
    };
};

const contactsSlide = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },
    reducers: {
        fetchContactsSuccess: (state, action) => {
            state.contacts = action.payload;
        },
    },
});

export const {fetchContactsSuccess} = contactsSlide.actions;
const store = configureStore({
    reducer: contactsSlide.reducer,
});

export default store;
