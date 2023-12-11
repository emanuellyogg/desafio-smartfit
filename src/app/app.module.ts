import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
