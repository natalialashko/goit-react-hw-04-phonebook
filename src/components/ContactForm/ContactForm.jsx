import React from 'react';
import PropTypes from 'prop-types';
import { LabelInput,  ContactInputForm, NameInput, AddContactButton } from './ContactForm.styled'
import { useState } from 'react';

// import React from 'react';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
 const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    // this.setState({ [name]: value });
   if (name === 'name') setName(value);
   if (name === 'number') setNumber(value);
    // console.log(e.currentTarget.value);
    };

  const  handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt);
    console.log('name',name);
    console.log('',number);
   
    onSubmit({ name, number })
    resetForm();
    };
    
    const resetForm = () => {
      setName('');
      setNumber('');
  
    };
  return (
      <ContactInputForm onSubmit={handleSubmit}>
        <LabelInput>Name</LabelInput>
        
        <NameInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
       
        <LabelInput>Number</LabelInput>
       
        <NameInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
       
        <AddContactButton type="submit">Add contact</AddContactButton>
        </ContactInputForm>
  );
}

// export default ContactForm;


// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//     };

    // handleInputChange = e => {
    // const { name, value } = e.currentTarget;
    // this.setState({ [name]: value });
    // // console.log(e.currentTarget.value);
    // };

    //  handleSubmit = evt => {
    // evt.preventDefault();
    // this.props.onSubmit(this.state)
    // this.resetForm();
    // };
    
    // resetForm = () => {
    // this.setState({ name: '', number: '' });
  
    // };


    
//   render() {
//     return (
            
      // <ContactInputForm onSubmit={this.handleSubmit}>
      //   <LabelInput>Name</LabelInput>
        
      //   <NameInput
      //     type="text"
      //     name="name"
      //     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      //     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      //     required
      //     value={this.state.name}
      //     onChange={this.handleInputChange}
      //   />
       
      //   <LabelInput>Number</LabelInput>
       
      //   <NameInput
      //     type="tel"
      //     name="number"
      //     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      //     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      //     required
      //     value={this.state.number}
      //     onChange={this.handleInputChange}
      //   />
       
      //   <AddContactButton type="submit">Add contact</AddContactButton>
      //   </ContactInputForm>
      
//     );
//   }
// }
ContactForm.propTypes = {
  onSubmit: PropTypes.func
}