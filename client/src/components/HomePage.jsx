import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, FlatButton } from 'material-ui';
import ItemTable from './ItemTable';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ItemActions from '../reducers/items';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  }

  handleAddClick = () => {
    this.props.actions.addItem(this.state.text);
  }

  handleLoadClick = () => {
    this.props.actions.getItemsRequest();
  }

  render() {
    return (
      <div>
        <ItemTable items={this.props.items} />
        <TextField hintText="New item" onChange={this.handleChange} />
        <FlatButton label="Add" onClick={this.handleAddClick} />
        <FlatButton label="Load" onClick={this.handleLoadClick} />
        <FlatButton label="Delete" onClick={this.handleLoadClick} />
      </div>
    );
  }
}

HomePage.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { items: state.items };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ItemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
