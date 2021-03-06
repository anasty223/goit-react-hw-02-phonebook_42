
import {Input,Label,ButtonAdd}from './Form.styles'
import { Component } from "react";

class Form extends Component {
  state = {
    name: '',
    number:'',
  } 

  handleInputChange =  e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });;
  };

 onSubmitForm=(e)=> {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();

  }
  
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() { 
    return ( <>
      <form onSubmit={this.onSubmitForm}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
              </Label>
            <Label> Number
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
               onChange={this.handleInputChange}
                    />
                    <ButtonAdd type="submit">Add contact</ButtonAdd>
                </Label>
      </form>
    </>);
  }
}
 
export default Form;

// // const Form = ({ onSubmit }) => {
// //   function onSubmitForm(event) {
// //     event.preventDefault();
// //     onSubmit({
// //       id: nanoid(),
// //       name: event.target[0].value,
// //       number: event.target[1].value,
// //       event,
// //     });
// //   }

// //   return (
// //     <>
// //       <form onSubmit={onSubmitForm}>
// //         <Label>
// //           Name
// //           <Input
// //             type="text"
// //             name="name"
// //             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// //             required
// //           />
// //               </Label>
// //             <Label> Number
// //                     <Input
// //                         type="tel"
// //                         name="number"
// //                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
// //                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
// //                         required
// //                     />
// //                     <ButtonAdd type="submit">Add contact</ButtonAdd>
// //                 </Label>
// //       </form>
// //     </>
// //   );
// // };

// // export default Form;
