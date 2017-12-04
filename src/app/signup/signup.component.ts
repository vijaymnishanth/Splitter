import { Component, OnInit } from '@angular/core';
import { FormControl,FormControlName,FormGroup, Validators } from '@angular/forms';
import {emailValidator} from '../email-vaildator.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  signupForm:FormGroup;

  ngOnInit() : void {
    this.signupForm = new FormGroup({
      'uname': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),        
      ]),
      'email': new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'pws': new FormControl('', [
        Validators.required,
        Validators.minLength(4)])
    });
  }
  get uname(): any { return this.signupForm.get('uname'); }
  get email() : any{ return this.signupForm.get('email'); }
  get pws(): any { return this.signupForm.get('pws'); }

  onSubmit(): void {
    console.log(this.signupForm.value);  // {first: 'Nancy', last: 'Drew'}
  }

}
