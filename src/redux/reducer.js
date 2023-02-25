import { ADD_CONTACT, DELETE_CONTACT , SET_FILTER} from './types';


 //! Create initial state :
const initialState = {
  contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  filter: '',
};

export const rootReducer = (state = initialState, {type, payload}) => { //! state and actions
  switch (type) {
    case ADD_CONTACT:
      const newContact = [...state.contacts, payload];
      return { ...state, contacts: newContact };

      case DELETE_CONTACT:
          const result = state.contacts.filter(contact => contact.id !== payload);
          return {...state, contacts: result};
      case SET_FILTER:
          return{...state, filter:payload}
    default:
      return state;
  }
};


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
