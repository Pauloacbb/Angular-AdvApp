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
      first()
      // delay(5000),
      // tap((processo) => console.log(processo))
    );
  }

  loadById(id: string) {
    return this.httpClient.get<Processo>(`${this.API}/${id}`);
  }

  save(record: Partial<Processo>) {
    // console.log(record);
    if (record._id) {
      // console.log('update');
      return this.update(record);
    }
    // console.log('create');
    return this.create(record);
  }

  private create(record: Partial<Processo>) {
    return this.httpClient.post<Processo>(this.API, record).pipe(first());
  }

  private update(record: Partial<Processo>) {
    return this.httpClient
      .put<Processo>(`${this.API}/${record._id}`, record)
      .pipe(first());
  }
}
