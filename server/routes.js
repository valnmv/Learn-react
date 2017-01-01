import Todo from './models/todo';

export function get(req, res) {
  Todo.find({}).exec((err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.json({data});
  });
}

export function post(req, res) {
  const newTodo = new Todo(req.body.post);
  newTodo.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ todo: saved });
  });
}

export default (app) => {
  app.get('/todo', get);
  app.post('/todo', post);
};
