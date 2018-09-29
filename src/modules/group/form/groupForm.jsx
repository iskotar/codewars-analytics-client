import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Col, Form, Row } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { TextField } from '../../utils/form/form';
import { required } from '../../utils/form/validators';
import Pre from '../../utils/pre/pre';
import { groupGetById } from './../_actions/groupActions';
import { userGetAllLightweight } from './../../user/_actions/userActions';
import GroupFormUserSelect from './groupFormUserSelect';
import GroupFormUserList from './groupFormUserList';

class GroupForm extends Component {
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
    console.log('SUbmit');
  };

  render() {
    return (
      <div>
        <h1>Edit Group</h1>

        <Form onSubmit={this.formSubmit}>
          <Row>
            <Col xs="12" lg="6">
              <Field
                name="name"
                type="text"
                placeholder="Group name"
                component={TextField}
                validate={[required]}
              />
            </Col>

            <Col xs="6" lg="3">
              <Field
                name="description"
                type="text"
                placeholder="Group description"
                component={TextField}
              />
            </Col>

            <Col xs="6" lg="3">
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

            <Col xs="12" lg="6" className="mt-4 mt-lg-0">
              <GroupFormUserSelect />
            </Col>

            <Col xs="12" lg="6" className="mt-4 mt-lg-0">
              <GroupFormUserList />
            </Col>

            <Col xl="12" />
          </Row>
        </Form>
      </div>
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
  userGetAllLightweight: () => dispatch(userGetAllLightweight())
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: 'group' })
)(GroupForm);
