import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  imports: [],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.scss',
})
export class ContactList {
  contacts = signal<{ name: string; icon: string; link: string }[]>([
    { name: 'GitHub', icon: './contacts-icons/github.svg', link: 'https://github.com/OtavioXavier' },
    { name: 'LinkedIn', icon: './contacts-icons/linkedin.svg', link: 'https://www.linkedin.com/in/otavioxaviermarinho/' },
    { name: 'Gmail', icon: './contacts-icons/gmail.svg', link: 'mailto:otavio.xavier.dev@gmail.com' },
    { name: 'WhatsApp', icon: './contacts-icons/whatsapp.svg', link: 'https://wa.me/5571999743095' },
  ]);

}
