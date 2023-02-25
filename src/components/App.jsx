import React, { useState, useEffect} from 'react';
import { Box } from '../App.styled';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import Modal from './Modal';
import { ModalButton } from './Modal/Modal.styled';
// import shortid from 'shortid';
import { Title } from './Form/Form.styled';
import { useSelector, useDispatch } from 'react-redux'; //! store subscribe // import dispath 
import { addContact, deleteContact } from 'redux/contacts/contacts-actions'; //! import actions
import { setFilter } from 'redux/filter/filter-actions'
import { getAllContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

const  App = () => {
 const contacts = useSelector(getAllContacts) ; //! <== part. store subscribe
  const filter = useSelector(getFilter);
  // const [contacts, setContacts] = useState(() => {
  //  return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // })
  

  const dispatch = useDispatch(); //!dispatch will send actions to reducer
  
  // const [filter, setFilter] = useState('')

 

  const [showModal, setShowModal] = useState (false)
  
  const toggleModal = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
   }
  };


  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const handleAddContact = ({ name, number }) => {
    const lowerCasedName = name.toLowerCase();
    
    let added = contacts.find(
      contact => contact.name.toLowerCase() === lowerCasedName
    );    
    if (added) {
      alert(`${name}  is already in contacts`);
      return;
    }
    
    dispatch(addContact({name, number})); //! give action to disp => reducer
    
    toggleModal();
  };



  const handleDeleteContact = id => {
    // const action = deleteContact(id);
    // dispatch(action);
    dispatch(deleteContact(id));
  };

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value))
    // setFilter(target.value);
  };

  const filteredContacts = () => {
    const lowerCasedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCasedFilter)
    );
  };

 
    return (
      <Box>
        <Title>Phone Book</Title>
        <ModalButton type="button" onClick={toggleModal}>
          Add contact
        </ModalButton>
        {showModal && (
          <Modal onClose={toggleModal}>
            {/* <Form /> */}
            <Form submitPropValue={handleAddContact} />
            <ModalButton type="button" onClick={toggleModal}>
              minimize
            </ModalButton>
          </Modal>
        )}
        <Filter value={filter} onChange={changeFilter} />
        <Contacts
          contacts={filteredContacts()}
          onDeleteContact={handleDeleteContact}
        />
      </Box>
    );
  
}

export default App;


