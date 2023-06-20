import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Processo } from '../model/processo';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProcessosService {
  private readonly API = 'api/processos';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Processo[]>(this.API).pipe(
      first(),
      // delay(5000),
      tap((processo) => console.log(processo))
    );
  }

  save(record: Processo) {
    console.log(record);
    return this.httpClient.post<Processo>(this.API, record).pipe(first());
  }
}
