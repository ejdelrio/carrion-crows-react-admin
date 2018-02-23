import React from 'react';

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <section>
        <ul>
          <li>Home</li>
          <li>Band Members</li>
        </ul>
      </section>
    )
  }
}