import Todo from './models';

export default (app) => {
  app.get('/todo', () => {
    Todo.find({});
  });
};
