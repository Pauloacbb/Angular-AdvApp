import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ProcessosListComponent } from './components/processos-list/processos-list.component';
import { ProcessosComponent } from './containers/processos/processos.component';
import { ProcessoFormComponent } from './containers/processo-form/processo-form.component';
import { ProcessosRoutingModule } from './processos-routing.module';

@NgModule({
  declarations: [
    ProcessosComponent,
    ProcessoFormComponent,
    ProcessosListComponent,
  ],
  imports: [
    CommonModule,
    ProcessosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ProcessosModule {}
