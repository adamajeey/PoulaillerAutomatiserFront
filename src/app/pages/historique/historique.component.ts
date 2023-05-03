import { Component, OnInit } from '@angular/core';
import  temphumjson  from '../../tamphum.json';

interface TEMPHUM {
  Date : string;
  Temperatue : string;
  Humidite : string;
}

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {

  constructor() {}

  ngOnInit(): void { }

  temphum: TEMPHUM[] = temphumjson;

histo: any[] = temphumjson ;
filterTerm!: string;
itemsperpage: number=4;
p: number=1;


}
