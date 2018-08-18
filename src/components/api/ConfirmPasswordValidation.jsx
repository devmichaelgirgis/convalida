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

class ConfirmPasswordValidation extends Component {
    render() {
        const { classes } = this.props;
        return (
          <Viewport>
            <div className={classes.div}>
              <Typography variant="title">
                Confirm Password Validation
              </Typography>
              <Typography style={{ marginTop: 32 }}>
                This validation is only applied to confirm password and it must be used only when there is a field validated by <Link text="Password Validation" url={`${process.env.PUBLIC_URL}/#/password-validation`} />, otherwise an error will occurs.
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

      <Code style={{ fontSize: 16 }} language="java" code={`
  @ConfirmPasswordValidation(
    errorMessage = R.string.passwords_not_match,
    autoDismiss = true
  )
  EditText confirmPasswordField;
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

      <Code style={{ fontSize: 16 }} language="xml" code={`
  &lt;EditText
    android:id="@+id/confirm_password_field"
    android:hint="@string/confirm_password"
    app:confirmPasswordValidationErrorMessage="@{@string/passwords_not_match}"
    app:confirmPasswordValidationAutoDismiss="@{true}" 
    app:confirmPasswordValidationPasswordField="@{passwordField}" />
      `} />

      <Typography style={{ fontSize: 18, marginTop: 32 }}>
        <i>Note:</i> <br /><br />
        <i>Data Binding generates variable names from XML id property using camel case notation.</i> <br />
        <i>Example: <code>android:id="@+id/password_field"</code> corresponds to <code>passwordField</code> in the generated Java code.</i> <br /> <br />
        <i>In the example above we used the reference to generated property (<code>passwordField</code>) as parameter to binding expression.</i>
      </Typography>
    </div>
  );

export default withStyles(styles)(ConfirmPasswordValidation);