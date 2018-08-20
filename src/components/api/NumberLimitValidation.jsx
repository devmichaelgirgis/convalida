import React, { Component } from 'react';
import { Typography, withStyles, TableRow, TableCell } from '@material-ui/core';
import TableApi from '../common/TableApi';
import Code from '../common/Code';

const styles = theme => ({
  div: {
    marginTop: theme.spacing.unit * 12,
    marginLeft: theme.spacing.unit * 8,
    marginRight: theme.spacing.unit * 8,
  },
  tableText: {
    fontSize: 14
  }
});

class NumberLimitValidation extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.div}>
        <Typography variant="title">
          Number Limit Validation
        </Typography>
        <Typography style={{ marginTop: 32 }}>
          This validation is used to set the minimum and maximum numeric values.
        </Typography>
        <Api classes={classes} />
        <Annotation classes={classes} />
        <DataBinding classes={classes} />
      </div>
    );
  }
}

const Api = props => (
  <div>
    <Typography variant="subheading" style={{ marginTop: 32 }}>
      API
    </Typography>

    <TableApi>
      <TableRow>
        <TableCell className={props.classes.tableText}>
          errorMessage
        </TableCell>
        <TableCell className={props.classes.tableText}>
          int (String Resource)
        </TableCell>
        <TableCell className={props.classes.tableText} />
        <TableCell className={props.classes.tableText}>
          The error message that will be displayed to user when field value is not valid.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={props.classes.tableText}>
          autoDismiss
        </TableCell>
        <TableCell className={props.classes.tableText}>
          boolean
        </TableCell>
        <TableCell className={props.classes.tableText}>
          true
        </TableCell>
        <TableCell className={props.classes.tableText}>
          If true, remove error message automatically when field value is valid.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={props.classes.tableText}>
          required
        </TableCell>
        <TableCell className={props.classes.tableText}>
          boolean
        </TableCell>
        <TableCell className={props.classes.tableText}>
          true
        </TableCell>
        <TableCell className={props.classes.tableText}>
          If true, the field value cannot be null or empty.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={props.classes.tableText}>
          min
        </TableCell>
        <TableCell className={props.classes.tableText}>
          String (integer or float point)
        </TableCell>
        <TableCell className={props.classes.tableText} />
        <TableCell className={props.classes.tableText}>
          The minimum numeric value allowed.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={props.classes.tableText}>
          max
        </TableCell>
        <TableCell className={props.classes.tableText}>
          String (integer or float point)
        </TableCell>
        <TableCell className={props.classes.tableText} />
        <TableCell className={props.classes.tableText}>
          The maximum numeric value allowed.
        </TableCell>
      </TableRow>
    </TableApi>
  </div>
);

const Annotation = () => (
  <div>
    <Typography variant="subheading" style={{ marginTop: 32 }}>
      Using with Annotation
    </Typography>

    <Code style={{ marginTop: 8, fontSize: 16 }} language="java" code={`
@NumberLimitValidation(
  errorMessage = R.string.invalid_min_max,
  autoDismiss = true,
  required = true,
  min="1",
  max="10"
)
EditText numberLimitField;
    `} />
  </div>
);

const DataBinding = () => (
  <div>
    <Typography variant="subheading" style={{ marginTop: 32 }}>
      Using with Data Binding
    </Typography>

    <Code style={{ marginTop: 8, fontSize: 16 }} language="xml" code={`
&lt;EditText
  android:id="@+id/number_limit_field"
  android:hint="@string/number_limit"
  app:numberLimitValidationErrorMessage="@{@string/invalid_min_max}"
  app:numberLimitValidationAutoDismiss="@{true}"
  app:numberLimitValidationRequired="@{true}"
  app:numberLimitValidationMin='@{"1"}'
  app:numberLimitValidationMax='@{"10"}' />
    `} />
  </div>
);

export default withStyles(styles)(NumberLimitValidation);