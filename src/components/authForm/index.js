import React from 'react';
import './_authForm.scss';
import * as util from '../../lib/util.js';
let {renderIf} = util;
console.log(util)


class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      email: '',
      passWord: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    let {name, value} = e.target;
    this.setState({[name]: value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.submission(this.state)
    .catch(err => console.error(err));
  }

  render() {
    let emailInput = (
      <input
        name={'email'}
        type={'email'}
        required={true}
        value={this.state.email}
        onChange={this.onChange}
        placeholder={'Email'}
      ></input>
    )
    return(
      <form id='auth-form' onSubmit={this.onSubmit} className={this.props.formClass}>
        <input
          name={'userName'}
          type={'text'}
          required={true}
          value={this.state.userName}
          onChange={this.onChange}
          placeholder={'User Name'}
        ></input>
        {renderIf(this.props.buttonText === 'Sign Up', emailInput)}
        <input
          name={'passWord'}
          type={'password'}
          required={true}
          value={this.state.passWord}
          onChange={this.onChange}
          placeholder={'Password'}
        ></input>
        <button type={'submit'}>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default AuthForm;