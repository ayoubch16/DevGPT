import { Component, ElementRef, ViewChild, AfterViewChecked, ChangeDetectorRef } from '@angular/core';

interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewChecked {
  @ViewChild('messageInput') messageInput!: ElementRef;
  @ViewChild('chatContainer') chatContainer!: ElementRef;
  messages: ChatMessage[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  sendMessage(event?: KeyboardEvent) {
    if (event && event.key !== 'Enter') return;

    const messageText = this.messageInput.nativeElement.value.trim();
    if (messageText === '') return;

    // Ajouter le message de l'utilisateur
    this.messages.push({
      text: messageText,
      isUser: true,
      timestamp: new Date()
    });

    // Ajouter la réponse automatique
    this.messages.push({
      text: 'Merci pour votre message',
      isUser: false,
      timestamp: new Date()
    });

    // Réinitialiser l'input
    this.messageInput.nativeElement.value = '';
    this.cdr.detectChanges();  // Assurer la détection de changement
  }

  ngAfterViewChecked() {
    this.scrollToBottom();  // S'assurer de l'auto-défilement vers le bas
  }

  private scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch(err) {
      console.error('Erreur de défilement:', err);
    }
  }
}
