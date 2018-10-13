import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { groupGetAll } from '../_actions/groupActions';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import Permission from './../../permission/permission';

class GroupList extends Component {
  componentDidMount() {
    this.props.groupGetAll();
  }

  render() {
    return (
      <Permission perm="group.get.all">
        <h1>Groups</h1>
        <ListGroup>
          {this.props.groupList.map(el => (
            <ListGroupItem key={el._id}>
              <Row>
                <Col>
                  <h4>
                    <Link to={`/group/${el._id}`}>{el.name}</Link>{' '}
                    <Badge color="light" pill>
                      {el.members.length}
                    </Badge>
                  </h4>
                </Col>
                <Col>
                  <Permission perm="group.update.any">
                    <Link to={`/group/edit/${el._id}`}>Edit</Link>
                  </Permission>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ul className="pl-0">
                    {el.members.map(item => (
                      <Badge color="light" key={item.codewarsId} className="mr-2">
                        {item.codewarsId}
                      </Badge>
                    ))}
                  </ul>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Permission>
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
