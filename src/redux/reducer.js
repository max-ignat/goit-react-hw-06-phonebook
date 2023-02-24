import { ADD_CONTACT, DELETE_CONTACT } from './types';



const initialState = {
    contacts: [
        
    ],
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContact = [...state.contacts, action.payload];
      return { ...state, contacts: newContact };

      case DELETE_CONTACT:
          const result = state.contacts.filter(contact => contact.id !== action.payload);
          return {...state, contacts: result};

    default:
      return state;
  }
};
