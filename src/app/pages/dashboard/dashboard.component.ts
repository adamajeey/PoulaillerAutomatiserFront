import { UsersService } from 'src/app/services/users.service';
import { TemphumService } from 'src/app/services/temphum.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  realtimeTemp = 0
  realtimeHum = 0
  socket: any;
  filter_entree: any;
  showDashboard: boolean = true;
  realtimeEauLevel: number = 0; // Niveau d'eau en pourcentage

constructor(private TemphumService: TemphumService, private UsersService: UsersService) {}

ngOnInit(): void {
  this.TemphumService.getTemp().subscribe({
    next: (data: any) => {
      this.realtimeTemp = data.slice(31, 33);
      this.realtimeHum = data.slice(10, 12);
      this.realtimeEauLevel = parseInt(data.slice(0, 2)); // Convertir en nombre entier
      console.log('WaterLevel:', this.realtimeEauLevel);
    }
  });



    this.imageRechaud = this.chaud0;
    this.buttonRecaud = this.offChaud;

    this.imageFroidir = this.fanoff;
    this.buttonFroidir = this.offFan;

    this.imageAliment = this.vanne1;
    this.buttonAliment = this.offVanne;

    this.imagePorte = this.porte0;
    this.buttonPorte = this.offPorte;

    this.imageLampe = this.lampe0;
    this.buttonLampe = this.offLampe;

    this.imageEau = this.eau0;
    this.buttonEau = this.offEau;
  }

  imageRechaud = '';
  imageFroidir = '';
  imagePorte = '';
  imageEau = '';
  imageAliment = '';
  imageLampe = '';
  buttonRecaud = '';
  buttonFroidir = '';
  buttonPorte = '';
  buttonEau = '';
  buttonAliment = '';
  buttonLampe = '';
  chaud0 = '../assets/image/chaud0.png';
  offChaud = '../assets/image/off.svg';
  chaud1 = '../assets/image/chaud1.png';
  onChaud = '../assets/image/on.svg';
  fanoff = '../assets/image/fanoff.png';
  offFan = '../assets/image/off.svg';
  fanon = '../assets/image/fanon.gif';
  onFan = '../assets/image/on.svg';
  eau0 = '../assets/image/eau0.png';
  offEau = '../assets/image/off.svg';
  eau1 = '../assets/image/eau1.png';
  onEau = '../assets/image/on.svg';
  vanne0 = '../assets/image/vanne0.png';
  offVanne = '../assets/image/off.svg';
  vanne1 = '../assets/image/vanne1.png';
  onVanne = '../assets/image/on.svg';
  porte0 = '../assets/image/porte0.png';
  offPorte = '../assets/image/off.svg';
  porte1 = '../assets/image/porte1.png';
  onPorte = '../assets/image/on.svg';
  lampe0 = '../assets/image/lampe0.png';
  offLampe = '../assets/image/off.svg';
  lampe1 = '../assets/image/lampe1.png';
  onLampe = '../assets/image/on.svg';

  /* allumer ou éteindre de la Lampe */
  onClickLampe() {
    this.imageLampe === this.lampe0 && this.buttonLampe === this.offLampe;
    this.imageLampe = this.lampe1;
    this.buttonLampe = this.onLampe;
  }

  onClickLampe1() {
    this.imageLampe = this.lampe0;
    this.buttonLampe = this.offLampe;
  }

  /* ouverture et fermeture de la porte */
  onClickPorte() {
    if (this.imagePorte === this.porte1 && this.buttonPorte === this.onPorte) {
      this.imagePorte = this.porte0;
      this.buttonPorte = this.offPorte;
    } else {
      this.imagePorte = this.porte1;
      this.buttonPorte = this.onPorte;
    }
  }

  /* allumer ou éteindre le robinet */
  onClickEau() {
    if (this.imageEau === this.eau1 && this.buttonEau === this.onEau) {
      this.imageEau = this.eau0;
      this.buttonEau = this.offEau;
    } else {
      this.imageEau = this.eau1;
      this.buttonEau = this.onEau;
    }
  }

  /* allumer ou éteindre l'extracteur */
  onClickExtracteur1() {
    this.imageFroidir === this.fanon && this.buttonFroidir === this.onFan;
    this.imageFroidir = this.fanoff;
    this.buttonFroidir = this.offFan;
  }

  onClickExtracteur() {
    this.imageFroidir = this.fanon;
    this.buttonFroidir = this.onFan;
  }

  /* allumer ou éteindre le réchauffeur */
  onClickRechauffeur() {
    this.imageRechaud === this.chaud1 && this.buttonRecaud === this.onChaud;
    this.imageRechaud = this.chaud0;
    this.buttonRecaud = this.offChaud;
  }

  onClickRechauffeur1() {
    this.imageRechaud = this.chaud1;
    this.buttonRecaud = this.onChaud;
  }

  onClickAliment() {
    if (this.imageAliment === this.vanne0 && this.buttonAliment === this.onVanne) {
      this.imageAliment = this.vanne1;
      this.buttonAliment = this.offVanne;
    } else {
      this.imageAliment = this.vanne0;
      this.buttonAliment = this.onVanne;
    }
  }

  ledOn() {
    this.TemphumService.LedOn(); // Appel de la méthode du service pour allumer la LED
  }

  ledOff() {
    this.TemphumService.LedOff(); // Appel de la méthode du service pour éteindre la LED
  }

  ChaufOn() {
    this.TemphumService.ChaufOn(); // Appel de la méthode du service pour allumer le chauffage
  }

  ChaufOff() {
    this.TemphumService.ChaufOff(); // Appel de la méthode du service pour éteindre le chauffage
  }

  VentilOn() {
    this.TemphumService.VentilOn(); // Appel de la méthode du service pour allumer le refroidisseur
  }

  VentilOff() {
    this.TemphumService.VentilOff(); // Appel de la méthode du service pour éteindre le refroidisseur
  }
/*
 updateWaterLevel(): void {
    // Simuler la mise à jour du niveau d'eau depuis une source de données externe
    // Ici, nous utilisons un intervalle pour augmenter progressivement le niveau d'eau
    const interval = setInterval(() => {
      if (this.realtimeEauLevel < 100) {
        this.realtimeEauLevel += 10; // Augmenter le niveau d'eau de 10%
      } else {
        clearInterval(interval); // Arrêter l'intervalle une fois le niveau maximum atteint
      }
    }, 1000); // Mettre à jour toutes les 1 seconde (vous pouvez ajuster l'intervalle selon vos besoins)
  }
   */

  getProgressBarColor(): string {
    if (this.realtimeEauLevel >= 40) {
      return 'blue';
    }
    return '';
  }

  // ...

  fetchData(): void {
    this.TemphumService.getTemp().subscribe({
      next: (data: any) => {
        // ...
        this.realtimeEauLevel = parseInt(data.slice(0, 2)); // Convertir en nombre entier
        console.log('WaterLevel:', this.realtimeEauLevel);
      }
    });
  }
  updateWaterLevel(newLevel: number) {
    this.realtimeEauLevel = newLevel;
  }

}
