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

class WithDataBinding extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.div}>
        <Typography variant="title">
          How To Use With Data Binding
        </Typography>
        <Typography style={{ marginTop: 32 }}>
          To use Convalida you need to follow some steps, which are to map validations, compile project, initialize the generated class and execute your app. These steps are explained bellow.
        </Typography>
        <Typography style={{ marginTop: 32 }}>
          <b>Step 1 - Map validations to fields and actions to buttons and methods:</b>
        </Typography>
        <Code style={{ marginTop: 8, fontSize: 16 }} language="xml" code={`
&lt;EditText
  android:id="@+id/name_field"
  android:layout_width="match_parent"
  android:layout_height="wrap_content"
  android:hint="@string/name"
  app:requiredValidationErrorMessage="@{@string/field_required}" />

&lt;EditText
  android:id="@+id/email_field"
  android:layout_width="match_parent"
  android:layout_height="wrap_content"
  android:hint="@string/email"
  app:emailValidationErrorMessage="@{@string/invalid_email}" />

&lt;EditText
  android:id="@+id/password_field"
  android:layout_width="match_parent"
  android:layout_height="wrap_content"
  android:hint="@string/password"
  app:passwordValidationMin="@{3}"
  app:passwordValidationErrorMessage="@{@string/invalid_password}" />
        `} />
        <Typography style={{ marginTop: 32 }}>
          <b>Step 2 - Map validation actions to buttons:</b>
        </Typography>
        <Code style={{ marginTop: 8, fontSize: 16 }} language="xml" code={`
&lt;Button
  android:id="@+id/validate_button"
  android:text="@string/validate_fields"
  app:validationAction="@{@id/validate}" />

&lt;Button
  android:id="@+id/validate_button"
  android:text="@string/clear_fields"
  app:validationAction="@{@id/clear}" />
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

  private ActivitySampleBinding binding;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    binding = DataBindingUtil.setContentView(this, R.layout.activity_sample);
    SampleActivityFieldsValidation.init(this, binding); // The generated class
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

export default withStyles(styles)(WithDataBinding);