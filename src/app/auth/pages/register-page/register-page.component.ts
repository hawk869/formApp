import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as customValidators from "../../../shared/validators/validators";
import {ValidatorsService} from "../../../shared/services/validators.service";

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern( this.validatorService.firstNameAndLastnamePattern ) ]],
    email: ['', [ Validators.required, Validators.pattern( customValidators.emailPattern ) ]],
    username: ['', [ Validators.required, customValidators.cantBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]],
  });

  constructor( private fb: FormBuilder,
               private validatorService: ValidatorsService ) {
  }
  isValidField( field: string ) {
    return this.validatorService.isValidField( this.myForm, field )
  }
  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
