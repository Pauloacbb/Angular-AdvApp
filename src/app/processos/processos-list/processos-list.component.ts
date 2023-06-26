import { Component, OnInit, Input } from '@angular/core';
import { Processo } from '../model/processo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-processos-list',
  templateUrl: './processos-list.component.html',
  styleUrls: ['./processos-list.component.scss'],
})
export class ProcessosListComponent implements OnInit {
  @Input() processos: Processo[] = [];

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

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
