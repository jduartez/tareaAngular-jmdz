import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initcap'
})
export class InitcapPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value; // Handle null or undefined values
    let val = value.charAt(0).toUpperCase() + value.slice(1).toLocaleLowerCase();
    
    return `⭐️ ${val} ⭐️`;
  }

}
