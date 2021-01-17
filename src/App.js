import Container from './components/Container/Container';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Notification from './components/Notification/Notification';
import { useSelector } from 'react-redux';
import { getContacts } from './redux/selectors';

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Section title="Phone book">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 && <Filter />}
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <Notification message="Nothing to show." />
        )}
      </Section>
    </Container>
  );
}
