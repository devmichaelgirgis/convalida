import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';
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

class ValidateOnClick extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.div}>
        <Typography variant="title">
          Validate On Click
        </Typography>
        <Typography style={{ marginTop: 32 }}>
          This action is used to execute the validations when a button is clicked.
        </Typography>
        <Annotation classes={classes} />
        <DataBinding classes={classes} />
      </div>
    );
  }
}

const Annotation = () => (
  <div>
    <Typography variant="subheading" style={{ marginTop: 32 }}>
      Using with Annotation
    </Typography>

    <Code style={{ marginTop: 8, fontSize: 16 }} language="java" code={`
@ValidateOnClick
Button validateButton;
    `} />
  </div>
);

const DataBinding = () => (
  <div>
    <Typography variant="subheading" style={{ marginTop: 32 }}>
      Using with Data Binding
    </Typography>

    <Code style={{ marginTop: 8, fontSize: 16 }} language="xml" code={`
&lt;Button
  android:id="@+id/validate_button"
  android:text="@string/validate"
  app:validationAction="@{@id/validate}" />
    `} />

      <Typography style={{ fontSize: 18, marginTop: 16 }}>
        <i>Note: The <code>@id/validate</code> is an Android id provided by Convalida to identify the type of validation action.</i>
      </Typography>
  </div>
);

export default withStyles(styles)(ValidateOnClick);