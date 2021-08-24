import { Component } from 'react';
import Container from './components/Container';
import initialContacts from './contacts.json';
import PhonebookForm from './components/PhonebookForm';
// import shortid from 'shortid';

export default class App extends Component {
  state = {
    contacts: [initialContacts],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <Container>
        <PhonebookForm onSubmit={this.formSubmitHandler} />
      </Container>
    );
  }
}
