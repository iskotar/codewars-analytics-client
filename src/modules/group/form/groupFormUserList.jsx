import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, Row } from 'reactstrap';
import _ from 'lodash';
import { groupGetById, removeUserFromGroup } from './../_actions/groupActions';
import { ListGroup, ListGroupItem } from 'reactstrap';

class GroupFormUserList extends Component {
  render() {
    return (
      <div>
        {_.get(this.props, 'groupCurrentInfo.members') && (
          <ListGroup>
            {this.props.groupCurrentInfo.members.map(el => (
              <ListGroupItem key={el}>
                {el}
                <Button
                  color="danger"
                  size="sm"
                  className="float-right"
                  onClick={() => this.props.removeUserFromGroup(el)}
                >
                  Remove
                </Button>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groupCurrentInfo: state.group.groupCurrentInfo
});

const mapDispatchToProps = dispatch => ({
  groupGetById: groupId => dispatch(groupGetById(groupId)),
  removeUserFromGroup: userId => dispatch(removeUserFromGroup(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupFormUserList);
