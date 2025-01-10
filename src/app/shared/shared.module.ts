import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationBarComponent } from '../shared-components/navigation-bar/navigation-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { MyServiceService } from  '../shared/services/my-service.service'
import { RouterModule } from '@angular/router';
import { UpperCasePipe } from './angular-pipes/uppercase-pure-pipe'
import { impurePipeFilter } from './angular-pipes/impure-pipe-filter'
import { ListenerComponent } from './method-decorator-example';
import { AddHashPrefixPipe} from './angular-pipes/text-update-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [NavigationBarComponent,UpperCasePipe,impurePipeFilter, ListenerComponent,AddHashPrefixPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers:[MyServiceService, UpperCasePipe, ListenerComponent,AddHashPrefixPipe],
  exports: [
    NavigationBarComponent,
    HttpClientModule,
    UpperCasePipe,
    impurePipeFilter,
    ListenerComponent,
    AddHashPrefixPipe,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
