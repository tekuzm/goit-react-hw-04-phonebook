import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

// ========== components ==========

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

// ========== styles ==========

import { AppStyles } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    return contacts ? contacts : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const isDuplicate = (name, number) => {
    const normalizedName = name.toLowerCase();

    const contact = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(contact);
  };

  const addContact = ({ name, number }) => {
    if (isDuplicate(name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    setContacts(prevContacts => {
      const newContact = {
        id: nanoid(4),
        name,
        number,
      };

      return [newContact, ...prevContacts];
    });

    return true;
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleFilter = ({ target }) => setFilter(target.value);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  };

  const filteredContacts = getFilteredContacts();
  const isContacts = Boolean(contacts.length);

  return (
    <AppStyles>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter handleChange={handleFilter} />
      {isContacts ? (
        <ContactList
          deleteContact={deleteContact}
          contacts={filteredContacts}
        />
      ) : (
        <p>No contacts in the list. Please add one!</p>
      )}
    </AppStyles>
  );
};

export default App;
