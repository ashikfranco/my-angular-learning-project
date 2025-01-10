import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.scss']
})
export class AngularFormComponent implements OnInit{

  

  // Sample data structure (could be fetched from an API)
 sampleData = [
  { label: 'Name', name: 'name', type: 'text', value: '' },
  { label: 'Email', name: 'email', type: 'email', value: '' },
  { label: 'Age', name: 'age', type: 'number', value: '' },
  { label: 'Address', name: 'address', type: 'text', value: '' },
  { label: 'place', name: 'place', type: 'text', value: '' },
  { label: 'Email', name: 'email', type: 'email', value: '' },
  { label: 'Age', name: 'age', type: 'number', value: '' },
  { label: 'Address', name: 'address', type: 'text', value: '' },
  { label: 'Name', name: 'name', type: 'text', value: '' },
  { label: 'Email', name: 'email', type: 'email', value: '' },
  { label: 'Age', name: 'age', type: 'number', value: '' },
  { label: 'Address', name: 'address', type: 'text', value: '' },
];

dynamicForm!: FormGroup; // Ensure it's defined as a FormGroup
  fields = this.sampleData; // Replace this with your dynamic data source

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    const formGroup: { [key: string]: any } = {}; // Define an index signature
    this.fields.forEach(field => {
      formGroup[field.name] = [field.value || '']; // Initialize with value or empty string
    });
    this.dynamicForm = this.fb.group(formGroup);
  }

  onSubmit() {
    console.log(this.dynamicForm.value); // Handle form submission
  }

}
