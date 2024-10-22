import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from '../shared-components/navigation-bar/navigation-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { MyServiceService } from  '../shared/services/my-service.service'
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavigationBarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    
  ],
  providers:[MyServiceService],
  exports: [
    NavigationBarComponent,
    HttpClientModule
  ]
})
export class SharedModule { }
