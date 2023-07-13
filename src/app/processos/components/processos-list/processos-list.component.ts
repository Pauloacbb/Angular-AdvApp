import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Processo } from '../../model/processo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-processos-list',
  templateUrl: './processos-list.component.html',
  styleUrls: ['./processos-list.component.scss'],
})
export class ProcessosListComponent implements OnInit {
  @Input() processos: Processo[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = [
    'numero',
    'digito',
    'ano',
    'justica',
    'tribunal',
    'vara',
    'clienteNome',
    'Actions',
  ];

  constructor() {}
  ngOnInit(): void {}

  onAdd() {
    this.add.emit(true);
  }

  onEdit(processo: Processo) {
    this.edit.emit(processo);
  }

  onDelete(processo: Processo) {
    this.remove.emit(processo);
  }
}
