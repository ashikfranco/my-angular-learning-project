import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'impurepipefilter',
})

export class impurePipeFilter implements PipeTransform {
    transform(items: any[], searchText : string) : any[] {
        if(!items || !searchText){
            return items;
        }
        return items.filter(item=> item.name.includes(searchText))
    }
}
