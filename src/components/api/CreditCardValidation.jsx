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

class CreditCardValidation extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.div}>
        <Typography variant="title">
          Credit Card Validation
        </Typography>
        <Typography style={{ marginTop: 32 }}>
          This validation is used to validate credit card fields.
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
    </TableApi>
  </div>
);

const Annotation = () => (
  <div>
    <Typography variant="subheading" style={{ marginTop: 32 }}>
      Using with Annotation
    </Typography>

    <Code style={{ marginTop: 8, fontSize: 16 }} language="java" code={`
@CreditCardValidation(
  errorMessage = R.string.invalid_credit_card_number,
  autoDismiss = true,
  required = true
)
EditText creditCardField;
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
  android:id="@+id/credit_card_field"
  android:hint="@string/credit_card"
  app:creditCardValidationErrorMessage="@{@string/invalid_credit_card_number}"
  app:creditCardValidationAutoDismiss="@{true}"
  app:creditCardValidationRequired="@{true}" />
    `} />
  </div>
);

export default withStyles(styles)(CreditCardValidation);