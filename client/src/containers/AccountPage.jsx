import React from 'react';
import PropTypes from 'prop-types';
import AccountForm from '../components/AccountForm';

class AccountPage extends React.Component {
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
  }

  changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({ user });
  }

  render() {
    return (
      <AccountForm onSubmit={this.processForm} onChange={this.changeUser} user={this.state.user}/>
    );
  }
}

AccountPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default AccountPage;
