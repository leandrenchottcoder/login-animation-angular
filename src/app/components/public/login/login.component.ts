import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    'login-animation.component.scss'
  ]
})
export class LoginComponent implements OnInit {
  showingPage: string = 'account-page';
  form: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      username: ['', [Validators.minLength(6), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  toggleView(): void {
    this.showingPage = this.showingPage == 'login-page' ? 'account-page' : 'login-page';
  }
}
