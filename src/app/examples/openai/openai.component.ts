import { Component } from '@angular/core';
// import { openAiService } from 'src/app/shared/services/openai.service';

@Component({
  selector: 'app-openai',
  templateUrl: './openai.component.html',
  styleUrls: ['./openai.component.scss']
})
export class OpenaiComponent {

  completion: string = '';
  constructor(
    // private openAiService : openAiService
  ){
    alert("hello");
  }

  onGenerate() { 
    // this.openAiService.getCompletion('Write a short story about a dragon').then(text => { this.completion = text; }); 
  }

}
