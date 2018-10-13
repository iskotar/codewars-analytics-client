import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, Col, Form, Row } from 'reactstrap';
import _ from 'lodash';
import { groupGetById, removeUserFromGroup } from './../_actions/groupActions';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { TextArea, TextField, Checkbox } from '../../utils/form/form';
import { required } from '../../utils/form/validators';
import GroupFormUserSelect from './groupFormUserSelect';
import Permission from '../../permission/permission';
import { compose } from 'redux';

class QuizAnswerForm extends Component {
  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <Row>
          <Col lg="6">
            <Field
              name="name"
              type="text"
              placeholder="Answer"
              component={TextField}
              validate={[required]}
            />
          </Col>

          <Col lg="3">
            <Field
              name="description"
              type="text"
              placeholder="Quiz description"
              component={Checkbox}
            />
          </Col>
        </Row>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  groupCurrentInfo: state.group.groupCurrentInfo,
  userListLightweight: state.user.userListLightweight
});

const mapDispatchToProps = dispatch => ({
  groupGetById: groupId => dispatch(groupGetById(groupId)),
  removeUserFromGroup: userId => dispatch(removeUserFromGroup(userId))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: 'group' })
)(QuizAnswerForm);
