import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { groupGetAll } from '../_actions/groupActions';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { Row, Col } from 'reactstrap';

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
            <ListGroupItem key={el._id}>
              <Row>
                <Col>
                  <h4>
                    {el.name}{' '}
                    <Badge color="secondary" pill>
                      {el.members.length}
                    </Badge>
                  </h4>
                </Col>
                <Col>
                  <Link to={`/group/edit/${el._id}`}>Edit</Link>
                </Col>
              </Row>
            </ListGroupItem>
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
