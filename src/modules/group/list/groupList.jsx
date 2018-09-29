import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { groupGetAll } from '../_actions/groupActions';
import { ListGroup, ListGroupItem } from 'reactstrap';
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
                  <h4>{el.name}</h4>

                  {el.members.toString()}
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
