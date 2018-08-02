import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import Header from './Header';
import Footer from './Footer';
import Home from '../modules/home/home';
import Warning from '../modules/utils/warning/warning';
import Alert from '../modules/utils/alert/alert';
import UserRegisterForm from '../modules/user/userRegisterForm';
import UserLoginForm from '../modules/user/userLoginForm';
import UserList from '../modules/user/userList';
import UserProfile from '../modules/user/profile/userProfile';

import CurrentBreakpoint from '../modules/utils/currentBreackpoint/currentBreakpoint';
import { userGetById } from '../modules/user/_actions/userActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // After refresh login for current user
    if (_.isEmpty(this.props.userInfo) && !_.isEmpty(localStorage.getItem('userId'))) {
      this.props.userGetById(localStorage.getItem('userId'));
    }
  }

  component() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>CW client</title>
        </Helmet>

        <Alert />

        <Header />

        <Container fluid>
          <Row>
            <Col>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/error" component={Warning} />

                <Route exact path="/user/list" component={UserList} />
                <Route exact path="/user/login" component={UserLoginForm} />
                <Route exact path="/user/register" component={UserRegisterForm} />
                <Route exact path="/user/:userId" component={UserProfile} />
              </Switch>
            </Col>
          </Row>
        </Container>
        <Footer />

        <CurrentBreakpoint />
      </div>
    );
  }

  render() {
    if (this.props.warnings.length) return <Warning />;

    // if (_.isEmpty(this.props.productList) || _.isEmpty(this.props.catalog)) {
    //   return <span>... Loading</span>
    // }

    return this.component();
  }
}

const mapStateToProps = state => ({
  userInfo: state.user.userInfo,
  warnings: state.warning.warnings
});

const mapDispatchToProps = dispatch => ({
  userGetById: userId => dispatch(userGetById(userId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
