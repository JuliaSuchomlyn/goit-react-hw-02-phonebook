export const ContactsItem = ({  name, number, deleteContacts }) => {
    return (
        <li>
            {name}: {number}
                    <button
                    type="button"
                    onClick={deleteContacts}
                    > Delete</button>
        </li>
    )
}