import { Routes } from '@angular/router';
import {ChatComponent} from '../components/chat/chat.component';

export const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' }, // Redirect root path to /chat
  { path: 'chat', component: ChatComponent },

];
