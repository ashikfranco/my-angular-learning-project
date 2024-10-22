import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  message = '';
  observable!: Observable<string>;  // Declare Observable as a class property

  constructor(){

  }

  ngOnInit(): void {
        // Declare an Observable that emits a value after 2 seconds
         this.observable = new Observable<string>((observer) => {
          setTimeout(() => {
            observer.next('Hello from Observable!');
            observer.complete();
          }, 2000);
        })
  }


  subscribe(){
         // Subscribe to the Observable to receive the value
         this.observable.subscribe({
      next: (value) => (this.message = value),
      complete: () => console.log('Observable complete')
    });
  }



}
