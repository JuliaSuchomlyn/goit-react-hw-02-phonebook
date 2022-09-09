import React from 'react';
import { nanoid } from "nanoid";

export class Form extends React.Component {
    state = {
        name: ""
    }


    nameInputId = nanoid();


    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state)
        // this.setState()
        this.props.onSubmit(this.state)

        this.reset();
    }

    reset = () => {
        this.setState({ name: ""})
    }
    
    render() {
        return ( 
            <form onSubmit={this.handleSubmit} >
                <label htmlFor={this.nameInputId}> Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                        id={this.nameInputId}
                    />
                    
                </label>
                <button type="submit">Add contact</button>
            </form>
        );
    }
}