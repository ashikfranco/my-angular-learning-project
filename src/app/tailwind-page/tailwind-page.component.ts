import { Component } from '@angular/core';

@Component({
  selector: 'app-tailwind-page',
  templateUrl: './tailwind-page.component.html',
  styleUrls: ['./tailwind-page.component.scss']
})
export class TailwindPageComponent {

  items = [
    { name: 'Item 1', description: 'Description of Item 1' },
    { name: 'Item 2', description: 'Description of Item 2' },
    { name: 'Item 3', description: 'Description of Item 3' },
  ];

}
