import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import MainMenu from './mainMenu';
import UserSection from '../user/userSection';

class MainBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar expand="md">
        <NavLink to="/">
          <span id="site-name">CW Monitor</span>
        </NavLink>

        <NavbarToggler onClick={this.toggle} />

        <Collapse isOpen={this.state.isOpen} navbar id="site-menu">
          <MainMenu />
        </Collapse>

        <Collapse isOpen={this.state.isOpen} navbar id="user-section">
          <UserSection />
        </Collapse>
      </Navbar>
    );
  }
}

export default MainBar;
