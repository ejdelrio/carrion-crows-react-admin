import React from 'react';
import AuthPage from '../authPage';
import {connect} from 'react-redux';
import * as util from '../../lib/util';
import Dashboard from '../dashboard';



class App extends React.Component {

  render() {
    let {token} = this.props;
    return(
      <section>
        {util.renderIf(!token, <AuthPage  token={token}/>)}
        {util.renderIf(token, <Dashboard />)}

      </section>
    );
  }
}

let mapStateToProps = state => ({
  token: state.token
})

export default connect(mapStateToProps, undefined)(App);

