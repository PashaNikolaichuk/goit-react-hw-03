import s from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import date from "./date.json";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const LOCAL_STORAGE_KEY = "contacts";

const App = () => {
  // Крок 5 - Збереження контактів
  const [contact, setContact] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : date;
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact));
  }, [contact]);

  // Крок 4 - Видалення контактів
  const deleteContact = (id) => {
    setContact((prev) => prev.filter((item) => item.id !== id));
  };

  // Крок 2 - Пошук за ім'ям
  // записує введений текст у стан searchTerm
  const handleFilterChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredContacts = contact.filter((contact) =>
    //  перевіряє, чи містить ім'я контакту введений текст
    // якшо він пустий то дорівнює всьому contact
    contact.name.toLocaleLowerCase().includes(searchTerm)
  );

  // Крок 3 - Додавання контактів
  //                   пропс values
  const addNewContact = (newContact) => {
    //                  some — це функція-перевірка
    const contactExists = contact.some(
      //c — це(contact скорочено) поточний контакт із масиву contact||
      //ім'я поточного контакту - ім'я нового контакту
      (c) => c.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (contactExists) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContact((prevContacts) => [
      // (усі контакти, які вже є)(можна ігшу назву)
      ...prevContacts,
      { id: nanoid(), ...newContact },
    ]);
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <SearchBox value={searchTerm} onChange={handleFilterChange} />
      <ContactList contact={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
