import { ContactsItem } from "./ContacsItem";

export const ContactsList = ({ contacts, deleteContacts }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <ContactsItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    deleteContacts={() => deleteContacts(id)}
                >
                </ContactsItem>
            ))}
        </ul>
    )
}


