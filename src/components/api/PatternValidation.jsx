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

class PatternValidation extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Viewport>
        <div className={classes.div}>
          <Typography variant="title">
            Pattern Validation
          </Typography>
          <Typography style={{ marginTop: 32 }}>
            This validation is applied to fields that must have a pattern valeu based on a regular expression.
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
          pattern
        </TableCell>
        <TableCell className={props.classes.tableText}>
          String
        </TableCell>
        <TableCell className={props.classes.tableText} />
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
@PatternValidation(
  errorMessage = R.string.pattern_not_match,
  autoDismiss = true,
  required = true,
  pattern = MIXED_CAMEL_CASE
)
EditText patternField;
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
  android:id="@+id/pattern_field"
  android:hint="@string/pattern"
  app:patternValidationErrorMessage="@{@string/pattern_not_match}"
  app:patternValidationAutoDismiss="@{true}"
  app:patternValidationRequired="@{true}"
  app:patternValidationPattern="@{MIXED_CAMEL_CASE}"/>
    `} />
  </div>
);

export default withStyles(styles)(PatternValidation);