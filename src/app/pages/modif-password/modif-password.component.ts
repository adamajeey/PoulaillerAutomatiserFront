import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-modif-password',
  templateUrl: './modif-password.component.html',
  styleUrls: ['./modif-password.component.scss']
})
export class ModifPasswordComponent implements OnInit {

  registerForm!: FormGroup;
  title = 'login';
  submitted = false;
  spin = false;
  verifPass: any = true;
  msg!: any;
/*   newPassword: any = '';
  errorMessage: any = '' */;

  constructor(private formBuilder: FormBuilder, private authService: UsersService, private router: Router, private http: HttpClient) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      password1: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  checkPassword = () => {

    let pass1 = (<HTMLInputElement>document.getElementById("password1")).value;
    let pass2 = (<HTMLInputElement>document.getElementById("password2")).value;

    if (pass1 != pass2) {
      this.verifPass = false;
      this.registerForm = this.formBuilder.group(
        {
          password1: [''],
          password2: [''],
        })
      setTimeout(() => { this.verifPass = true }, 3000);
    }
  };

  onSubmit() {

/*     const oldPassword = String; // récupérer le mot de passe actuel
    const newPassword = this.newPassword;
    this.http.patch<User>('/api/update', { oldPassword, newPassword })
    .subscribe(
      () => {
        (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.errorMessage = 'Le mot de passe actuel est incorrect.';
          }
        }
      }), */

    this.submitted = true
    this.spin = true
    if (this.registerForm.invalid) {
      this.spin = false
      return;
    }


    const user={
      newPassword: this.registerForm.value.password1,
      oldPassword: this.registerForm.value.password
    }

    const ids= localStorage.getItem('id')?.replace(/"/g, '');
    const id = ids?.split(' ').join('')
    console.log(id);

    return this.authService.update(id,user).subscribe(

      res=>{
          console.log(res);
          this.msg= "Modification réussie avec succés";
          setTimeout(()=> {window.location.reload()}, 2000 );
         this.registerForm = this.formBuilder.group({
            password: [''],
            password1: [''],
            password2: [''],
          })
      }
    )

  }
}

