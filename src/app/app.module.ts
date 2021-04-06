import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ConnectionComponent } from './connection/connection.component';
import { SlowDirective } from './slow.directive';
import { FastDirective } from './fast.directive';
import { ConnectionDirective } from './connection.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ConnectionComponent, SlowDirective, FastDirective, ConnectionDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
