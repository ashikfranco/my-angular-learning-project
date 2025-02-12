import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './examples.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { OpenaiComponent } from './openai/openai.component';
import { AngularPipeComponent } from './angular-pipe/angular-pipe.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { RenderElementComponent } from '../render-element/render-element.component';
import { JsConfettiComponent } from '../js-confetti/js-confetti.component';
import { CkeditorComponent } from '../examples/ckeditor/ckeditor.component';
import { TailwindPageComponent } from '../tailwind-page/tailwind-page.component';

const routes: Routes = [{ path: '', component: ExamplesComponent },
  { path: 'angularbasics', component: AngularBasicsComponent },
  { path: 'databinding', component: DatabindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'open-ai', component: OpenaiComponent },
  { path: 'angular-pipes', component: AngularPipeComponent },
  { path: 'angular-forms', component: AngularFormComponent },
  { path: 'angular-render-element', component: RenderElementComponent },
  { path: 'confetti', component: JsConfettiComponent },
  { path: 'ckeditor', component: CkeditorComponent },
  { path: 'tailwind', component: TailwindPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
