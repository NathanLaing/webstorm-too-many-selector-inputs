import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule, CommonModule, StoreModule.forRoot([appReducer])],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
