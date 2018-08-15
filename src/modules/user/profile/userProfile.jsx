import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Tabs from '../../utils/tabs/tabs';
import UserProfileView from './userProfileView';
import _ from 'lodash';
import { userGetById } from '../_actions/userActions';

class UserProfile extends Component {
  componentDidMount() {
    if (!_.isEmpty(this.props.match.params.userId)) {
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

        <Tabs
          tabs={[
            {
              name: 'view',
              label: 'View',
              content: <UserProfileView />,
              default: true
            }
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.user.userInfo
});

const mapDispatchToProps = dispatch => ({
  userGetById: userId => dispatch(userGetById(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
