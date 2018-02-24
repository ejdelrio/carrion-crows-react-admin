import React from 'react';
import './_bandPage.scss';
import {connect} from 'react-redux';
import MemberForm from '../memberForm';
import BandMember from '../BandMember';
import * as bandMemberAction from '../../actions/bandMemberAction';
let {getMembers, putMember, postMember, deleteMember} = bandMemberAction;


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
        <MemberForm
          buttonText='Add Member'
          memberAction={this.props.postMember}
        />
        <ul>
          {this.props.bandMembers.map((member, ind) => {
            return(
              <li key={ind}>
                <BandMember 
                  member={member} 
                  memberAction={this.props.putMember}
                  deleteMember={this.props.deleteMember}
                />
              </li>
            );
          })}
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
  postMember: member => dispatch(postMember(member)),
  putMember: member => dispatch(putMember(member)),
  deleteMember: member => dispatch(deleteMember(member))
})

export default connect(mapStateToProps, mapDispatchToProps)(BandPage);