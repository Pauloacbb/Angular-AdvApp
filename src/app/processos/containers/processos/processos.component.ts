import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Processo } from '../../model/processo';
import { ProcessosService } from '../../services/processos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss'],
})
export class ProcessosComponent implements OnInit {
  processos$: Observable<Processo[]> | null = null;

  constructor(
    private processosService: ProcessosService,
    public dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    // this.processos = [];
    this.refresh();
  }

  refresh() {
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
  onEdit(processo: Processo) {
    this.router.navigate(['edit', processo._id], { relativeTo: this.route });
  }
  onRemove(processo: Processo) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Confirma remoção do processo?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.processosService.remove(processo._id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Processo deletado com sucesso', 'X', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            });
          },
          () => this.onError('Erro ao remover processo')
        );
      }
    });
  }
}
