import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MainForm from './MainForm';
import About from './About';
import Home from './Home';

export default() => {
  return (
    <Route path="/" component={MainForm}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
    </Route>
  );
};
