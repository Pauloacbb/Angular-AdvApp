import { Processo } from './../model/processo';
import { ProcessosService } from './../services/processos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss'],
})
export class ProcessosComponent implements OnInit {
  processos$: Observable<Processo[]>;
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
    this.processos$ = this.processosService.list();
  }
  ngOnInit(): void {
    // this.processos = this.processosService.list();
  }
}
