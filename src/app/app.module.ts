import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimplePaginationComponent } from './simple-pagination.component';
import { ChildPaginationComponent } from './child-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    SimplePaginationComponent,
    ChildPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
