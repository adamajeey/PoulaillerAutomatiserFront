import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  registerForm!: FormGroup;
  title = 'login';
  submitted = false;
  spin = false;
  errorSms = false;
  message: string = '';
  msg: any;

  constructor(private formBuilder: FormBuilder, private authService: UsersService, private router: Router) { }
    ngOnInit(){

      this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      })
    }

    onSubmit(){

      this.submitted = true
      this.spin = true

      if (this.registerForm.invalid) {
        this.spin = false
        return;
      }

      const user:User ={
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }

    this.authService.getConnexion(user).subscribe(
      {
        next: res=>{
          console.log(res);
          let infoConnexion = res;
          if(infoConnexion.data){
            this.router.navigateByUrl('accueil');
          }
      },

      error: error =>{

        setTimeout(()=> {this.spin = false; this.errorSms = false;},2000)
        if(error) {
          this.msg = "Email ou mot de passe incorrect!";
          this.registerForm = this.formBuilder.group(
            {
              email: [''],
              password: [''],
            })

        }
        setTimeout(()=> {this.msg ='';},2000)
      }
      }
    )

  }

  }



