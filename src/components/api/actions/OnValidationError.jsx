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

class OnValidationError extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.div}>
        <Typography variant="title">
          On Validation Error
        </Typography>
        <Typography style={{ marginTop: 32 }}>
          This action represents the error result of any validation. If any validation is not satisfied, the method mapped with this action will be executed.
        </Typography>
        <Annotation classes={classes} />
        <Typography style={{ fontSize: 18, marginTop: 16 }}>
        <i>Note: This action is not available to use with Data Binding. It can be used only onto a method.</i>
      </Typography>
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
@OnValidationError
public void onValidationError() {
  // you code goes here
}
    `} />
  </div>
);

export default withStyles(styles)(OnValidationError);