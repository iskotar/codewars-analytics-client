import React, { Component } from 'react';
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  UncontrolledDropdown
} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { userLogout } from './_actions/userActions';

class UserSection extends Component {
  userShortInfo() {
    return (
      <Collapse isOpen={this.props.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              {this.props.userAuthorizedInfo.codewarsId}
            </DropdownToggle>

            <DropdownMenu>
              <Link to={`/user/${this.props.userAuthorizedInfo._id}`}>
                <DropdownItem>Profile</DropdownItem>
              </Link>

              <Link to={`/user/edit/${this.props.userAuthorizedInfo._id}`}>
                <DropdownItem>Settings</DropdownItem>
              </Link>
              <DropdownItem divider />
              <DropdownItem onClick={() => this.props.userLogout()}>Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    );
  }

  unauthMenu() {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/user/login" className="nav-link">
            Login
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/user/register" className="btn btn-outline-primary">
            Register
          </Link>
        </NavItem>
      </Nav>
    );
  }

  render() {
    return _.isEmpty(this.props.userAuthorizedInfo)
      ? this.unauthMenu()
      : this.userShortInfo();
  }
}

const mapStateToProps = state => ({
  userAuthorizedInfo: state.user.userAuthorizedInfo
});

const mapDispatchToProps = dispatch => ({
  userLogout: () => dispatch(userLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSection);
