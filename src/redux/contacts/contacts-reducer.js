import { ADD_CONTACT, DELETE_CONTACT,} from './contacts-types';

//! Create initial state :
const initialState = JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  

export const contactsReducer = (state = initialState, { type, payload }) => {
  //! state and actions
  switch (type) {
    case ADD_CONTACT:
      return [...state.contacts, payload];

    case DELETE_CONTACT:
      return state.contacts.filter(contact => contact.id !== payload);
   
    default:
      return state;
  }
};
