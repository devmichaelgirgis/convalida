import React, { Component } from 'react';
import { Typography, withStyles, TableRow, TableCell } from '@material-ui/core';
import TableApi from '../../common/TableApi';
import Code from '../../common/Code';
import Link from '../../common/Link';

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

class ConfirmEmailValidation extends Component {
    render() {
        const { classes } = this.props;
        return (
          <div className={classes.div}>
            <Typography variant="title">
              Confirm Email Validation
            </Typography>
            <Typography style={{ marginTop: 32 }}>
              This validation is only applied to confirm e-mail address and it must be used only when there is a field validated by <Link text="Email Validation" url={`${process.env.PUBLIC_URL}/#/email-validation`} />, otherwise an error will occurs.
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
      </TableApi>
    </div>
  );
  
  const Annotation = () => (
    <div>
      <Typography variant="subheading" style={{ marginTop: 32 }}>
        Using with Annotation
      </Typography>
  
      <Code style={{ marginTop: 8, fontSize: 16 }} language="java" code={`
  @EmailValidation(
    errorMessage = R.string.invalid_email,
    autoDismiss = true,
    required = true
  )
  EditText emailField;
      `} />

      <Code style={{ fontSize: 16 }} language="java" code={`
  @ConfirmEmailValidation(
    errorMessage = R.string.emails_not_match,
    autoDismiss = true
  )
  EditText confirmEmailField;
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
    android:id="@+id/email_field"
    android:hint="@string/email"
    app:emailValidationErrorMessage="@{@string/invalid_email}"
    app:emailValidationAutoDismiss="@{true}" 
    app:emailValidationRequired="@{true}" />
      `} />

      <Code style={{ fontSize: 16 }} language="xml" code={`
  &lt;EditText
    android:id="@+id/confirm_email_field"
    android:hint="@string/confirm_email"
    app:confirmEmailValidationErrorMessage="@{@string/emails_not_match}"
    app:confirmEmailValidationAutoDismiss="@{true}" 
    app:confirmEmailValidationEmailField="@{emailField}" />
      `} />

      <Typography style={{ fontSize: 18, marginTop: 32 }}>
        <i>Note:</i> <br /><br />
        <i>Data Binding generates variable names from XML id property using camel case notation.</i> <br />
        <i>Example: <code>android:id="@+id/email_field"</code> corresponds to <code>emailField</code> in the generated Java code.</i> <br /> <br />
        <i>In the example above we used the reference to generated property (<code>emailField</code>) as parameter to binding expression.</i>
      </Typography>
    </div>
  );

export default withStyles(styles)(ConfirmEmailValidation);