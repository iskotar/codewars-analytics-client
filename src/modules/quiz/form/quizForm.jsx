import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Col, Form, Row } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { TextField, TextArea } from '../../utils/form/form';
import { required } from '../../utils/form/validators';
import { groupGetById, groupUpdateById } from './../_actions/groupActions';
import { userGetAllLightweight } from './../../user/_actions/userActions';
import QuizAnswerForm from './quizAnswerForm';
import GroupFormUserList from './quizAnswerForm';
import Permission from './../../permission/permission';

class QuizForm extends Component {
  componentDidMount() {
    const groupId = this.props.match.params.groupId;
    if (!_.isEmpty(groupId)) {
      this.props.groupGetById(groupId);
    }

    if (_.isEmpty(this.props.userListLightweight)) {
      this.props.userGetAllLightweight();
    }
  }

  formSubmit = e => {
    e.preventDefault();

    const { _id, members } = this.props.groupCurrentInfo;

    this.props.groupUpdateById(_id, {
      name: this.props.groupForm.values.name,
      description: this.props.groupForm.values.description,
      members
    });
  };

  render() {
    return (
      <Permission perm="quiz.create">
        {/*<h1>Create Quiz</h1>*/}

        <Form onSubmit={this.formSubmit}>
          <Row>
            <Col lg="12">
              <Field
                name="name"
                type="text"
                placeholder="Quiz name"
                component={TextField}
                validate={[required]}
              />
            </Col>

            <Col lg="12">
              <Field
                name="description"
                type="text"
                placeholder="Quiz description"
                component={TextArea}
              />
            </Col>

            <Col lg="12" className="mt-4 mt-lg-0">
              <QuizAnswerForm />
            </Col>
          </Row>

          <Row>
            <Col xs="12" lg="12" className="mt-4">
              <Button
                type="submit"
                color="primary"
                disabled={
                  this.props.groupForm &&
                  {}.hasOwnProperty.call(this.props.groupForm, 'syncErrors')
                }
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </Permission>
    );
  }
}

const mapStateToProps = state => ({
  groupForm: state.form.group,
  groupCurrentInfo: state.group.groupCurrentInfo,
  userListLightweight: state.user.userListLightweight
});

const mapDispatchToProps = dispatch => ({
  groupGetById: groupId => dispatch(groupGetById(groupId)),
  userGetAllLightweight: () => dispatch(userGetAllLightweight()),
  groupUpdateById: (groupId, groupForm) => dispatch(groupUpdateById(groupId, groupForm))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: 'quiz' })
)(QuizForm);
