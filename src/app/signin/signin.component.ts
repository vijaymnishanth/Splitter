import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  submitted:boolean = false;
  email: string = '';
  pws: string = '';
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:NgForm) { this.submitted = true; 
  console.log(form.value);
}

}
