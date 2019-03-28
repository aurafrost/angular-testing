import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildrenModule } from './child1/children.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChildrenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
