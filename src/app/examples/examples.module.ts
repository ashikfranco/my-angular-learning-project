import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { SharedModule } from '../shared/shared.module';
import { OpenaiComponent } from './openai/openai.component';
import { AngularPipeComponent } from './angular-pipe/angular-pipe.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { RenderElementComponent } from '../render-element/render-element.component';
import { JsConfettiComponent } from '../js-confetti/js-confetti.component';



@NgModule({
  declarations: [
    ExamplesComponent,
    AngularBasicsComponent,
    DatabindingComponent,
    DirectivesComponent,
    OpenaiComponent,
    AngularPipeComponent,
    AngularFormComponent,
    RenderElementComponent,
    JsConfettiComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    SharedModule,
  ]
})
export class ExamplesModule { }
