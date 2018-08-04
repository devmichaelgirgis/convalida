import React, { Component } from 'react';
import Viewport from '../Viewport';
import { Typography, withStyles } from '@material-ui/core';
import Link from '../common/Link';

const styles = theme => ({
  div: {
    marginTop: theme.spacing.unit * 12,
    marginLeft: theme.spacing.unit * 8,
    marginRight: theme.spacing.unit * 8,
  }
});

class Introduction extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Viewport>
        <div className={classes.div}>
          <Typography variant="title">
            Introduction
          </Typography>
          <Typography style={{ marginTop: 32 }}>
            Convalida is a fully-static and compile-time field validation library for Android. It is an alternative to other reflection-based solutions that do not impact during runtime.
          </Typography>
          <Typography style={{ marginTop: 32 }}>
            Convalida aims to improve the development of Android application because the developers don't dispend a lot of time writing code to validate fields. Just using annotations or XML properties, developers can map what validation must be applied to fields and lets Convalida generate codes to apply these mapped validations to fields.
          </Typography>
          <Typography variant="subheading" style={{ marginTop: 32 }}>
            Why Convalida?
          </Typography>
          <ul>
            <Typography style={{ marginTop: 16 }}>
              <li>You can use with annotations or with data binding</li>
            </Typography>
            <Typography style={{ marginTop: 4 }}>
              <li>Compile-time</li>
            </Typography>
            <Typography style={{ marginTop: 4 }}>
              <li>Compatible with other popular libraries such as <Link text="ButterKnife" url="https://github.com/JakeWharton/butterknife" />, <Link text="Android Data Binding" url="https://developer.android.com/topic/libraries/data-binding" />, <Link text="Dagger 2" url="https://github.com/google/dagger" />, etc</li>
            </Typography>
            <Typography style={{ marginTop: 4 }}>
              <li>Works with <b>Stock Android Widgets</b></li>
            </Typography>
            <Typography style={{ marginTop: 4 }}>
              <li>Based on <Link text="Material Design Error Patterns" url="https://material.io/design/components/text-fields.html" /></li>
            </Typography>
          </ul>
        </div>
      </Viewport>
    );
  }
}

export default withStyles(styles)(Introduction);