import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Processo } from '../model/processo';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProcessosService {
  private readonly API = '/aassets/processos.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Processo[]>(this.API).pipe(
      first(),
      delay(5000),
      tap((processo) => console.log(processo))
    );
  }
}
