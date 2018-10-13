import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, Row } from 'reactstrap';
import _ from 'lodash';
import { groupGetById, groupUpdateById } from '../_actions/groupActions';
import { userGetAllLightweight } from '../../user/_actions/userActions';
import Permission from '../../permission/permission';

class GroupView extends Component {
  componentDidMount() {
    const groupId = this.props.match.params.groupId;
    if (!_.isEmpty(groupId)) {
      this.props.groupGetById(groupId);
    }
  }

  render() {
    return (
      <Permission perm="group.update.any">
        <h1>Group {this.props.groupCurrentInfo.name}</h1>
        <p>{this.props.groupCurrentInfo.description}</p>
      </Permission>
    );
  }
}

const mapStateToProps = state => ({
  groupCurrentInfo: state.group.groupCurrentInfo,
});

const mapDispatchToProps = dispatch => ({
  groupGetById: groupId => dispatch(groupGetById(groupId)),
  userGetAllLightweight: () => dispatch(userGetAllLightweight()),
  groupUpdateById: (groupId, groupForm) => dispatch(groupUpdateById(groupId, groupForm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupView);
