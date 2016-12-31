import React, { Component, PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from './reducers/todos';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {todos} = this.props;

    return (
      <Card>
        <CardTitle title="Home" subtitle="This is the home page" />
        <CardText>
          {todos.map(todo => todo.text)}
        </CardText>
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
