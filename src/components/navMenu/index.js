import React from 'react';
import './_navMenu.scss';


class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <section id='nav-menu' className={this.props.menuClass}>
        <div onClick={this.props.closeMenu}>X</div>
        <ul>
          <li>Home</li>
          <li>Band Members</li>
          <li>Albums</li>
        </ul>
      </section>
    )
  }
}

export default NavMenu;