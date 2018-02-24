import React from 'react';
import './_modal.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section id='modal'>
        {this.props.children}
      </section>
    )
  }
}

export default Modal;