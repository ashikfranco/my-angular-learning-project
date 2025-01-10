import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addHashPrefix'
})
export class AddHashPrefixPipe implements PipeTransform {
  transform(value: string): string {
    return `#${value}`;
  }
}