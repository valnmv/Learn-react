import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createRoutes from 'routes';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const routes = createRoutes();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>
  </MuiThemeProvider>,
document.getElementById('root'));
