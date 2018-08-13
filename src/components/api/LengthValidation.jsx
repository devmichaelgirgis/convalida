import React, { Component } from 'react';
import Viewport from '../Viewport';
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


class LengthValidation extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Viewport>
        <div className={classes.div}>
          <Typography variant="title">
            Length Validation
          </Typography>
          <Typography style={{ marginTop: 32 }}>
            This validation is applied to fields that have a minimum and maximum length of characters allowed.
          </Typography>
          <Api classes={classes} />
          <Annotation classes={classes} />
          <DataBinding classes={classes} />
        </div>
      </Viewport>
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
          min
        </TableCell>
        <TableCell className={props.classes.tableText}>
          int
        </TableCell>
        <TableCell className={props.classes.tableText} />
        <TableCell className={props.classes.tableText}>
          The minimum length of characters allowed.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={props.classes.tableText}>
          max
        </TableCell>
        <TableCell className={props.classes.tableText}>
          int
        </TableCell>
        <TableCell className={props.classes.tableText}>
          0
        </TableCell>
        <TableCell className={props.classes.tableText}>
          The maximum length of characters allowed.
        </TableCell>
      </TableRow>
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
    </TableApi>
  </div>
);

const Annotation = () => (
  <div>
    <Typography variant="subheading" style={{ marginTop: 32 }}>
      Using with Annotation
    </Typography>

    <Code style={{ marginTop: 8, fontSize: 16 }} language="java" code={`
@LengthValidation(
  errorMessage = R.string.min_3_max_10,
  min = 3,
  max = 10
  autoDismiss = true,
  required = true
)
EditText lengthField;
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
  android:id="@+id/length_field"
  android:hint="@string/length"
  app:lengthValidationErrorMessage="@{@string/min_3_max_10}"
  app:lengthValidationMin="@{3}"
  app:lengthValidationMax="@{10}"
  app:lengthValidationAutoDismiss="@{true}" 
  app:lengthValidationRequired="@{true}" />
    `} />
  </div>
);

export default withStyles(styles)(LengthValidation);