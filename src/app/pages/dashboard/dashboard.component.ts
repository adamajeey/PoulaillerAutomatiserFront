import { UsersService } from 'src/app/services/users.service';
import { TemphumService } from 'src/app/services/temphum.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  realtimeTemp: any;
  realtimeHum: any;
  socket: any;
  filter_entree: any;
  showDashboard: boolean = true;
  realtimeEauLevel: number = 0; // Niveau d'eau en pourcentage
  realtimePompe: any;
  enteredCode: string = '';
  errorMessage: string = '';
  port!: boolean;
  registerForm: FormGroup;
  codeAttempts: number = 0;
  codeLocked: boolean = false;
  imageRechaud = '';
  imageFroidir = '';
  imagePorte = '';
  imageEau = '';
  imageAliment = '';
  imageLampe = '';
  buttonRecaud = '';
  buttonFroidir = '';

  buttonEau = '';
  buttonAliment = '';
  buttonLampe = '';
  chaud0 = '../assets/image/chaud0.png';
  chaud1 = '../assets/image/chaud1.png';
  fanoff = '../assets/image/fanoff.png';
  fanon = '../assets/image/fanon.gif'; 
  eau0 = '../assets/image/eau0.png';
  eau1 = '../assets/image/eau1.png';
  vanne0 = '../assets/image/vanne0.png';
  vanne1 = '../assets/image/vanne1.png';
  porte0 = '../assets/image/porte0.png';
  porte1 = '../assets/image/porte1.png';
  lampe0 = '../assets/image/lampe0.png';
  lampe1 = '../assets/image/lampe1.png';

  // Nouvelles propriétés pour la fonctionnalité du code d'accès

  constructor(private formBuilder: FormBuilder, private temphumService: TemphumService, private usersService: UsersService) {
    this.registerForm = this.formBuilder.group({
      codeAccess: ['', Validators.required] // Ajoutez d'autres contrôles si nécessaire
      
    });
  }

  ngOnInit(): void {
    this.imageRechaud = this.chaud0;
    this.imageFroidir = this.fanoff;
    this.imageAliment = this.vanne1;
    this.imagePorte = this.porte0;
    this.imageLampe = this.lampe0;
    this.imageEau = this.eau0;

    this.temphumService.getTemp().subscribe({
      next: (data: any) => {
        this.realtimeTemp = data.slice(33, 35);
        this.realtimeHum = data.slice(12, 14);
        this.realtimeEauLevel = parseInt(data.slice(0, 2)); // Convertir en nombre entier
        this.realtimePompe = data.slice(2, 23);
        console.log('temperature:', this.realtimeTemp);
        console.log('humidité:', this.realtimeHum);
        console.log('WaterLevel:', this.realtimeEauLevel);
        console.log('Pompe:', this.realtimePompe);
      }
    });

    this.temphumService.onDoorOpen().subscribe((msg) => {
      console.log('open: ' + msg);
      // Faites ce que vous souhaitez avec le message reçu, par exemple, écrire dans le port série
      // portSerial.write(msg);
    });


  }

  // Fonction pour ouvrir et fermer la porte en utilisant le code d'accès
// ...
onCode(): void {

  if (this.enteredCode === '7777' && this.imagePorte === this.porte1) {
    console.log('Code incorrect');
    this.errorMessage = 'Code incorrect';
    this.imagePorte = this.porte1;

    this.codeAttempts++; // Incrémenter le nombre de tentatives

    if (this.codeAttempts >= 3) {
      this.codeLocked = true; // Bloquer l'input après trois tentatives
      console.log('Trop de tentatives de saisie incorrecte. L\'input est bloqué.');
      this.errorMessage = 'Trop de tentatives de saisie incorrecte bloqué.';
    }
  

 
  } else {
    // Le code est incorrect, affichez un message d'erreur ou effectuez d'autres actions
     // Le code est correct, exécutez le reste du code ici
     console.log('Code correct');
     this.imagePorte = this.porte1;
     this.errorMessage = 'Code correct';
     // Envoyer un message à votre service WebSocket pour ouvrir la porte
     this.temphumService.openDoor('7777');
       // Attendre 5 secondes
       setTimeout(() => {
        // Envoyer un message à votre service WebSocket pour fermer la porte
        this.temphumService.closeDoor();
        console.log('Porte fermée');
        this.imagePorte = this.porte0; // Mettre à jour l'image de la porte côté interface
      }, 5000);
  }
  if (this.codeLocked) {
    return; // Sortie de la fonction si l'input est bloqué
  }
}





  /* allumer ou éteindre de la Lampe */
  onClickLampe() {
    this.imageLampe === this.lampe0
    this.imageLampe = this.lampe1;
  
  }

  onClickLampe1() {
    this.imageLampe = this.lampe0;
  
  }

  /* allumer ou éteindre le robinet */
  onClickEau() {
    if (this.imageEau === this.eau1) {
      this.imageEau = this.eau0;
    } else {
      this.imageEau = this.eau1;
    
    }
  }

  /* allumer ou éteindre l'extracteur */
  onClickExtracteur1() {
    this.imageFroidir === this.fanon 
    this.imageFroidir = this.fanoff;
  
  }

  onClickExtracteur() {
    this.imageFroidir = this.fanon;
  
  }

  /* allumer ou éteindre le réchauffeur */
  onClickRechauffeur() {
    this.imageRechaud === this.chaud1 
    this.imageRechaud = this.chaud0;
  
  }

  onClickRechauffeur1() {
    this.imageRechaud = this.chaud1;
    
  }

  onClickAliment() {
    if (this.imageAliment === this.vanne0 ) {
      this.imageAliment = this.vanne1;
    } else {
      this.imageAliment = this.vanne0;
  
    }
  }

  ledOn() {
    this.temphumService.LedOn(); // Appel de la méthode du service pour allumer la LED
  }

  ledOff() {
    this.temphumService.LedOff(); // Appel de la méthode du service pour éteindre la LED
  }

  ChaufOn() {
    this.temphumService.ChaufOn(); // Appel de la méthode du service pour allumer le chauffage
  }

  ChaufOff() {
    this.temphumService.ChaufOff(); // Appel de la méthode du service pour éteindre le chauffage
  }

  VentilOn() {
    this.temphumService.VentilOn(); // Appel de la méthode du service pour allumer le refroidisseur
  }

  VentilOff() {
    this.temphumService.VentilOff(); // Appel de la méthode du service pour éteindre le refroidisseur
  }


  getProgressBarColor(): string {
    if (this.realtimeEauLevel >= 40) {
      return 'blue';
    }
    return '';
  }
  
  // ...
  
  fetchData(): void {
    this.temphumService.getTemp().subscribe({
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