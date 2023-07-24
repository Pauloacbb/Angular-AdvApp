import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ClientePipe } from './pipes/cliente.pipe';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    ClientePipe,
    ConfirmationDialogComponent,
  ],
  imports: [CommonModule, AppMaterialModule],
  exports: [ClientePipe, ErrorDialogComponent, ConfirmationDialogComponent],
})
export class SharedModule {}
