import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import UserProfileView from './userProfileView';
import _ from 'lodash';
import { userGetCurrent } from '../_actions/userActions';

class UserProfile extends Component {
  componentDidMount() {
    const urlUserId = this.props.match.params.userId;
    if (!_.isEmpty(urlUserId) && this.props.userCurrentInfo._id !== urlUserId) {
      this.props.userGetCurrent(this.props.match.params.userId);
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Profile {`${this.props.userCurrentInfo.codewarsId}`}</title>
        </Helmet>

        {!_.isEmpty(this.props.userCurrentInfo) && (
          <UserProfileView user={this.props.userCurrentInfo} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userCurrentInfo: state.user.userCurrentInfo
});

const mapDispatchToProps = dispatch => ({
  userGetCurrent: userId => dispatch(userGetCurrent(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
