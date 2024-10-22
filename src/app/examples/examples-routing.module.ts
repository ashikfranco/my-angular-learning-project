import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './examples.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [{ path: '', component: ExamplesComponent },
  { path: 'angularbasics', component: AngularBasicsComponent },
  { path: 'databinding', component: DatabindingComponent },
  { path: 'directives', component: DirectivesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
