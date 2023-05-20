import { TemphumService } from 'src/app/services/temphum.service';
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

  realtimeTemp=0; realtimeHum=0;
  socket:any;
  filter_entree: any;
histo: boolean = false
dash=true;
reglage: boolean = false

  constructor(private router: Router, private TemphumService:TemphumService) {}

  ngOnInit() {

    this.TemphumService.getTemp().subscribe({
      next:(data:any)=>{
      this.realtimeTemp = data.slice(31, 33);
      this.realtimeHum = data.slice(10, 12);
      this.filter_entree = [data]
      console.log(data);

      }
    })

  }

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


