import { Component , OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-render-element',
  templateUrl: './render-element.component.html',
  styleUrls: ['./render-element.component.scss']
})
export class RenderElementComponent implements OnInit{
  constructor(private renderer: Renderer2) {}


  ngOnInit(): void {

    // using renderer
   const container= this.renderer.selectRootElement('#container');
   const element = this.renderer.createElement('h1');
   const text = this.renderer.createText('hi, this is me , ashiq');
    this.renderer.appendChild(element,text);
    this.renderer.appendChild(container,element);


    //. appendChild :Native JavaScript method to add a node to a parent's child list.

    // const parentElement = document.getElementById('parent'); 
    // const newElement = document.createElement('p'); 
    // newElement.textContent = 'Hello, World!';
    //  parentElement.appendChild(newElement);

  }

}
