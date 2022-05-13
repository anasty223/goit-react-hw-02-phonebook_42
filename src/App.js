import { Component } from "react";
import Form from "./components/Form/Form";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import { nanoid } from "nanoid";
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

  // addContacts = ({ id, name, number }) => {
  //   if (this.state.contacts.find((el) => el.name === name)) {
  //     alert(`${name} is already in contacts!`);
  //     return;
  //   }
  //   const contact = { id, name, number };
  //   this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  // };
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
  formSubmitHandler = ({ name, number }) => {
    console.log("name", name);
    console.log("number", number);
    const { contacts } = this.state;
    const ReturnName = contacts.find((contact) => contact.name === name);
    if (ReturnName) {
      alert("This name is already in the phone book ");
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      console.log(contact);
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
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

        <Form onSubmit={this.formSubmitHandler} />

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
