import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  showDashboard:boolean = true;

  imageRechaud = '';  imageFroidir = ''; imagePorte = ''; imageEau = ''; imageAliment = ''; imageLampe = '';
  buttonRecaud ='';   buttonFroidir ='';  buttonPorte ='';  buttonEau =''; buttonAliment =''; buttonLampe ='';
  chaud0 = '../assets/image/chaud0.png'; offChaud = '../assets/image/off.png'; chaud1 = '../assets/image/chaud1.png'; onChaud = '../assets/image/on.png';
  fanoff = '../assets/image/fanoff.png'; offFan = '../assets/image/off.png'; fanon = '../assets/image/fanon.gif'; onFan = '../assets/image/on.png';
  eau0 = '../assets/image/eau0.png';    offEau = '../assets/image/off.png'; eau1 = '../assets/image/eau1.png'; onEau = '../assets/image/on.png';
  vanne0 = '../assets/image/vanne0.png'; offVanne = '../assets/image/off.png'; vanne1 = '../assets/image/vanne1.png'; onVanne = '../assets/image/on.png';
  porte0 = '../assets/image/porte0.png'; offPorte = '../assets/image/off.png'; porte1 = '../assets/image/porte1.png'; onPorte = '../assets/image/on.png';
  lampe0 = '../assets/image/lampe0.png'; offLampe = '../assets/image/off.png'; lampe1 = '../assets/image/lampe1.png'; onLampe = '../assets/image/on.png';

/* allumer ou eteindre de la Lampe  */
  onClickLampe() {
    if (this.imageLampe === this.lampe1 && this.buttonLampe === this.offLampe  ) {
      this.imageLampe = this.lampe0;
      this.buttonLampe = this.onLampe;
     } else {
      this.imageLampe = this.lampe1;
      this.buttonLampe = this.offLampe;
    }

  }
  /* overture et fermeture de la porte */
  onClickPorte() {
    if (this.imagePorte === this.porte1 && this.buttonPorte === this.offPorte  ) {
      this.imagePorte = this.porte0;
      this.buttonPorte = this.onPorte;
     } else {
      this.imagePorte = this.porte1;
      this.buttonPorte = this.offPorte;
    }

  }
  /* allumer ou eteindre le robinot  */
  onClickEau() {
    if (this.imageEau === this.eau1 && this.buttonEau === this.offEau ) {
      this.imageEau = this.eau0;
      this.buttonEau = this.onEau;
     } else {
      this.imageEau = this.eau1;
      this.buttonEau = this.offEau;
    }

  }

  /* allumer ou eteindre l'extracteur  */
onClickExtracteur() {
  if (this.imageFroidir === this.fanon && this.buttonFroidir === this.onFan  ) {
    this.imageFroidir = this.fanoff;
    this.buttonFroidir = this.offFan;
   } else {
    this.imageFroidir = this.fanon;
    this.buttonFroidir = this.onFan;
   }
  }
    /* allumer ou eteindre le rechauffeur */
  onClickRechauffeur() {
    if (this.imageRechaud === this.chaud1 && this.buttonRecaud === this.onChaud  ) {
      this.imageRechaud = this.chaud0;
      this.buttonRecaud = this.offChaud;
     } else {
      this.imageRechaud = this.chaud1;
      this.buttonRecaud = this.onChaud;
    }

  }
  onClickAliment() {
    if (this.imageAliment === this.vanne1 && this.buttonAliment === this.onVanne  ) {
      this.imageAliment = this.vanne0;
      this.buttonAliment = this.offVanne;
     } else {
      this.imageAliment = this.vanne1;
      this.buttonAliment = this.onVanne;
    }

  }
  constructor() { }

  ngOnInit() {

    this.imageRechaud = this.chaud0
    this.buttonRecaud = this.offChaud;

    this.imageFroidir = this.fanoff
    this.buttonFroidir = this.offFan;

    this.imageAliment = this.vanne0
    this.buttonAliment = this.offVanne;

    this.imagePorte = this.porte0
    this.buttonPorte = this.offPorte;

    this.imageLampe = this.lampe0
    this.buttonLampe = this.offLampe;

    this.imageEau = this.eau0
    this.buttonEau = this.offEau;

  }

}
