import React from 'react';
import { nanoid } from "nanoid";
import { Form } from './Form';
import {ContactsList}  from "./ContactsList"

export class Phonebook extends React.Component {
    state = {
        contacts: [],
    }

    

    formSubmitHandler = ({name, number}) => {
        console.log(name, number)
            const contact = {
            id: nanoid(),
            name,
            number
        };
        console.log(contact)
        this.setState(({contacts}) => {
            return {
                contacts: [...contacts, contact]
            }
        })
        
}

    getVisibleContacts = () => {
        const { contacts } = this.state;
        return contacts.map((contact) =>
        contact.name)
}

    findContact = () => {
        const { contacts } = this.state;
        return contacts;
    }    




    render() {
    return (
        <div>
            <h2>Phonebook</h2>
            <Form onSubmit={this.formSubmitHandler} />
            <h2>Contacts</h2>
            <ContactsList
                findContact={this.findContact}
            />
        </div>
    )
    }
}


