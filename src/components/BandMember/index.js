import React from 'react';
import './_bandMember.scss';
import MemberForm from '../memberForm';
import Modal from '../lib/modal';
import * as util from '../../lib/util';
const {renderIf} = util;

class BandMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      showModal: false
    }
    this.toggleState = this.toggleState.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
    this.submitDelete = this.submitDelete.bind(this);
  }
  toggleState(name) {
    let stateCopy = {...this.state};
    stateCopy[name] = !stateCopy[name];
    console.log(stateCopy);
    this.setState(stateCopy);
  }
  submitUpdate(member) {
    this.props.memberAction(member)
    this.setState({showForm: false});
  }
  submitDelete() {
    this.props.deleteMember(this.props.member);
    this.setState({showModal: false});

  }

  render() {
    let {name, bio, instruments} = this.props.member;
    let modalChildren = (
      <Modal>
        <section id='member-delete'>
          <h3>Are you sure you want to delete this band member?</h3>
          <button 
            type='button' 
            onClick={() => this.toggleState('showModal')}
          >
            Cancel
          </button>
          <button
            type='button'
            onClick={this.submitDelete}
          >
            Delete
          </button>
        </section>
      </Modal>
    )

    let content = (
      <section>
      {util.renderIf(this.state.showModal, modalChildren)}
        <h4>{`Name: ${name}`}</h4>
        <p>{`Bio:  ${bio}`}</p>
        <p>{`Instruments: ${instruments.join(', ')}`}</p>
        <button type='button' onClick={() => this.toggleState('showForm')}>Update</button>
        <button type='button' onClick={() => this.toggleState('showModal')}>Delete</button>
      </section>
    )
    return(
      !this.state.showForm ?
      content :
      <MemberForm 
        member={this.props.member}
        buttonText='Update'
        cancelForm={() => this.toggleState('showForm')}
        memberAction={this.submitUpdate}
      />
    );
  };
};

export default BandMember