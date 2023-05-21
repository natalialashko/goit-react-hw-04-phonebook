import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './Filter/Filter';
import {Container, TitlePhonebook, TitleContacts, } from './App.styled'
import { useEffect } from 'react';

// const contactsDefault= [
//      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ]
  

export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts'))??[]);
  // const [contacts, setContacts] = useState(contactsDefault);
  const [filter, setFilter] = useState('');


const formSubmitHandler = data => {
  
    const newName=data.name

    if (contacts.find(obj => obj.name === newName)) {
     return alert(` ${newName} is already in contacts`);
    } 
    addNowEllContacts(data.name, data.number);
 }
 

const addNowEllContacts = (name, number) => {
    const nowEllArray = {
      name,
      number,
      id: nanoid(),
    };
    setContacts([...contacts, nowEllArray])
  };


  const changeFilter = (e) => {
  console.log('', e.currentTarget.value);
    setFilter(e.currentTarget.value);
  }

const  removeContact = (id) => {
  console.log(id);
  console.log(contacts);
  const contactsCurrent = contacts.filter((contact) => {
      // console.log(contacts);
      return contact.id !== id;
    });
   setContacts(contactsCurrent);
  }


  useEffect(() => {
    console.log('Зміни в контактах');
    localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts])

  return (
    <Container>
         <TitlePhonebook>Phonebook</TitlePhonebook>
         <ContactForm onSubmit={formSubmitHandler}/>
         <TitleContacts>Contacts</TitleContacts>
         <Filter value={filter}  onChange={changeFilter}/>
         <ListContacts arrayContacts={contacts} search={filter} removeContact={removeContact} />
       </Container>
  );
}

export default App;


