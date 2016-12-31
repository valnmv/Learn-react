import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import {AppBar, FlatButton} from 'material-ui';
// import styles from './App.css';
import DevTools from './DevTools';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.touchTap = this.touchTap.bind(this);
  }

  // go to home page on click header
  touchTap() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <DevTools/>
        <AppBar title="React" onTitleTouchTap={this.touchTap}>
          <FlatButton containerElement={< Link to = "/about" />} label="About"/>
          <FlatButton containerElement={< Link to = "/" />} label="Home"/>
        </AppBar>

        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
