import { Component } from "react";
import Form from "./components/Form/Form";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import Div from "./components/Container/Container";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  handleInputChange = (event) => {
    const { name, value } = event.currentTarget; // console.log("event", event.currentTarget.value);
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("this.state", this.state);
    this.reset();
  };

  addContacts = ({ id, name, number, e }) => {
    if (this.state.contacts.find((el) => el.name === name)) {
      alert(`${name} is already in contacts!`);
      return;
    }
    const contact = { id, name, number };
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { filter } = this.state;

    const normalazedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalazedFilter)
    );
    return (
      <Div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContacts} />
        <Filter value={filter} onChange={this.changeFilter} />
        <h2>Contacts</h2>
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Div>
    );
  }
}

export default App;
