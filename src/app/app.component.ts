import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChatComponent} from '../components/chat/chat.component';
import {HeaderComponent} from '../components/header/header.component';
import {FooterComponent} from '../components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DevGPT';
}
