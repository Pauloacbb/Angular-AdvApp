import { ProcessosService } from './../services/processos.service';
import { Component, OnInit } from '@angular/core';
import { Processo } from '../model/processo';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss'],
})
export class ProcessosComponent implements OnInit {
  processos: Processo[] = [];
  displayedColumns = [
    'numero',
    'digito',
    'ano',
    'justica',
    'vara',
    'clienteNome',
  ];

  constructor(private processosService: ProcessosService) {
    // this.processos = [];
  }
  ngOnInit(): void {
    this.processos = this.processosService.list();
  }
}
