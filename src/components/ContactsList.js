import { ContactsItem } from "./ContacsItem";

export const ContactsList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => {
                return (
                    <ContactsItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                    />
                )
            })}
        </ul>
    )
}


