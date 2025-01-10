import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { MyServiceService } from 'src/app/shared/services/my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items = [
    {
        concept: 'Angular Basics',
        description: 'Understanding the fundamentals',
        example: 'Basic component creation',
        route:'exampless/angularbasics'
    },
    {
        concept: 'Data Binding',
        description: 'Two-way data binding in Angular',
        example: 'Using ngModel',
         route:'exampless/databinding'
    },
    {
        concept: 'Directives',
        description: 'Built-in directives in Angular',
        example: 'Using ngFor and ngIf',
        route:'exampless/directives'
    },
    {
      concept: 'Angular Basics',
      description: 'Understanding the fundamentals',
      example: 'Basic component creation',
       route:'exampless/basicsss'
  },
  {
      concept: 'angular pipes and features',
      description: 'angular pipes and features',
      example: 'Using ngModel',
      route:'exampless/angular-pipes'
  },
  {
      concept: 'OPEN AI iNTERGRATION',
      description: 'Built-in directives in Angular',
      example: 'Using ngFor and ngIf',
       route:'exampless/open-ai'
  },
  {
    concept: 'Angular Forms',
    description: 'different types of angular form',
    example: 'click me',
     route:'exampless/angular-forms'
    },
    {
      concept: 'Angular render, create elements',
      description: 'rendering and create element',
      example: 'click me',
       route:'exampless/angular-render-element'
      },
      {
        concept: 'Angular confetti',
        description: 'animation of congrats',
        example: 'click me',
         route:'exampless/confetti'
        }
    
];
 
 

constructor(private router: Router,
  private apiService: MyServiceService) {}

  ngOnInit(): void {

      this.apiService.get('posts').subscribe(data => {
        console.log('GET request data:', data);
      });

      this.apiService.getTodos().subscribe(data=>{
        if(data){
          console.log(data);
        }
      })

      // Example usage
const array = ["hello123", "test456 and 123", "number789", "another123456", "123"];
this.countNumberOccurrences(array);

      
  
  }


// function for finding no of numbers in the string array with its count
  countNumberOccurrences(arr: string[]): void {
    const numberOccurrences: { [key: string]: number } = {};
  debugger
    // Iterate over each string in the array
    for (const str of arr) {
      // Use regular expression to find all numbers in the string
      const numbers = str.match(/\d+/g); // \d+ matches sequences of digits (numbers)
      
      if (numbers) {
        for (const num of numbers) {
          // If the number already exists in the dictionary, increment its count
          if (numberOccurrences[num]) {
            numberOccurrences[num]++;
          } else {
            // Otherwise, add it to the dictionary with a count of 1
            numberOccurrences[num] = 1;
          }
        }
      }
    }
  
    // Print each number and its count
    for (const num in numberOccurrences) {
      console.log(`Number: ${num}, Count: ${numberOccurrences[num]}`);
    }
  }

changeRoute(route: any){
  this.router.navigate([route]); 
  console.log(route);
}

}
