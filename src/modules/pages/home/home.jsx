import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  userAuthorizedInfo: state.user.userAuthorizedInfo,
});

const mapDispatchToProps = dispatch => ({
  // userGetById: userId => dispatch(userGetById(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
