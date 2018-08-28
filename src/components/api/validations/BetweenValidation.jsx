import React, { Component } from 'react';
import { Typography, withStyles, TableRow, TableCell } from '@material-ui/core';
import TableApi from '../../common/TableApi';
import Code from '../../common/Code';

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

class BetweenValidation extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.div}>
        <Typography variant="title">
          Between Validation
        </Typography>
        <Typography style={{ marginTop: 32 }}>
          This validation is used to validate limits between two fields, which the value of the first field cannot be greater than the value of the second field.
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
          key (Only in annotations)
        </TableCell>
        <TableCell className={props.classes.tableText}>
          int
        </TableCell>
        <TableCell className={props.classes.tableText} />
        <TableCell className={props.classes.tableText}>
          The value that identifies the pair of fields.
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
@BetweenValidation.Start(
  errorMessage = R.string.invalid_start_value,
  autoDismiss = true,
  key = 1
)
EditText startField;

@BetweenValidation.End(
  errorMessage = R.string.invalid_end_value,
  autoDismiss = true,
  key = 1
)
EditText endField;
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
  android:id="@+id/start_field"
  android:hint="@string/start"
  app:betweenValidationStartErrorMessage="@{@string/invalid_start_value}"
  app:betweenValidationEndErrorMessage="@{@string/invalid_end_value}"
  app:betweenValidationStartAutoDismiss="@{true}"
  app:betweenValidationEndAutoDismiss="@{true}"
  app:betweenValidationEndField="@{endField}" />

&lt;EditText
  android:id="@+id/end_field"
  android:hint="@string/end" />
    `} />

    <Typography style={{ fontSize: 18, marginTop: 32 }}>
      <i>Note:</i> <br /><br />
      <i>Data Binding generates variable names from XML id property using camel case notation.</i> <br />
      <i>Example: <code>android:id="@+id/end_field"</code> corresponds to <code>endField</code> in the generated Java code.</i> <br /> <br />
      <i>In the example above we used the reference to generated property (<code>endField</code>) as parameter to binding expression.</i>
    </Typography>
  </div>
);

export default withStyles(styles)(BetweenValidation);