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
 /*  window.location.pathname ='login' */
 this.router.navigateByUrl('/')
};

afficher(){
  this.histo = true;
};

cacher(){
  this.histo = false;
};


}


