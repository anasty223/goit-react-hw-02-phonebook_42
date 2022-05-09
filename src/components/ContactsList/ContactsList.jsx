const ContactsList = ({ contacts,onDeleteContact }) => (
  <ul>
    {contacts.map(({id,name,number}) => (
      <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button type="submit" onClick={()=>onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);
export default ContactsList;
