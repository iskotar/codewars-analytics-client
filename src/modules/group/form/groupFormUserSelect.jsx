import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { groupGetById, addUserToGroup } from './../_actions/groupActions';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

class GroupFormUserSelect extends Component {
  render() {
    return (
      <div className="form-group">
        {_.get(this.props, 'userListLightweight') && (
          <ListGroup>
            {this.props.userListLightweight.map(el => (
              <ListGroupItem key={el._id}>
                {el.codewarsId}
                <Button
                  color="primary"
                  size="sm"
                  className="float-right"
                  onClick={() => this.props.addUserToGroup(el._id)}
                >
                  Add
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
  groupCurrentInfo: state.group.groupCurrentInfo,
  userListLightweight: state.user.userListLightweight
});

const mapDispatchToProps = dispatch => ({
  groupGetById: groupId => dispatch(groupGetById(groupId)),
  addUserToGroup: userId => dispatch(addUserToGroup(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupFormUserSelect);
