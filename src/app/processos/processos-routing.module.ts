import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProcessosComponent } from './containers/processos/processos.component';
import { ProcessoFormComponent } from './containers/processo-form/processo-form.component';

const routes: Routes = [
  { path: '', component: ProcessosComponent },
  { path: 'new', component: ProcessoFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessosRoutingModule {}
