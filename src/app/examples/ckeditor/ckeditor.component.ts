import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss']
})

  

export class CkeditorComponent {

  public Editor = ClassicEditor;
  public editorData = '<p>Hello, CKEditor!</p>';

  public editorConfig = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'indent',
        'outdent',
        '|',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'undo',
        'redo'
      ]
    },
    language: 'en'
  };

  



  onReady(event: any): void {
    console.log('Editor lost focus:', event);
  }

  onChange(event: any): void {
    console.log('Content changed:', event.editor.getData());
  }

  onBlur(event: any): void {
    console.log('Editor lost focus:', event);
  }

  onFocus(event: any): void {
    console.log('Editor got focus:', event);
  }



}
