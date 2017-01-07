import React, { Component, PropTypes } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { TextField, FlatButton } from 'material-ui';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from './reducers/todos';

import { callApi } from './callapi';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.state = {
      text: ''
    };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  }

  handleAddClick = () => {
    this.props.actions.addTodo(this.state.text);
  }

  loadTodos = () => {
    callApi('get', 0, {}, '/api/todo')
      .then(res => {
        this.props.actions.getTodosDone(res.data);
      });
  }

  render() {
    const {todos, actions} = this.props;

    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody>
            {todos.map(todo =>
              <TableRow>
                <TableRowColumn>{todo.id}</TableRowColumn>
                <TableRowColumn>{todo.text}</TableRowColumn>
                <TableRowColumn />
              </TableRow>
            )}
          </TableBody>

        </Table>

        <TextField hintText="New todo text" onChange={this.handleChange} />
        <FlatButton label="Add" onClick={this.handleAddClick} />
        <FlatButton label="Load" onClick={() => this.loadTodos()} />
      </div>
    );
  }
}

Home.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { todos: state.todos };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
