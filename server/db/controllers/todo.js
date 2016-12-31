// import _ from 'lodash';
import Todo from '../models/todo';

/**
 * List
 */
export function all(req, res) {
  Todo.find({}).exec((err, data) => {
    if (err) {
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.json(data);
  });
}

export default {
  all
};
