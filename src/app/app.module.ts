import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {MessagesComponent} from './messages/messages.component';
import {HeroComponent} from './hero/hero.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroFormComponent,
        MessagesComponent,
        HeroComponent,
        HeroListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
