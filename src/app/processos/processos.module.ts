import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ProcessosRoutingModule } from './processos-routing.module';
import { ProcessosComponent } from './processos/processos.component';
import { ProcessoFormComponent } from './processo-form/processo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProcessosListComponent } from './processos-list/processos-list.component';

@NgModule({
  declarations: [ProcessosComponent, ProcessoFormComponent, ProcessosListComponent],
  imports: [
    CommonModule,
    ProcessosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ProcessosModule {}
