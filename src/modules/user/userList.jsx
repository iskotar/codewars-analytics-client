import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactTable from 'react-table';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';
import { userGetAll } from './_actions/userActions';
import { push } from 'connected-react-router';

class UserList extends Component {
  componentDidMount() {
    if (!_.has(this.props.userAuthorizedInfo, '_id')) {
      this.props.redirectToUserLogin();
    } else {
      this.props.userGetAll();
    }
  }

  getLastCodewarsRecord(el) {
    return el.codewarsAnalytics[el.codewarsAnalytics.length - 1];
  }

  columns() {
    return [
      {
        Header: 'Name',
        id: 'name',
        accessor: el => (
          <span>
            <Link to={`/user/${el._id}`}>
              {this.getLastCodewarsRecord(el).data.username}
            </Link>{' '}
            <strong>{this.getLastCodewarsRecord(el).data.name}</strong>
          </span>
        )
      },
      {
        Header: 'Rank',
        id: 'rank',
        accessor: el => this.getLastCodewarsRecord(el).data.ranks.overall.name
      },
      {
        Header: 'Honor',
        id: 'honor',
        accessor: el => this.getLastCodewarsRecord(el).data.honor
      },
      {
        Header: 'Completed',
        id: 'copmpleted',
        accessor: el => this.getLastCodewarsRecord(el).data.codeChallenges.totalCompleted
      },
      {
        Header: 'Updated',
        id: 'updated',
        accessor: el => moment(this.getLastCodewarsRecord(el).timestamp).format('lll')
      },
      {
        Header: 'Count',
        id: 'records',
        accessor: el => el.codewarsAnalytics.length
      }
    ];
  }

  render() {
    return (
      <div>
        <ReactTable
          className="light border"
          data={this.props.userList}
          columns={this.columns()}
          minRows={0}
          showPagination={false}
          defaultSorted={[
            {
              id: 'honor',
              desc: true
            }
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userAuthorizedInfo: state.user.userAuthorizedInfo,
  userList: state.user.userList
});

const mapDispatchToProps = dispatch => ({
  userGetAll: () => dispatch(userGetAll()),
  redirectToUserLogin: () => dispatch(push('/user/login'))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserList)
);
