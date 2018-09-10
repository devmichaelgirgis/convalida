import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';
import Code from '../../common/Code';

const styles = theme => ({
  div: {
    marginTop: theme.spacing.unit * 12,
    marginLeft: theme.spacing.unit * 8,
    marginRight: theme.spacing.unit * 8,
  }
});

class WithAnnotations extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.div}>
        <Typography variant="title">
          How To Use With Annotations
        </Typography>
        <Typography style={{ marginTop: 32 }}>
          To use Convalida you need to follow some steps, which are to map validations, compile project, initialize the generated class and execute your app. These steps are explained bellow.
        </Typography>
        <Typography style={{ marginTop: 32 }}>
          <b>Step 1 - Map validations to fields and actions to buttons and methods:</b>
        </Typography>
        <Code style={{ marginTop: 8, fontSize: 16 }} language="java" code={`
public class SampleActivity extends Activity {

  @RequiredValidation(errorMessage = R.string.field_required)
  EditText nameField;

  @EmailValidation(errorMessage = R.string.invalid_email)
  EditText emailField;

  @PasswordValidation(errorMessage = R.string.invalid_password, min = 3)
  EditText passwordField;

}
          `} />
        <Typography style={{ marginTop: 32 }}>
          <b>Step 2 - Map validation actions to buttons:</b>
        </Typography>
        <Code style={{ marginTop: 8, fontSize: 16 }} language="java" code={`
public class SampleActivity extends Activity {

  // ...

  @ValidateOnClick
  Button validateButton;

  @ClearValidationsOnClick
  Button clearValidationsButton;

}
          `} />
        <Typography style={{ marginTop: 32 }}>
          <b>Step 3 - Map validation results to methods:</b>
        </Typography>
        <Code style={{ marginTop: 8, fontSize: 16 }} language="java" code={`
public class SampleActivity extends Activity {

  // ...

  @OnValidationSuccess
  public void onSuccess() {
    // ...
  }

  @OnValidationError
  public void onError() {
    // ...
  }

}
          `} />
        <Typography style={{ marginTop: 32 }}>
          <b>Step 4 - Compile your project.</b>
        </Typography>
        <Typography style={{ marginTop: 32 }}>
          <b>Step 5 - Initialize the generated class:</b>
        </Typography>
        <Code style={{ marginTop: 8, fontSize: 16 }} language="java" code={`
public class SampleActivity extends Activity {

  // ...

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_sample);
    SampleActivityFieldsValidation.init(this); // The generated class
  }

}
          `} />
        <Typography style={{ marginTop: 32, marginBottom: 32 }}>
          <b>Step 6 - Run your project!</b>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(WithAnnotations);