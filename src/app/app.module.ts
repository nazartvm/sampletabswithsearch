import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MessageserviceService} from '../services/messageservice.service';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MessageserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
