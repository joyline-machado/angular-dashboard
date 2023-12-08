import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  message!: string;
  submitted : boolean = false;
  
  constructor(
    private formBuilder : FormBuilder,
    private auth : AuthService,
    private router : Router,
    private toastr: ToastrService
  ){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if(user){
      this.router.navigate([''])
    }
    else {
      this.router.navigate(['login'])
    }
  }
  

  onLogin(loginForm : any){
    this.submitted = true
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      let email = loginForm.value.email;
      let password = loginForm.value.password;
      console.log(email, password);

      this.auth.login(email, password).then(() => {
        this.message = this.auth.message
        
        // console.log(this.message)
        // console.log(this.auth.errorMessage)

      });
  }

}

}