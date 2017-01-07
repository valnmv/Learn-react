import React, { Component, PropTypes } from 'react';
import { TextField, FlatButton } from 'material-ui';
import ItemTable from './ItemTable';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ItemActions from './reducers/items';
import { callApi } from './callapi';

class HomePage extends Component {
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
    this.props.actions.addItem(this.state.text);
  }

  loadItems = () => {
    callApi('get', 0, {}, '/api/item')
      .then(res => { this.props.actions.getItems(res.data); });
  }

  render() {
    return (
      <div>
        <ItemTable items={this.props.items} />

        <TextField hintText="New item" onChange={this.handleChange} />
        <FlatButton label="Add" onClick={this.handleAddClick} />
        <FlatButton label="Load" onClick={() => this.loadItems()} />
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
