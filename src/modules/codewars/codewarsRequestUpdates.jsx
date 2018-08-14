import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { codewarsRequestUpdates } from './_actions/codewarsActions';

class CodewarsRequestUpdates extends Component {
  render() {
    return (
      <Button color="primary" onClick={this.props.codewarsRequestUpdates}>
        Request Updates
      </Button>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  codewarsRequestUpdates: () => dispatch(codewarsRequestUpdates())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CodewarsRequestUpdates);
