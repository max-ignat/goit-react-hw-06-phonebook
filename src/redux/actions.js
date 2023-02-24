import { ADD_CONTACT } from "./types"
import { DELETE_CONTACT } from "./types"
import shortid from "shortid"

export const addContact = payload => {
    return {
      type: ADD_CONTACT,
      payload: {
          id: shortid.generate(),
          ...payload,
      },
    };
}

export const deleteContact = payload => {
  return {
    
    type: DELETE_CONTACT,
    payload,
  };
};