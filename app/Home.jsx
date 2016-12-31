import React, { Component, PropTypes } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from './reducers/todos';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {todos, actions} = this.props;

    return (
      <Card>
        <CardTitle title="Home" subtitle="This is the home page" />
        {todos.map(todo =>
          <CardText key={todo.id}> {todo.text}
            <CardActions>
              <FlatButton label="Delete" onClick={() => actions.deleteTodo(todo.id)}/>
            </CardActions>
          </CardText>
        )}
        <FlatButton label="Add" onClick={() => actions.addTodo('new task')}/>
      </Card>
    );
  }
}

Home.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
