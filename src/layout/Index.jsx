import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import Header from './Header';
import Footer from './Footer';
import Warning from '../modules/utils/warning/warning';
import Alert from '../modules/utils/alert/alert';
import Routes from './Routes';

import CurrentBreakpoint from '../modules/utils/currentBreackpoint/currentBreakpoint';
import { userGetById } from '../modules/user/_actions/userActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // After refresh login for current user
    if (
      _.isEmpty(this.props.userAuthorizedInfo) &&
      !_.isEmpty(localStorage.getItem('userId'))
    ) {
      this.props.userGetById(localStorage.getItem('userId'));
    }
  }

  component() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>CW monitor</title>
        </Helmet>

        <Alert />

        <Header />

        <Container fluid>
          <Row>
            <Col>
              <Routes />
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

    return this.component();
  }
}

const mapStateToProps = state => ({
  userAuthorizedInfo: state.user.userAuthorizedInfo,
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
