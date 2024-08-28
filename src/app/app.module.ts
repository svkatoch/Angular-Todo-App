import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoContentComponent } from './components/todo-content/todo-content.component';
import { AddtodoComponent } from './components/addtodo/addtodo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoContentComponent,
    AddtodoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    CommonModule // Add CommonModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
