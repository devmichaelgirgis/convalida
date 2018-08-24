import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';
import Code from '../common/Code';

const styles = theme => ({
  div: {
    marginTop: theme.spacing.unit * 12,
    marginLeft: theme.spacing.unit * 8,
    marginRight: theme.spacing.unit * 8,
  }
});

class HowItWorks extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.div}>
        <Typography variant="title">
          How It Works
        </Typography>
        <Typography style={{ marginTop: 32 }}>
          Convalida takes advantage of Java annotation processing and automatic code generation at compile time by generating codes for field validation and improving the development of Android applications.
        </Typography>
        <Typography style={{ marginTop: 16 }}>
          Convalida generates classes for field validation at compile time and the name of these classes is composed by the class name of Activity or Fragment with <code style={{ fontSize: 18 }}>FieldsValidation</code> suffix.
        </Typography>
        <Typography style={{ marginTop: 16 }}>
          Example: 
        </Typography>
        <Code style={{ marginTop: 8, fontSize: 16 }} language="java" code={`
public class SampleActivity extends Activity {

  // ...

}
          `} />
        <Typography style={{ marginTop: 16 }}>
          And Convalida will generate a class called <code style={{ fontSize: 18 }}>SampleActivityFieldsValidation</code>:
        </Typography>
        <Code style={{ marginTop: 8, fontSize: 16 }} language="java" code={`
public class SampleActivityFieldsValidation {

  // ...

}
          `} />
      </div>
    );
  }
}

export default withStyles(styles)(HowItWorks);