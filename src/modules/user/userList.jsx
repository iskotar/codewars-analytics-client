import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactTable from 'react-table';
import { Link, withRouter } from 'react-router-dom';
import { userGetAll } from './_actions/userActions';

class UserList extends Component {
  componentDidMount() {
    if (_.isEmpty(this.props.userList)) {
      this.props.userGetAll();
    }
  }

  columns() {
    return [
      {
        Header: 'Id',
        id: '_id',
        accessor: el => <Link to={`/user/${el._id}`}>Profile</Link>
      },
      {
        Header: 'Name',
        id: 'name',
        accessor: el => (
          <span>
            {el.codewarsAnalytics[el.codewarsAnalytics.length - 1].data.username}{' '}
            <strong>
              {el.codewarsAnalytics[el.codewarsAnalytics.length - 1].data.name}
            </strong>
          </span>
        )
      },
      {
        Header: 'Rank',
        id: 'rank',
        accessor: el =>
          el.codewarsAnalytics[el.codewarsAnalytics.length - 1].data.ranks.overall.name
      },
      {
        Header: 'Honor',
        id: 'honor',
        accessor: el => el.codewarsAnalytics[el.codewarsAnalytics.length - 1].data.honor
      },
      {
        Header: 'Completed',
        id: 'copmpleted',
        accessor: el =>
          el.codewarsAnalytics[el.codewarsAnalytics.length - 1].data.codeChallenges
            .totalCompleted
      }
    ];
  }

  render() {
    console.log(this.props.userList);
    return (
      <div>
        <ReactTable
          className="light border"
          data={this.props.userList}
          columns={this.columns()}
          minRows={0}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.user.userList
});

const mapDispatchToProps = dispatch => ({
  userGetAll: () => dispatch(userGetAll())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserList)
);
