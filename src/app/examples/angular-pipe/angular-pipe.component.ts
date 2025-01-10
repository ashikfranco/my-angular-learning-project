import { Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';


@Component({
  selector: 'app-angular-pipe',
  templateUrl: './angular-pipe.component.html',
  styleUrls: ['./angular-pipe.component.scss']
})
export class AngularPipeComponent implements OnInit {

  imageUrl: string = 'assets/purepipe.png';
  imageUrl1: string = 'assets/impurepipe.png';
  test: string = "this is my example";

  delayResponse: Observable<string> | undefined;  // can also give like  delayResponse : any
  responseText: any;

  searchText: string = '';
   items = [ 
    { name: 'Apple', category: 'Fruit', price: 1.00 }, 
    { name: 'Banana', category: 'Fruit', price: 0.50 }, 
    { name: 'Carrot', category: 'Vegetable', price: 0.30 },
     { name: 'Dairy Milk', category: 'Chocolate', price: 1.20 }, 
     { name: 'Eggplant', category: 'Vegetable', price: 0.70 }, 
     { name: 'Fish', category: 'Meat', price: 2.50 },
      { name: 'Grapes', category: 'Fruit', price: 1.80 }, 
      { name: 'Honey', category: 'Condiment', price: 3.00 } 
    ];
    namelist = [
      'ashik',
      'ashmi'
    ]
 

    ngOnInit(): void {
      this.delayResponse = of('Some text', 'hello its me ashiq').pipe(delay(10000));
      
      this.delayResponse.subscribe((data:any) => {
        this.responseText = data; // Create a new property to hold the emitted value
      });
    }

   
}
