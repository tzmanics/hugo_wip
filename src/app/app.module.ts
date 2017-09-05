import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SliderModule } from '@progress/kendo-angular-inputs';
import { SwitchModule } from '@progress/kendo-angular-inputs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SliderModule,
    SwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
