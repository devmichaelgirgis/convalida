import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, withStyles } from '@material-ui/core';

const styles = {
  tableCell: {
    fontSize: 14,
    fontWeight: 'bold'
  }
};

class TableApi extends Component {
  render() {
    const { children, classes } = this.props;
    return (
      <Paper>
        <Table style={{ marginTop: 32 }}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Name</TableCell>
              <TableCell className={classes.tableCell}>Type</TableCell>
              <TableCell className={classes.tableCell}>Default</TableCell>
              <TableCell className={classes.tableCell}>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {children}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

TableApi.propTypes = {
  children: PropTypes.element.isRequired
};

export default withStyles(styles)(TableApi);