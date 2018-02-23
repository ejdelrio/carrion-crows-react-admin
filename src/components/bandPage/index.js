import React from 'react';
import './_bandPage.scss';
import {connect} from 'react-redux';

class BandPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

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
mapStateToProps = dispatch => ({
  bandMembers: state.bandMembers
})

export default connect(mapStateToProps, undefined)(BandPage);