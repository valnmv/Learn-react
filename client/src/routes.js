import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MainForm from './MainForm';
import About from './About';
import HomePage from './HomePage';

export default() => {
  return (
    <Route path="/" component={MainForm}>
      <IndexRoute component={HomePage}/>
      <Route path="/about" component={About}/>
    </Route>
  );
};
