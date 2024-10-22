import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ExamplesComponent,
    AngularBasicsComponent,
    DatabindingComponent,
    DirectivesComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    SharedModule
  ]
})
export class ExamplesModule { }
