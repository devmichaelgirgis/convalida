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

class ClearValidationsOnClick extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.div}>
        <Typography variant="title">
          Clear Validations On Click
        </Typography>
        <Typography style={{ marginTop: 32 }}>
          This action is used to clear all validations applied to the fields.
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
@ClearValidationsOnClick
Button clearValidationsButton;
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
  android:id="@+id/clear_validations_button"
  android:text="@string/clear_validations"
  app:validationAction="@{@id/clear}" />
    `} />

      <Typography style={{ fontSize: 18, marginTop: 16 }}>
        <i>Note: The <code>@id/clear</code> is an Android id provided by Convalida to identify the type of validation action.</i>
      </Typography>
  </div>
);

export default withStyles(styles)(ClearValidationsOnClick);