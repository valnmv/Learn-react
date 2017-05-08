import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const LoginForm = ({
  onSubmit,
  onChange,
  user
}) => (
  <Card>
    <CardTitle title="Sign In" />
    <form action="/" onSubmit={onSubmit}>
      <TextField
        floatingLabelText="Email"
        floatingLabelFixed
        name="email"
        onChange={onChange}
        value={user.email}
      /><br />
      <TextField
        floatingLabelText="Password"
        floatingLabelFixed
        name="password"
        type="password"
        onChange={onChange}
        value={user.password}
      /><br />
      <RaisedButton type="submit" label="Sign In" primary/>
    </form>
  </Card>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
