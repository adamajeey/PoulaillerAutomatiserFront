import { UsersService } from 'src/app/services/users.service';
import { Heure } from './../../models/Heures';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-parametrage',
  templateUrl: './parametrage.component.html',
  styleUrls: ['./parametrage.component.scss']
})
export class ParametrageComponent implements OnInit {
  valeur: any;
  registerForm!: FormGroup;
  submitted =  false;

  constructor(private router: Router, private formBuilder: FormBuilder, private usersService: UsersService) {

    this.registerForm = this.formBuilder.group({
      heure1: ['', [Validators.required]],
      heure2: ['', [Validators.required]],
      heure3: ['', [Validators.required]],
    });




  }

  ngOnInit() {

  }

  onSubmit(){
    const Heure:Heure ={
      heure1: this.registerForm.value.heure1,
      heure2: this.registerForm.value.heure2,
      heure3: this.registerForm.value.heure3,

  }
  this.usersService.addHeure(Heure).subscribe(
      (res:any) =>{
        console.log(res);
        })

}

}


