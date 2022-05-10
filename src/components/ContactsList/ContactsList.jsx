import PropTypes from 'prop-types'
import {List,Item,Text,ButtonDelete} from './ContactList.styles'

const ContactsList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <Text>{name}</Text>
        <Text>{number}</Text>
        <ButtonDelete type="submit" onClick={() => onDeleteContact(id)}>Delete</ButtonDelete>
      </Item>
    ))}
  </List>
);
export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
