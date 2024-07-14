import { Pipe, PipeTransform } from '@angular/core';
import { rutFormat } from 'rut-helpers';

@Pipe({
  name: 'formatrut'
})
export class FormatrutPipe implements PipeTransform {

  transform(value: string): string {
    return rutFormat(value);
  }

}
