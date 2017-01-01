/**
 * Routes for express app
 */
import { controllers } from './db';

const todoController = controllers && controllers.todo;

export default (app) => {
  app.get('/todo', todoController.all);
};
