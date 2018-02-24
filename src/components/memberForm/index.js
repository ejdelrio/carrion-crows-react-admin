import React from 'react';
import './_memberForm.scss';
import ListForm from '../lib/listForm';

class MemberForm extends React.Component {
  constructor(props) {
    super(props);
    let name = '', bio = '', instruments = [], _id;
    if(this.props.member) {
      let {member} = this.props;
      name = member.name;
      bio = member.bio;
      instruments = member.instruments;
      _id = member._id;
    }

    this.state = {
      name,
      bio,
      instruments,
      _id
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addToInstruments = this.addToInstruments.bind(this);
  }
  onChange(e) {
    let {name, value} = e.target;
    if(name !== 'instruments') return this.setState({[name]: value});
  }

  addToInstruments(instrument) {
    let stateCopy = {...this.state};
    stateCopy.instruments.push(instrument);
    return this.setState(stateCopy);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.memberAction(this.state);
  }

  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <input
          name='name'
          type='text'
          placeholder='Name'
          required='true'
          value={this.state.name}
          onChange={this.onChange}
        />
                <ul>
          {this.state.instruments.map((val, ind) => {
            return(
              <li key={ind}>
                <p>{val}</p>
              </li>
            );
          })}
        </ul>
        <ListForm 
          buttonText='Add Instrument'
          addToList={this.addToInstruments}
          placeholder='Enter Instrument Name'
        />
        <textarea
          name='bio'
          type='text'
          placeholder='Bio'
          required='true'
          value={this.state.bio}
          onChange={this.onChange}
        ></textarea>
        <button type='submit'>{this.props.buttonText}</button>
        <button type='button' onClick={this.props.cancelForm}>Cancel</button>
      </form>
    )
  }
}

export default MemberForm;