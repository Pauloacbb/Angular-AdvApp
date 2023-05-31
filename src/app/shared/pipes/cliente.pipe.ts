import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cliente',
})
export class ClientePipe implements PipeTransform {
  transform(value: string): string {
    if ('') return 'problem';
    else return 'person';
  }
}
