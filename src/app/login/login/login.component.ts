import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, 
              private router: Router,
              private sevice: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(5)]],
      password: [null, Validators.required, Validators.minLength(5)]
    });
  }

  public submit(): void {
      this.sevice.login(this.loginForm.value);
      this.router.navigate(['/poke-cards']);
  }

}
