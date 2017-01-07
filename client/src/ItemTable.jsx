import React, { Component, PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

class ItemTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody>
          {items.map(item =>
            <TableRow key={item.id}>
              <TableRowColumn>{item.id}</TableRowColumn>
              <TableRowColumn>{item.text}</TableRowColumn>
              <TableRowColumn />
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
