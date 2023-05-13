import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

histo: boolean = false
dash=true;
reglage: boolean = false

  constructor(private router: Router) {}

  ngOnInit() {}

  displayStyle = "none";


openPopup() {
  this.displayStyle = "block";
}

closePopup() {
  this.displayStyle = "none";

}

logout = () =>{
 localStorage.removeItem('currentUser')
 this.router.navigateByUrl('/')
};

afficher(){
  this.histo = true;
  this.dash = false
  this.reglage =false
};

cacher(){
  this.histo = false;
  this.dash = true
  this.reglage = false
};

wanei(){
  this.reglage = true;
  this.dash = false
  this.histo =false
}

}


