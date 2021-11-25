import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder, private userS: UserService, private router: Router, private _snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
  }

  getErrorMessageMail() {
    if (this.form.controls.email.hasError('required')) {
      return 'You must enter a email';
    }

    return this.form.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePassword() {
    if (this.form.controls.password.hasError('required')) {
      return 'You must enter a password';
    }

    return this.form.controls.password.hasError('minlength') ? 'Password must be at least 8 characters long' : '';
  }

  login(){
    this.loading = true;
    const user: User = {
      email: this.form.get('email')?.value,
      pass: this.form.get('password')?.value,
    }

    this.userS.login(user).then((res: any) =>{
      console.log(res);
      if(res.success){
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/home']);
      }
      else{
        this._snackBar.open("The user doesn't exist", 'Close')._dismissAfter(3000);
      }

      setTimeout(() =>{
        this.loading = false;
        this.form.reset();
      },1000);
    })
    .catch(err =>{
      console.log(err);
    });
  }

}
