import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControlErrorMessagePipe } from "../../pipes/form-control-error-message/form-control-error-message.pipe";
import { AppButtonDirective } from '../../directives/buttons/app-button.directive';


@Component({
  selector: 'app-form-content',
  standalone: true,
  templateUrl: './form-content.component.html',
  styleUrl: './form-content.component.scss',
  imports: [ReactiveFormsModule, FormControlErrorMessagePipe, AppButtonDirective]
})
export class FormContentComponent {
  message: string | null = "";
  myForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submit() {
    if (!this.myForm.errors) {
      this.message = this.myForm.errors;
    } else {
      this.message = "Not Invalid Input";
    }

    return console.log(this.message)
  }
}
