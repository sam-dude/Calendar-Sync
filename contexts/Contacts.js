import { createContext, useEffect } from "react";
import * as Contacts from 'expo-contacts';

const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.Emails],
            });
    
            if (data.length > 0) {
              const contact = data[0];
              console.log(contact);
            }
          }
        })();
      }, []);
  return (
    <ContactsContext.Provider value={{}}>
      {children}
    </ContactsContext.Provider>
  )
}