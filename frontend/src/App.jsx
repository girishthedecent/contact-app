import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

const API = import.meta.env.VITE_API_URL;

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get(`${API}/api/contacts/view`);
    setContacts(Array.isArray(res.data) ? res.data : []);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <h2>Contact Management</h2>
      <ContactForm onAdd={fetchContacts} />
      <ContactList contacts={contacts} />
    </div>
  );

}

export default App;
