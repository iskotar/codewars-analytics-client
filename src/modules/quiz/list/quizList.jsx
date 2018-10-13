import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { groupGetAll } from '../_actions/groupActions';
import { ListGroup, ListGroupItem, Badge, NavItem } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import Permission from './../../permission/permission';

class QuizList extends Component {
  componentDidMount() {
    // this.props.groupGetAll();
  }

  render() {
    return (
      <div>
        <h1>Quiz</h1>

        <Permission perm="quiz.create">
          <NavLink to="/quiz/create" activeClassName="active" className="btn btn-primary">
            Create Quiz
          </NavLink>
        </Permission>
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
  )(QuizList)
);
