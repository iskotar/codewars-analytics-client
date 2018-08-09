import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import CodewarsCurrentStatus from './../../codewars/codewarsCurrentStatus';

class UserProfileView extends Component {
  render() {
    const { codewarsAnalytics } = this.props.userInfo;

    return (
      <div>
        <Helmet>
          <title>Profile</title>
        </Helmet>

        {this.props.userInfo.email}

        <hr />

        {codewarsAnalytics && (
          <CodewarsCurrentStatus codewarsAnalytics={codewarsAnalytics} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.user.userInfo
});

const mapDispatchToProps = dispatch => ({
  // userLogin: (email, password) => dispatch(userLogin(email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileView);
