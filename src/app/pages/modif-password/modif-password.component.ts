import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-modif-password',
  templateUrl: './modif-password.component.html',
  styleUrls: ['./modif-password.component.scss']
})
export class ModifPasswordComponent implements OnInit {

  registerForm!:FormGroup;
  title = 'login';
  submitted = false;
  spin= false;

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(){

    this.registerForm = this.formBuilder.group({
      password :['', [Validators.required, Validators.minLength(6)]],
      password1:['', [Validators.required, Validators.minLength(6)]],
      password2:['', [Validators.required, Validators.minLength(6)]]
  })

  }

  onSubmit(){

    this.submitted = true
    this.spin = true

     if(this.registerForm.invalid){
      this.spin = false
      return ;
    }else if(this.registerForm.value.password1 != this.registerForm.value.password2){
      setTimeout(()=> this.spin = false, 2000)
      this.formBuilder.group({
        password1:[' '],
        password2:[' ']
    })

    }
    }
 }


