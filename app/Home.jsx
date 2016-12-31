import React, { Component, PropTypes } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { TextField, FlatButton } from 'material-ui';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from './reducers/todos';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.state = {text: ''};
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  handleAddClick = () => {
    this.props.actions.addTodo(this.state.text);
  }

  render() {
    const {todos, actions} = this.props;

    return (
      <Card>
        <CardTitle title="Home" subtitle="This is the home page" />
        { todos.map(todo =>
          <CardText key={todo.id}>{todo.text}
            <CardActions>
              <FlatButton label="Delete" onClick={ () => actions.deleteTodo(todo.id) }/>
            </CardActions>
          </CardText>
        )}

        <TextField hintText="New todo text" onChange={this.handleChange} />
        <FlatButton label="Add" onClick={this.handleAddClick}/>
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
