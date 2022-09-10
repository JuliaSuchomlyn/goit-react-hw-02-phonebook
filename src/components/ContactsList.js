import { ContactsItem } from "./ContacsItem";

export const ContactsList = ({ findContact }) => {
    return (
        <ul>
            {findContact().map(({ id, name, number }) => {
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


