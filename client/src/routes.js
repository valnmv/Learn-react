import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MainForm from './MainForm';
import About from './About';
import HomePage from './HomePage';
import ItemCard from './ItemCard';

export default() => {
  return (
    <Route path="/" component={MainForm}>
      <IndexRoute component={HomePage}/>
      <Route path="/about" component={About}/>
      <Route path="/item/:_id" component={ItemCard}/>
    </Route>
  );
};
