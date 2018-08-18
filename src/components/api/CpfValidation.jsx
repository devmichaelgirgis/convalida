import React, { Component } from 'react';
import Viewport from '../Viewport';
import { Typography, withStyles, TableRow, TableCell } from '@material-ui/core';
import TableApi from '../common/TableApi';
import Code from '../common/Code';
import Link from '../common/Link';

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

class CpfValidation extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Viewport>
        <div className={classes.div}>
          <Typography variant="title">
            Cpf Validation
          </Typography>
          <Typography style={{ marginTop: 32 }}>
            This validation is used to validate <Link text="Cpf" url="https://pt.wikipedia.org/wiki/Cadastro_de_pessoas_f%C3%ADsicas" /> (Brazilian Personal Number) fields. The Cpf is equivalent to USA's Social Security Number.
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
    </TableApi>
  </div>
);

const Annotation = () => (
  <div>
    <Typography variant="subheading" style={{ marginTop: 32 }}>
      Using with Annotation
    </Typography>

    <Code style={{ marginTop: 8, fontSize: 16 }} language="java" code={`
@CpfValidation(
  errorMessage = R.string.invalid_cpf,
  autoDismiss = true,
  required = true
)
EditText cpfField;
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
  android:id="@+id/cpf_field"
  android:hint="@string/cpf"
  app:cpfValidationErrorMessage="@{@string/invalid_cpf}"
  app:cpfValidationAutoDismiss="@{true}"
  app:cpfValidationRequired="@{true}" />
    `} />
  </div>
);

export default withStyles(styles)(CpfValidation);