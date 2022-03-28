import {useEffect, useState} from "react";
import List from "./List";
import Form from "./Form";
import"./style.css"


export default function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname:"Mehmet",
      phone_number:"123456"
    },
    {
      fullname:"Omer",
      phone_number:"9876"
    },
    {
      fullname:"Ahmet",
      phone_number:"782357"
    },
    {
      fullname:"Mahmut",
      phone_number:"12365432"
    },
    {
      fullname:"Abdurrezzak",
      phone_number:"754769023"
    }
  ]);
  

  useEffect(()=> {  // to see contacts
    console.log(contacts)
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact= {setContacts} contacts={contacts}/>
    </div>
  );
}
