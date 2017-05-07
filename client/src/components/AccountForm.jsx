import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'material-ui/Card';
import { TextField } from 'material-ui/TextField';
import { RaisedButton } from 'material-ui/RaisedButton';

const AccountForm = (onSubmit, onChange, user) => (
  <Card>
    <CardTitle title="Sign In" />
    <form action="/" onSubmit={onSubmit}>
      <TextField name="email" onChange={onChange} value={user.email}/>
      <TextField name="password" type="password" onChange={onChange} value={user.password}/>
      <RaisedButton type="submit" label="Sign In" primary/>
    </form>
  </Card>
);

AccountForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default AccountForm;
