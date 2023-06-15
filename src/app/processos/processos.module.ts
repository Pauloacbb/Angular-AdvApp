import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ProcessosRoutingModule } from './processos-routing.module';
import { ProcessosComponent } from './processos/processos.component';
import { ProcessoFormComponent } from './processo-form/processo-form.component';

@NgModule({
  declarations: [ProcessosComponent, ProcessoFormComponent],
  imports: [
    CommonModule,
    ProcessosRoutingModule,
    AppMaterialModule,
    SharedModule,
  ],
})
export class ProcessosModule {}
