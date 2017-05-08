import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthActions from '../reducers/auth';

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
  }

  processForm = (event)=> {
    event.preventDefault();
    this.props.actions.signIn(this.state.user);
  }

  changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({ user });
  }

  render() {
    return (
      <LoginForm onSubmit={this.processForm} onChange={this.changeUser} user={this.state.user}/>
    );
  }
}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
