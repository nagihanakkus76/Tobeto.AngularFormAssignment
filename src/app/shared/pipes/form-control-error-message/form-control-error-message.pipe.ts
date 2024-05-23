import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formControlErrorMessage',
  standalone: true
})
export class FormControlErrorMessagePipe implements PipeTransform {

  transform(control:AbstractControl | null): string | null {
    if (!control || !control.errors) {
      return null;
    }

    const errors: ValidationErrors = control.errors;

    if (errors['required']) {
      return 'This field is required';
    } else if (errors['minlength']) {
      return `Minimum length is ${errors['minlength'].requiredLength} characters`;
    } else if (errors['maxlength']) {
      return `Maximum length is ${errors['maxlength'].requiredLength} characters`;
    } else if (errors['email']) {
      return 'Invalid email address';
    } else if (errors['pattern']) {
      return 'Invalid format';
    }
      return "Invalid Input";
  }

}
