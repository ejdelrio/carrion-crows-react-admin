import React from 'react';
import '_memberForm.scss';

class MemberForm extends React.Component {
  constructor(props) {
    super(props);
    let name = '', bio = '', instruments = [];
    if(this.props.member) {
      let {member} = this.props;
      name = member.name;
      bio = member.bio;
      instruments = member.instruments;
    }

    this.state = {
      name,
      bio,
      instruments
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addToInstruments = this.addToInstruments.bind(this);
  }
  onChange(e) {
    let {name, value} = e.target;
    if(name !== instruments) return this.setState({[name]: value});
  }

  addToInstruments(instrument) {
    let stateCopy = {...this.state};
    stateCopy.instruments.push(val);
    return this.setState(stateCopy);
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <input
          name='name'
          type='text'
          placeholder='name'
          required='true'
          value={this.state.name}
          onChange={this.onChange}
        />
        <input
          name='bio'
          type='text'
          placeholder='name'
          required='true'
          value={this.state.bio}
          onChange={this.onChange}
        />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}