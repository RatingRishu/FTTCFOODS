import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  showPopup = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const data = {
      access_key: '7927bf9c-19fa-4620-bd0c-141a297076c4',
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message
    };

    this.http.post('https://api.web3forms.com/submit', data).subscribe({
      next: () => {
        this.showPopup = true;
        this.formData = { name: '', email: '', message: '' };

        setTimeout(() => {
          this.showPopup = false;
        }, 4000);
      },
      error: () => {
        alert('Something went wrong. Please try again.');
      }
    });
  }

}
