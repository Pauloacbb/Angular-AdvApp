import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProcessosService } from '../services/processos.service';
import { Processo } from '../model/processo';

@Injectable({
  providedIn: 'root',
})
export class ProcessoResolver implements Resolve<Processo> {
  constructor(private service: ProcessosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Processo> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({
      _id: '',
      numero: '',
      digito: '',
      ano: '',
      justica: '',
      tribunal: '',
      vara: '',
      clienteNome: '',
    });
  }
}
