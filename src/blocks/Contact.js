import React from 'react';

class Contact extends React.Component {
    state = { 
        name: '',
        email: '',
        message: ''
        }

    inputName = e => this.setState({name: e.target.value})
    inputEmail = e => this.setState({email: e.target.value})
    inputMessage = e => this.setState({message: e.target.value})

    submit = e => {
        e.preventDefault();
        console.log(`Verstuurde info: ${this.state.name}, ${this.state.email}, ${this.state.message} `)
    }

  render() {
    return (
        <div className="container contact">
            <h1>Contact</h1>
            <form action="" onSubmit={this.submit} className="row">
                <fieldset className="col-md-6">
                    <label htmlFor="name">Naam:</label>
                    <input type="text" id="name" name="name" onChange={this.inputName} />
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" onChange={this.inputEmail} />
                </fieldset>
                <fieldset className="col-md-6">
                    <label htmlFor="message">Uw bericht:</label>
                    <textarea rows="4" id="message" name="message" onChange={this.inputMessage} />
                </fieldset>
                <input type="submit" name="submit" />
            </form>
        </div>
    )
  }
}

export default Contact;