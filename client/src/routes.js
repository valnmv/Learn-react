import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MainForm from './components/MainForm';
import About from './components/About';
import HomePage from './components/HomePage';
import ItemCard from './components/ItemCard';
import LoginPage from './containers/LoginPage';

export default() => {
  return (
    <Route path="/" component={MainForm}>
      <IndexRoute component={HomePage}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/item/:_id" component={ItemCard}/>
    </Route>
  );
};
