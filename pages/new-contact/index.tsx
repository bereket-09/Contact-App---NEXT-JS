import { useRef } from "react";
import ContactForm from "../../components/new-contact-Form.component";
import axios from "axios";
import Router, { useRouter } from "next/router";

 function CreateContact(props: any) {
  let router = useRouter();
  async function addContact(ContactData: any) {
    await axios.post("http://localhost:4000/contacts", ContactData);
     router.replace("/");
  }

  return (
    <div>
      <ContactForm onAddContact={addContact}></ContactForm>
    </div>
  );
}

export default CreateContact;
