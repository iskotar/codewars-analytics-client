import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Col, Row } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { TextField } from '../../utils/form/form';
import { required, codewarsUserLink } from '../../utils/form/validators';
import { checkCodewarsUser } from '../../codewars/_actions/codewarsActions';

class CodewarsCheckerForm extends Component {
  constructor(props) {
    super(props);
    this.checkCodewarsUser = this.checkCodewarsUser.bind(this);
  }

  checkCodewarsUser(e) {
    e.preventDefault();

    const codewarsUrl = this.props.codewarsCheckerForm.values.codewarsLink;
    const codewarsId = codewarsUrl.substring(codewarsUrl.lastIndexOf('/') + 1);

    this.props.checkCodewarsUser(codewarsId);
  }

  render() {
    return (
      <div>
        {this.props.codewarsUsername ? (
          <Row>
            <Col sm={12}>
              <p className="text-success">
                Successfully checked Codewars user{' '}
                <strong>{this.props.codewarsUsername}</strong>
              </p>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col sm={9}>
              <Field
                placeholder="Codewars link"
                name="codewarsLink"
                component={TextField}
                type="text"
                disabled={this.props.codewarsUsername}
                validate={[required, codewarsUserLink]}
                descr={'Go to Codewars profile, copy url and paste it here'}
              />
            </Col>

            <Col sm={3}>
              <Button
                color="primary"
                block
                onClick={this.checkCodewarsUser}
                disabled={_.has(this.props, 'userRegisterForm.syncErrors.codewarsLink')}
              >
                Check
              </Button>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  codewarsCheckerForm: state.form.codewarsChecker,
  codewarsUsername: state.codewars.codewarsInfo.username
});

const mapDispatchToProps = dispatch => ({
  checkCodewarsUser: codewarsId => dispatch(checkCodewarsUser(codewarsId))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: 'codewarsChecker' })
)(CodewarsCheckerForm);
