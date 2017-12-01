import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  submitted:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; 
  console.log();
}

}
