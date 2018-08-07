import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Col, Form, Row } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { Helmet } from 'react-helmet';
import { TextField } from '../../utils/form/form';
import { email as validEmail, minLength5, required } from '../../utils/form/validators';
import { userRegister } from '../_actions/userActions';
import CodewarsCheckerForm from './codewarsCheckerForm';

class UserRegisterForm extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();

    const email = this.props.userRegisterForm.values.email;
    const password = this.props.userRegisterForm.values.password;
    const codewarsId = this.props.codewarsUsername;

    this.props.userRegister(email, password, codewarsId);
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

            <p className="text-muted">
              https://www.codewars.com/users/Viktor%20Bogutskii
            </p>

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

            <CodewarsCheckerForm />
            {this.props.codewarsUsername && (
              <Button
                type="submit"
                color="primary"
                disabled={_.has(this.props, 'userRegisterForm.syncErrors')}
                value="Register"
              >
                Submit
              </Button>
            )}
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
  userRegister: (email, password, codewarsId) =>
    dispatch(userRegister(email, password, codewarsId))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: 'userRegister' })
)(UserRegisterForm);
