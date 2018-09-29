import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { groupGetById, removeUserFromGroup } from './../_actions/groupActions';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class GroupFormUserSelect extends Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    return (
      <div className="form-group">
        <Select
          value={this.state.selectedOption}
          onChange={this.handleChange}
          options={options}
        />
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
)(GroupFormUserSelect);
