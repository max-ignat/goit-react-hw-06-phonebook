import {
  ContactList,
  Button,
  Contact,
  ContactData,
  ListTitle,
} from './Contacts.styled';
// import { useSelector } from 'react-redux';

const Contacts = ({ contacts, onDeleteContact }) => {
//   console.log(contacts);
  // const contacts = useSelector(state => state.contacts);
  
    return (
      <div>
        <ListTitle>Your contacts</ListTitle>
        <ContactList>
          {contacts.map(({ id, name, number }) => (
            <Contact key={id}>
              <ContactData>
                {name}: <span> {number} </span>
              </ContactData>

              <Button type="button" onClick={() => onDeleteContact(id)}>
                delete
              </Button>
            </Contact>
          ))}
        </ContactList>
      </div>
    );
};

export default Contacts;
