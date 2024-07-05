import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarDirective } from './shared/directives/navbar.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditCardDirective } from './shared/directives/credit-card.directive';
import { ToLowerCaseDirective } from './shared/directives/to-lower-case.directive';
import { HighlightDirective } from './shared/directives/highlight.directive';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    NavbarDirective,
    CreditCardDirective,
    ToLowerCaseDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
