import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Child1Component } from './child1.component';
import { Childofchild1Component } from './childofchild1/childofchild1.component';
import { Child1Service } from './child1.service';

@NgModule({
  declarations: [
    Child1Component,
    Childofchild1Component
  ],
  imports: [
    BrowserModule,
  ],
  providers: [Child1Service],
  bootstrap: []
})
export class ChildrenModule { }
