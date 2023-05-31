import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ClientePipe } from './pipes/cliente.pipe';

@NgModule({
  declarations: [ErrorDialogComponent, ClientePipe],
  imports: [CommonModule, AppMaterialModule],
  exports: [ClientePipe, ErrorDialogComponent],
})
export class SharedModule {}
