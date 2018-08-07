import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Col, Form, Row } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { Helmet } from 'react-helmet';
import { TextField } from '../utils/form/form';
import {
  email as validEmail,
  minLength5,
  required,
  codewarsUserLink
} from '../utils/form/validators';
import { userRegister } from './_actions/userActions';
import { checkCodewarsUser } from './../codewars/_actions/codewarsActions';

class UserRegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.formSubmit = this.formSubmit.bind(this);
    this.checkCodewarsUser = this.checkCodewarsUser.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();

    const email = this.props.userRegisterForm.values.email;
    const password = this.props.userRegisterForm.values.password;
    this.props.userRegister(email, password);
  }

  checkCodewarsUser(e) {
    e.preventDefault();

    console.log();
    const codewarsUrl = this.props.userRegisterForm.values.codewarsLink;
    const codewarsId = codewarsUrl.substring(codewarsUrl.lastIndexOf('/') + 1);

    this.props.checkCodewarsUser(codewarsId);
  }

  form() {
    return (
      <Row>
        <Col sm={12}>
          <h1>User Register</h1>
        </Col>
        <Col sm={6}>
          <Form onSubmit={this.formSubmit}>
            <Helmet>
              <title>Registration</title>
            </Helmet>

            <Field
              name="email"
              type="text"
              placeholder="Email"
              component={TextField}
              validate={[required, validEmail]}
            />

            <Field
              placeholder="Password"
              name="password"
              component={TextField}
              type="password"
              validate={[required, minLength5]}
            />

            <Row>
              <Col sm={12}>https://www.codewars.com/users/Viktor%20Bogutskii</Col>
              <Col sm={9}>
                <Field
                  placeholder="Codewars link"
                  name="codewarsLink"
                  component={TextField}
                  type="text"
                  disabled={this.props.codewarsUsername}
                  validate={[required, codewarsUserLink]}
                  descr={'Go to Codewars profile, copy url and paste it here'}
                />
              </Col>
              <Col sm={3}>
                <Button
                  color="primary"
                  block
                  onClick={this.checkCodewarsUser}
                  disabled={_.has(this.props, 'userRegisterForm.syncErrors.codewarsLink')}
                >
                  Check
                </Button>
              </Col>
            </Row>

            <Button
              type="submit"
              color="primary"
              disabled={_.has(this.props, 'userRegisterForm.syncErrors')}
              value="Register"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }

  insteadForm() {
    return <span>User already registered</span>;
  }

  render() {
    return <div>{_.isEmpty(this.props.userInfo) ? this.form() : this.insteadForm()}</div>;
  }
}

const mapStateToProps = state => ({
  userRegisterForm: state.form.userRegister,
  userInfo: state.user.userInfo,
  codewarsUsername: state.codewars.codewarsInfo.username
});

const mapDispatchToProps = dispatch => ({
  checkCodewarsUser: codewarsId => dispatch(checkCodewarsUser(codewarsId)),
  userRegister: (email, password) => dispatch(userRegister(email, password))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: 'userRegister' })
)(UserRegisterForm);
