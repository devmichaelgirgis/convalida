package convalida.library.validation.validator;

import android.support.design.widget.TextInputLayout;
import android.text.Editable;
import android.text.TextWatcher;
import android.widget.EditText;

import convalida.library.validation.Validator;

/**
 * @author Wellington Costa on 21/06/2017.
 */
public class NotEmptyValidator extends AbstractValidator implements Validator {

    public NotEmptyValidator(TextInputLayout layout, String errorMessage) {
        super(layout, errorMessage);
    }

    public NotEmptyValidator(EditText editText, String errorMessage) {
        super(editText, errorMessage);
    }

    @Override
    boolean isNotValid(String value) {
        return value.isEmpty();
    }

    @Override
    void executeValidation(String value) {
        if (isNotValid(value)) {
            setError();
        } else {
            clearError();
        }
    }

}
