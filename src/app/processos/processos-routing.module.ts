import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProcessosComponent } from './containers/processos/processos.component';
import { ProcessoFormComponent } from './containers/processo-form/processo-form.component';
import { ProcessoResolver } from './guards/processo.resolver';

const routes: Routes = [
  { path: '', component: ProcessosComponent },
  {
    path: 'new',
    component: ProcessoFormComponent,
    resolve: { processo: ProcessoResolver },
  },
  {
    path: 'edit/:id',
    component: ProcessoFormComponent,
    resolve: { processo: ProcessoResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessosRoutingModule {}
