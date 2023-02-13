import { useState } from 'react';
import PropTypes from 'prop-types';

import initialState from './initialState';

// ========== styles ===========

import { Form, Input, AddBtn } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleSubmit = e => {
    e.preventDefault();

    if (onSubmit({ name, number })) {
      reset();
    }
  };

  const reset = () => {
    setState({ ...initialState });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const { name, number } = state;

  return (
    <Form onSubmit={handleSubmit}>
      <label>Name</label>
      <Input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        placeholder="Enter name"
      />
      <label>Number</label>
      <Input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        placeholder="Enter phone number"
      />

      <AddBtn type="submit">Add contact</AddBtn>
    </Form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
