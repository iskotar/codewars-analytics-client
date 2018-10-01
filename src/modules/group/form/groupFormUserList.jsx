import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, Row } from 'reactstrap';
import _ from 'lodash';
import { groupGetById, removeUserFromGroup } from './../_actions/groupActions';
import { ListGroup, ListGroupItem } from 'reactstrap';

class GroupFormUserList extends Component {
  userList = () => {
    const members = _.get(this.props, 'groupCurrentInfo.members', []);
    const all = _.get(this.props, 'userListLightweight', []);
    return all.filter(el => members.includes(el._id)) || [];
  };

  render() {
    return (
      <div>
        <ListGroup>
          {this.userList().map(el => (
            <ListGroupItem key={el._id}>
              {el.codewarsId}
              {el.name}
              <Button
                color="danger"
                size="sm"
                className="float-right"
                onClick={() => this.props.removeUserFromGroup(el._id)}
              >
                Remove
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupFormUserList);
