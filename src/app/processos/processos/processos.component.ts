import { Component, OnInit } from '@angular/core';
import { Processo } from '../model/processo';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss'],
})
export class ProcessosComponent implements OnInit {
  processos: Processo[] = [
    {
      _id: '1',
      numero: 65,
      digito: 9,
      ano: '2021',
      justica: 5,
      vara: 8,
      clienteNome: 'Jose Carneiro',
    },
  ];
  displayedColumns = [
    'numero',
    'digito',
    'ano',
    'justica',
    'vara',
    'clienteNome',
  ];

  constructor() {
    // this.processos = [];
  }
  ngOnInit(): void {}
}
