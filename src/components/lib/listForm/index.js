import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    let {name, value} = e.target;
    this.setState({[name]: value});
  }
  onSubmit(e) {
    e.preventDefault();
    if(this.state.input.length === 0) return;
    this.props.addToList(this.state.input)
    this.setState({input: ''});
  }
  render() {
    let placeholder = this.props.placeholder ? this.props.placeholder : ''
    return(
      <div>
        <input
          name='input'
          type='text'
          value={this.state.input}
          placeholder={placeholder}
          onChange={this.onChange}
        />
        <button type='button' onClick={this.onSubmit}>{this.props.buttonText}</button>
      </div>
    );
  };
  
};

export default ListForm;