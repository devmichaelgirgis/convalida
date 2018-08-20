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

class PasswordValidation extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.div}>
        <Typography variant="title">
          Password Validation
        </Typography>
        <Typography style={{ marginTop: 32 }}>
          This validation is applied to validate password fields with minimum length of characters or with a value pattern based on a regular expression.
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
          min
        </TableCell>
        <TableCell className={props.classes.tableText}>
          int
        </TableCell>
        <TableCell className={props.classes.tableText}>
          0
        </TableCell>
        <TableCell className={props.classes.tableText}>
          The minimum length of characteres.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={props.classes.tableText}>
          pattern
        </TableCell>
        <TableCell className={props.classes.tableText}>
          String
        </TableCell>
        <TableCell className={props.classes.tableText}>
         " "
        </TableCell>
        <TableCell className={props.classes.tableText}>
          The regular expression that will be applied to validate field value.
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
@PasswordValidation(
  errorMessage = R.string.invalid_password,
  autoDismiss = true,
  min = 3,
  pattern = MIXED_CAMEL_CASE
)
EditText passwordField;
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
  android:id="@+id/password_field"
  android:hint="@string/password"
  app:passwordValidationErrorMessage="@{@string/invalid_password}"
  app:passwordValidationAutoDismiss="@{true}"
  app:passwordValidationMin="@{3}"
  app:patternValidationPattern="@{MIXED_CAMEL_CASE}"/>
    `} />
  </div>
);

export default withStyles(styles)(PasswordValidation);