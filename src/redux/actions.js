import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}));

const deleteContact = createAction('contacts/delete', contactId => ({
  payload: contactId,
}));

const changeFilter = createAction('contacts/filter', value => ({
  payload: value,
}));

const actions = { addContact, deleteContact, changeFilter };

export default actions;
