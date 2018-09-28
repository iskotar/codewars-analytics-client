import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { groupGetAll } from '../_actions/groupActions';
import { ListGroup, ListGroupItem } from 'reactstrap';

class GroupList extends Component {
  componentDidMount() {
    this.props.groupGetAll();
  }

  render() {
    return (
      <div>
        <h1>Groups</h1>
        <ListGroup>
          {this.props.groupList.map(el => (
            <ListGroupItem key={el._id}>{el.name}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groupList: state.group.groupList
});

const mapDispatchToProps = dispatch => ({
  groupGetAll: () => dispatch(groupGetAll())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GroupList)
);
