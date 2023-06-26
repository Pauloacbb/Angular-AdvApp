import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Processo } from './../model/processo';
import { ProcessosService } from './../services/processos.service';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss'],
})
export class ProcessosComponent implements OnInit {
  processos$: Observable<Processo[]>;

  constructor(
    private processosService: ProcessosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.processos = [];
    this.processos$ = this.processosService.list().pipe(
      catchError((error) => {
        this.onError(JSON.stringify(error));
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
  ngOnInit(): void {
    // this.processos = this.processosService.list();
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
