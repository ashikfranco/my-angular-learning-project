import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
// import { NavigationBarComponent } from './shared-components/navigation-bar/navigation-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextChangeDirective } from './directives/textchange.directives.';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
// import { AngularBasicsComponent } from './angular-basics/angular-basics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignUpComponent,
    // NavigationBarComponent,
    TextChangeDirective,
    // AngularBasicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule , // Importing SharedModule here makes NavigationBarComponent available in HomeComponent
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
