import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator{

  // validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  //   throw new Error('Method not implement.');
  // }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;
    return new Observable<ValidationErrors | null>((subscriber) => {
      console.log({email});
      if (email === 'daniel@gmail.com') {
        subscriber.next({emailTaken: true});
        subscriber.complete();
      }
      subscriber.next(null);
      subscriber.complete();
    });
  }

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //
  //   const email = control.value;
  //   console.log({ email });
  //
  //   return of({
  //     emailTaken: true
  //   })
  // }

}
