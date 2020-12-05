import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { VagonListComponent } from './vagon-list/vagon-list.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    VagonListComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
