import React from 'react';
import {connect} from 'react-redux';
import './_authPage.scss';

import * as authAction from '../../actions/authAction';
import AuthForm from '../authForm';

class AuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminExists: true
    };

  }

  componentWillMount() {
    this.props.checkUser()
    .then(val => this.setState({adminExists: val}));
  }

  render() {
    console.log(this.state)
    let sumbitAction = this.state.adminExists ?
    this.props.login :
    this.props.signup;

    let buttonText = this.state.adminExists ?
    'Login':
    'Sign Up';

    return(
      <section>
        <AuthForm 
          submission={sumbitAction}
          buttonText={buttonText}
        />
      </section>
    )
  }

}

let mapStateToProps = state => ({
  token: state.token
})

let mapDispatchToProps = dispatch => ({
  login: user => dispatch(authAction.login(user)),
  signup: user => dispatch(authAction.signup(user)),
  checkUser: () => dispatch(authAction.checkUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);