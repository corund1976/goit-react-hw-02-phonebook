import { Component } from 'react';
import s from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleBtnSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    console.log(`
      Name: ${name}
      Number: ${number}
    `);

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <form
            onSubmit={this.handleBtnSubmit} 
            className={s.form} 
            autoComplete="off">
        
        <label className={s.label}>
          Name
          <input
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
                onChange={this.handleInputChange}
                className={s.input}
          />
        </label>

        <label className={s.label}>
          Number
          <input
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
                onChange={this.handleInputChange}
                className={s.input}
          />
        </label>        

        <button type="submit" className={s.btn}>Add contact</button>
      </form>
    );
  }
};

export default ContactForm;