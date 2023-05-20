import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class TemphumService {

  constructor( private socket: Socket ) {
    //this.socket = io("ws://127.0.0.1:3000")

  }

onSocketConnected(){
  this.socket.emit('connection', 'connecte')
}

  setupSocketConnection() {
    //this.socket = io(`${environment.apiUrl}`);
   return this.socket.fromEvent('temp');
  }



  getTemp(){
    return this.socket.fromEvent('temp');
  /*   return new Observable( observer => {
      this.socket.on('temp',(data:any) => {
       observer.next(data);
          })
     }) */

  }

  LedOn() {
    this.socket.emit('ledOn', 'H'); // Envoyer la commande d'allumage de la LED

  };

  LedOff() {
    this.socket.emit('ledOff', 'L'); // Envoyer la commande d'extinction de la LED
  }

  ChaufOn() {
    this.socket.emit('ChaufOn', '1'); // Envoyer la commande d'allumage du chauffage

  };

  ChaufOff() {
    this.socket.emit('ChaufOff', '0'); // Envoyer la commande d'extinction du chauffage
  };

  VentilOn() {
    this.socket.emit('VentilOn', '2'); // Envoyer la commande d'allumage du chauffage

  };

  VentilOff() {
    this.socket.emit('VentilOff', '3'); // Envoyer la commande d'extinction du chauffage
  }

  

}
