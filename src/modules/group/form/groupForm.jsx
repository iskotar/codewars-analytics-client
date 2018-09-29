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
import GroupFormUserSelect from './groupFormUserSelect';
import GroupFormUserList from './groupFormUserList';

class GroupForm extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  componentDidMount() {
    const groupId = this.props.match.params.groupId;
    console.log(groupId);
    if (!_.isEmpty(groupId)) {
      this.props.groupGetById(groupId);
    }
  }

  formSubmit = e => {
    e.preventDefault();
    console.log('SUbmit');
  };

  render() {
    console.log(this.props.groupForm);
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

              <Field
                name="description"
                type="text"
                placeholder="Group description"
                component={TextField}
              />
            </Col>

            <Col xs="12" lg="6" className="mt-4 mt-lg-0">
              <GroupFormUserSelect />

              <GroupFormUserList />
            </Col>

            <Col xl="12">
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

              <Pre obj={_.get(this.props, 'groupForm.values', {})} off />
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groupForm: state.form.group,
  groupCurrentInfo: state.group.groupCurrentInfo
});

const mapDispatchToProps = dispatch => ({
  groupGetById: groupId => dispatch(groupGetById(groupId))
  // productCreate: product => dispatch(productCreate(product)),
  // productUpdate: (productId, data) => dispatch(productUpdate(productId, data)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: 'group' })
)(GroupForm);
