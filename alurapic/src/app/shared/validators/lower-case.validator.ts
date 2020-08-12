import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator(Control: AbstractControl) {

    if (Control.value.trim() && !/^[a-z0-9_\-]+$/.test(Control.value)) {
        return { lowerCase: true};
    }

    return null;
}
