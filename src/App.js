import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Container from './components/Container';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  //===== Метод добавления нового контакта =====
  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    // Проверка на повторный ввод существующего контакта
    contacts.some(contact =>
      contact.name.toLowerCase() === name.toLowerCase())
      ?
        alert(`${name} is already in contacts.`)
      : 
        this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  }

  //===== Метод удаления контакта =====
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  //===== Метод фильтра
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  // делаем видимыми контакты, которые соответствуют тексту поиска в инпуте
  showFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(filter),
    );
  };

  render() {
    const { filter } = this.state;
    const { addContact, changeFilter, deleteContact, showFilteredContacts } = this;
    return (
      <Container>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm
            addContact={addContact} />
        </Section>
        
        <Section>
          <h2>Contacts</h2>
          <Filter
            value={filter}
            changeFilter={changeFilter} />
          <ContactList
            showFilteredContacts={showFilteredContacts}
            deleteContact={deleteContact} />
        </Section>
      </Container>
    );
  }
};

export default App;