import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DatepickerModule } from 'ng2-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        AppComponent, 
    ],

    imports: [
        BrowserModule, 
        FormsModule,
        DatepickerModule.forRoot(),
    ],

    providers: [
    ],  

    bootstrap: [AppComponent]
})
export class AppModule {

}