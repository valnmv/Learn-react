import React, { Component, PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Link } from 'react-router';

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
            <TableHeaderColumn>No</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Barcode</TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody showRowHover>
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
