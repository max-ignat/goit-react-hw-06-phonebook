import { contactsReducer } from "./contacts/contacts-reducer";
import { filterReducer } from "./filter/filter-reducer";
import { combineReducers } from "redux";


export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})


// import { createSlice } from '@reduxjs/toolkit';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
//     filter: '',
//   },
//   reducers: {
//     addContact(state, action) {
//       // your reducer code here
//     },
//     removeContact(state, action) {
//       // your reducer code here
//     },
//   },
//   extraReducers: builder => {
//     builder.addCase(addContact, (state, action) => {
//       window.localStorage.setItem('contacts', JSON.stringify(state.contacts));
//     });
//     builder.addCase(removeContact, (state, action) => {
//       window.localStorage.setItem('contacts', JSON.stringify(state.contacts));
//     });
//   },
// });

// export const { addContact, removeContact } = contactsSlice.actions;
// export default contactsSlice.reducer;
