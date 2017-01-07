import React, {PropTypes} from 'react';
import {AppBar} from 'material-ui';
import MainMenu from './MainMenu';

class MainForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar title="React" iconElementRight={<MainMenu />} />
        {this.props.children}
      </div>
    );
  }
}

MainForm.propTypes = {
  children: PropTypes.object.isRequired
};

export default MainForm;
