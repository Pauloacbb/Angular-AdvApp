import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Processo } from '../model/processo';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProcessosService {
  private readonly API = '/assets/processos.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Processo[]>(this.API).pipe(
      first(),
      tap((processo) => console.log(processo))
    );
  }
}
