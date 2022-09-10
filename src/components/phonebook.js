import React from 'react';
import { nanoid } from "nanoid";
import { Form } from './Form';
import { ContactsList } from "./ContactsList"
import { Filter } from './Filter';

export class Phonebook extends React.Component {
    state = {
        contacts: [
                {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
                {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
                {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
                {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: ""
    }

    

    formSubmitHandler = (contactsFormState) => {
        console.log(contactsFormState)
        const { name, number } = contactsFormState;
            const contact = {
            id: nanoid(),
            name: name,
            number: number
        };
        console.log(contact)

        const isRepeat = this.state.contacts.find(
            ({ name }) => name === contactsFormState.name);
        isRepeat
            ? alert(`${name} is already in contacts`)
            : this.setState((prevState) => ({
                contacts: [contact, ...prevState.contacts],
        }));
        // this.setState(({contacts}) => {
        //     return {
        //         contacts: [...contacts, contact]
        //     }
        
        
}

//     getVisibleContacts = () => {
//         const { contacts } = this.state;
//         return contacts.map((contact) =>
//         contact.name)
// }

    findContact = () => {
        const { contacts } = this.state;
        return contacts;
    }
    
    setFilterToState = filterData => {
        console.log(filterData)
        // this.setState({...this.state, filter: `${filterData}`})
    }
    changeFilter = e => {
        this.setState({
            filter: e.currentTarget.value,
        })
        console.log(e.currentTarget.value, this.state)
    }




    render() {
        const { filter, contacts } = this.state;

        const normalizedFilter = filter.toLowerCase();
        const visibleContacts = contacts.filter((contacts) =>
            contacts.name.toLowerCase().includes(normalizedFilter)
        );
    
    return (
        <div>
            <h2>Phonebook</h2>
            <Form onSubmit={this.formSubmitHandler} />
            <h2>Contacts</h2>
            <Filter filter={filter}
                onChange={this.changeFilter } />
            <ContactsList
                contacts={visibleContacts}
            />
        </div>
    )
    }
}


