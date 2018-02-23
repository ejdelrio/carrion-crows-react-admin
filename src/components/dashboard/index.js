import React from 'react';
import './_dashboard.scss';

import NavMenu from '../navMenu';
import BandPage from '../bandPage';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClass: 'hidden-nav'
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    let stateCopy = {...this.state};
    let menuClass = stateCopy.menuClass === 'hidden-nav' ? '' : 'hidden-nav'
    this.setState({menuClass});
  }

  render() {
    return(
      <section id='dashboard'>
        <div onClick={this.toggleMenu}>X</div>
        <NavMenu 
          menuClass={this.state.menuClass}
          closeMenu={this.toggleMenu}
        />
        <BandPage />
      </section>
    )
  }
}

export default Dashboard;