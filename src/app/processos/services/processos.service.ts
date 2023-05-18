import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Processo } from '../model/processo';

@Injectable({
  providedIn: 'root',
})
export class ProcessosService {
  constructor(private httpClient: HttpClient) {}

  list(): Processo[] {
    return [
      {
        _id: '1',
        numero: 65,
        digito: 9,
        ano: '2021',
        justica: 5,
        vara: 8,
        clienteNome: 'Jose Carneiro',
      },
    ];
  }
}
