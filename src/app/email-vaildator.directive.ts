import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const regEx = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");
    const emailRgx = regEx.test(control.value);
    console.log(control.value)
    return emailRgx ? {'email': {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appEmailVaildator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailVaildatorDirective, multi: true}]

})
export class EmailVaildatorDirective  implements Validator{

  @Input() email: string;
  
    validate(control: AbstractControl): {[key: string]: any} {     
      return this.email ? emailValidator()(control)
                                : null;
    }

}
