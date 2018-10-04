import React, { Component } from 'react';
import { connect } from 'react-redux';

class Permission extends Component {
  render() {
    return this.props.acl.includes(this.props.perm) && this.props.children;
  }
}

const mapStateToProps = state => ({
  acl: state.user.acl
});

export default connect(mapStateToProps)(Permission);
