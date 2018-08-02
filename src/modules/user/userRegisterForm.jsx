import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Col, Form, Row } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { Helmet } from 'react-helmet';
import { TextField } from '../utils/form/form';
import { email as validEmail, minLength5, required } from '../utils/form/validators';
import { userRegister } from './_actions/userActions';

class UserRegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();

    const email = this.props.userRegisterForm.values.email;
    const password = this.props.userRegisterForm.values.password;
    this.props.userRegister(email, password);
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
              <Col sm={9}>
                <Field
                  placeholder="Codewars link"
                  name="codewarsLink"
                  component={TextField}
                  type="text"
                  validate={[required]}
                  descr={'Go to Codewars profile, copy url and paste it here'}
                />
              </Col>

              <Col sm={3}>
                <Button type="submit" color="primary" value="Register" block>
                  Check
                </Button>
              </Col>
            </Row>

            <Button
              type="submit"
              color="primary"
              disabled={
                this.props.userRegisterForm &&
                {}.hasOwnProperty.call(this.props.userRegisterForm, 'syncErrors')
              }
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
  userInfo: state.user.userInfo
});

const mapDispatchToProps = dispatch => ({
  userRegister: (email, password) => dispatch(userRegister(email, password))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: 'userRegister' })
)(UserRegisterForm);
