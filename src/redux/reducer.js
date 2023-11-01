import { combineReducers } from '@reduxjs/toolkit';
import { contactFormReducer } from './contactForm/contactFormSlice';

export const reducer = combineReducers({
  contactForm: contactFormReducer,
  // phonebook: phonebookReducer,
});
