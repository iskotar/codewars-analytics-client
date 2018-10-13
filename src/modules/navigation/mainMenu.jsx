import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';

class MainMenu extends Component {
  render() {
    return (
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink to="/about" activeClassName="active" className="nav-link">
            About
          </NavLink>
        </NavItem>

        {_.has(this.props.userAuthorizedInfo, '_id') && (
          <NavItem>
            <NavLink to="/groups" activeClassName="active" className="nav-link">
              Groups
            </NavLink>
          </NavItem>
        )}

        {_.has(this.props.userAuthorizedInfo, '_id') && (
          <NavItem>
            <NavLink to="/quiz" activeClassName="active" className="nav-link">
              Quiz
            </NavLink>
          </NavItem>
        )}

        {_.has(this.props.userAuthorizedInfo, '_id') && (
          <NavItem>
            <NavLink to="/users" activeClassName="active" className="nav-link">
              Users
            </NavLink>
          </NavItem>
        )}
      </Nav>
    );
  }
}
const mapStateToProps = state => ({
  userAuthorizedInfo: state.user.userAuthorizedInfo
});

export default withRouter(connect(mapStateToProps)(MainMenu));
