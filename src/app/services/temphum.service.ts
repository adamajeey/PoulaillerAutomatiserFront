import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class TemphumService {
  constructor(private socket: Socket) {}

  onSocketConnected() {
    this.socket.emit('connection', 'connecte');
  }

  setupSocketConnection() {
    return this.socket.fromEvent('temp');
  }

  getTemp() {
    return this.socket.fromEvent('temp');
  }

  LedOn() {
    this.socket.emit('ledOn', 'H');
  }

  LedOff() {
    this.socket.emit('ledOff', 'L');
  }

  ChaufOn() {
    this.socket.emit('ChaufOn', '1');
  }

  ChaufOff() {
    this.socket.emit('ChaufOff', '0');
  }

  VentilOn() {
    this.socket.emit('VentilOn', '2');
  }

  VentilOff() {
    this.socket.emit('VentilOff', '3');
  }

  openDoor(code: string) {
    this.socket.emit('openDoor', code);
  }

  // Ajoutez la fonction pour la réception de l'événement 'open'
  onDoorOpen(): Observable<any> {
    return this.socket.fromEvent('open');
  }

  closeDoor() {
    this.socket.emit('closeDoor');
  }
  // Dans votre service "temphum.service.ts"
// Ajoutez la fonction pour la réception de l'événement 'doorClosed'
onDoorClosed(): Observable<any> {
  return this.socket.fromEvent('doorClosed');
}

}
