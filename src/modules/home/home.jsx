import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        Home text
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUserInfo: state.user.authUserInfo,
});

const mapDispatchToProps = dispatch => ({
  // userGetById: userId => dispatch(userGetById(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
