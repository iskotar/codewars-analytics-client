import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Tabs from '../../utils/tabs/tabs';
import UserProfileView from './userProfileView';
import _ from 'lodash';
import { userGetById } from '../_actions/userActions';

class UserProfile extends Component {
  componentDidMount() {
    const urlUserId = this.props.match.params.userId;
    if (!_.isEmpty(urlUserId) && this.props.authUserInfo._id !== urlUserId) {
      this.props.userGetById(this.props.match.params.userId);
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Profile</title>
        </Helmet>

        <h1>Profile</h1>

        <UserProfileView />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUserInfo: state.user.authUserInfo
});

const mapDispatchToProps = dispatch => ({
  userGetById: userId => dispatch(userGetById(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
