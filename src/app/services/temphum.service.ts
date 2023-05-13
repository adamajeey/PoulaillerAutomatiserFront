import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket, io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class TemphumService {

  constructor(  ) {
    this.socket = io("ws://127.0.0.1:3000")

  }
  private socket: Socket;


  setupSocketConnection() {
    //this.socket = io(`${environment.apiUrl}`);
    this.socket.on('temp', (data: string) => {
      console.log(data );

    });
  }



  getTemp(){
    return new Observable( observer => {
      this.socket.on('temp',(data:any) => {
       observer.next(data);
          })
     })

  }

  LedOn() {
    this.socket.emit('ledOn', 'H'); // Envoyer la commande d'allumage de la LED

  };

  LedOff() {
    this.socket.emit('ledOff', 'L'); // Envoyer la commande d'extinction de la LED
  }

}
