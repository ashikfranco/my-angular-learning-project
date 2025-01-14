import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
    name: 'uppercasePure'
 })

 export  class UpperCasePipe implements PipeTransform{
    transform(value: string ) : string {
        return value.toUpperCase();
    }
 }