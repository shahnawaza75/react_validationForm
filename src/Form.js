import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './Form.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      email: '',
      phone: '',
      male:'',
      formErrors: {firstName:'',lastName:'',email: '',phone:''},
      firstNameValid:false,
      lastNameValid:false,
      emailValid: false,
      phoneValid:false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstNameValid=this.state.firstNameValid;
    let lastNameValid=this.state.lastNameValid;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'firstName':
        firstNameValid = value.length >= 6;
        fieldValidationErrors.firstName = firstNameValid ? '': ' is too short';
        break;
        case 'lastName':
        lastNameValid = value.length >= 6;
        fieldValidationErrors.lastName = lastNameValid ? '': ' is too short';
        break;
    case 'phone':
      phoneValid = value.length >= 6;
      fieldValidationErrors.phone = phoneValid ? '': ' is too short';
      break;
    default:
      break;
  }
    this.setState({formErrors: fieldValidationErrors,
                    firstNameValid:firstNameValid,
                    lastNameValid:lastNameValid,
                    emailValid: emailValid,
                    phoneValid: phoneValid,
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.firstNameValid && this.state.lastNameValid && this.state.emailValid && this.state.phoneValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm">
        <h2>Sign up</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.firstName)}`}>
          <label htmlFor="password">First Name</label>
          <input type="text" className="form-control" name="firstName"
            placeholder="first name"
            value={this.state.firstName}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.lastName)}`}>
          <label htmlFor="password">Last Name</label>
          <input type="text" className="form-control" name="lastName"
            placeholder="last name"
            value={this.state.lastName}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
       
        <div className={`form-group ${this.errorClass(this.state.formErrors.phone)}`}>
          <label htmlFor="phone">Contact</label>
          <input type="phone" className="form-control" name="phone"
            placeholder="Contact"
            value={this.state.phone}
            onChange={this.handleUserInput}  />
        </div>
        <label>Interest:</label>
        <div className={"checkbox-new"}>
          <label htmlFor="male">Traveling</label>
          <input type="checkbox" className="form-control" name="male" id="checkbox1"
            value={this.state.male}
            onChange={this.handleUserInput}  />
             <label htmlFor="male">Watchine Movies</label>
          <input type="checkbox" className="form-control" name="male" id="checkbox2"
            value={this.state.male}
            onChange={this.handleUserInput}  />
        </div>
     
        <label>Gender :</label>
        <div className={"radio_button"}>
          <label htmlFor="male">Male</label>
          <input type="radio" className="form-control" name="male"
            value={this.state.male}
            onChange={this.handleUserInput}  />
    
          <label htmlFor="female">female</label>
          <input type="radio" className="form-control" name="female"
            value={this.state.female}
            onChange={this.handleUserInput}  />
        </div>

        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
      </form>
    )
  }
}

export default Form;
