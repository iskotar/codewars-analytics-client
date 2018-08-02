import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class MainMenu extends Component {
  render() {
    return (
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink to="/about" activeClassName="active" className="nav-link">
            About
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/groups" activeClassName="active" className="nav-link">
            Groups
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/users" activeClassName="active" className="nav-link">
            Users
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default MainMenu;
