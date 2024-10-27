import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ChatComponent} from '../components/chat/chat.component';
import {HeaderComponent} from "../components/header/header.component";
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from '../components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    RouterOutlet,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
