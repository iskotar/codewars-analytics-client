import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Col, Form, Row } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { Helmet } from 'react-helmet';
import { TextField } from '../../utils/form/form';
import {
  email as validEmail,
  minLength5,
  required,
  realName,
  phoneNumber
} from '../../utils/form/validators';
import { userRegister } from '../_actions/userActions';
import CodewarsCheckerForm from './codewarsCheckerForm';

class UserRegisterForm extends Component {
  formSubmit = e => {
    e.preventDefault();

    const email = this.props.userRegisterForm.values.email;
    const password = this.props.userRegisterForm.values.password;
    const codewarsId = this.props.codewarsUsername;
    const name = this.props.userRegisterForm.values.name;
    const phone = this.props.userRegisterForm.values.phone;

    this.props.userRegister(email, password, codewarsId, name, phone);
  };

  form() {
    return (
      <Row>
        <Col sm={12}>
          <h1>User Register</h1>
        </Col>
        <Col sm={12} md={10} lg={6}>
          <Form onSubmit={this.formSubmit}>
            <Helmet>
              <title>Registration</title>
            </Helmet>

            <Field
              name="name"
              type="text"
              placeholder="Real name"
              component={TextField}
              validate={[required, realName]}
              descr={'Please enter your real name and surname'}
            />

            <Field
              name="phone"
              type="text"
              placeholder="Cell phone number"
              component={TextField}
              validate={[required, phoneNumber]}
              descr="Format +1777005511 or +380653332244"
            />

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

  insteadForm = () => <span>User already registered</span>;

  render() {
    return (
      <div>
        {_.isEmpty(this.props.userAuthorizedInfo) ? this.form() : this.insteadForm()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userRegisterForm: state.form.userRegister,
  userAuthorizedInfo: state.user.userAuthorizedInfo,
  codewarsUsername: state.codewars.codewarsInfo.username
});

const mapDispatchToProps = dispatch => ({
  userRegister: (email, password, codewarsId, name, phone) =>
    dispatch(userRegister(email, password, codewarsId, name, phone))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: 'userRegister' })
)(UserRegisterForm);
