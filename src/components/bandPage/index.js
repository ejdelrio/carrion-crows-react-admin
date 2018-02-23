import React from 'react';
import './_bandPage.scss';
import {connect} from 'react-redux';
import * as bandMemberAction from '../../actions/bandMemberAction';
let {getMembers, putMember, postMember} = bandMemberAction;


class BandPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    }
  }

  componentWillMount() {
    this.props.getMembers()
    .then(members => this.setState({members}));
  }
  render() {
    let members = this.props.bandMembers;
    return(
      <section id='band-page'>
        <ul>
        </ul>
      </section>
    )
  }
}
let mapStateToProps = state => ({
  bandMembers: state.bandMembers
})
let mapDispatchToProps = dispatch => ({
  getMembers: () => dispatch(getMembers()),
  postMember: member => dispatch(postMember(member))
})

export default connect(mapStateToProps, mapDispatchToProps)(BandPage);