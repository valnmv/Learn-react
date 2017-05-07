import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Link } from 'react-router';

class ItemTable extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    selected: [],
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  render() {
    const { items } = this.props;

    return (
      <Table multiSelectable onRowSelection={this.handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>No</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Barcode</TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody onRowSelection={this.handleRowSelection}>
          {items.map(item =>
            <TableRow key={item.cuid}>
              <TableRowColumn><Link to={`item/${item._id}`}>{item._id}</Link></TableRowColumn>
              <TableRowColumn>{item.name}</TableRowColumn>
              <TableRowColumn>{item.barcode}</TableRowColumn>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}

ItemTable.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemTable;
