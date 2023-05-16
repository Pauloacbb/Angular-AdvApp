import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ProcessosRoutingModule } from './processos-routing.module';
import { ProcessosComponent } from './processos/processos.component';

@NgModule({
  declarations: [ProcessosComponent],
  imports: [CommonModule, ProcessosRoutingModule, AppMaterialModule],
})
export class ProcessosModule {}
