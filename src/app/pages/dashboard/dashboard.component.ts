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
  chaud0 = '../assets/image/chaud0.png'; offChaud = '../assets/image/off.svg'; chaud1 = '../assets/image/chaud1.png'; onChaud = '../assets/image/on.svg';
  fanoff = '../assets/image/fanoff.png'; offFan = '../assets/image/off.svg'; fanon = '../assets/image/fanon.gif'; onFan = '../assets/image/on.svg';
  eau0 = '../assets/image/eau0.png';    offEau = '../assets/image/off.svg'; eau1 = '../assets/image/eau1.png'; onEau = '../assets/image/on.svg';
  vanne0 = '../assets/image/vanne0.png'; offVanne = '../assets/image/off.svg'; vanne1 = '../assets/image/vanne1.png'; onVanne = '../assets/image/on.svg';
  porte0 = '../assets/image/porte0.png'; offPorte = '../assets/image/off.svg'; porte1 = '../assets/image/porte1.png'; onPorte = '../assets/image/on.svg';
  lampe0 = '../assets/image/lampe0.png'; offLampe = '../assets/image/off.svg'; lampe1 = '../assets/image/lampe1.png'; onLampe = '../assets/image/on.svg';

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
    if (this.imagePorte === this.porte1 && this.buttonPorte === this.onPorte  ) {
      this.imagePorte = this.porte0;
      this.buttonPorte = this.offPorte;
     } else {
      this.imagePorte = this.porte1;
      this.buttonPorte = this.onPorte;
    }

  }
  /* allumer ou eteindre le robinot  */
  onClickEau() {
    if (this.imageEau === this.eau1 && this.buttonEau === this.onEau ) {
      this.imageEau = this.eau0;
      this.buttonEau = this.offEau;
     } else {
      this.imageEau = this.eau1;
      this.buttonEau = this.onEau;
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
