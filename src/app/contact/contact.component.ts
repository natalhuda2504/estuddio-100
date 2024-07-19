import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { response } from 'express';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  loading = false;
  success = false;
  error = false;

  constructor(private http: HttpClient) {}

  onSubmit(form: any) {
    if (form.valid) {
      this.loading = true;
      this.error = false;
      this.success = false;

      const formData = {
        name: form.value.name,
        email: form.value.email,
        title: form.value.title,
        message: form.value.message
      };

      this.http.post('http://localhost:3000/send-email', formData)
        .subscribe({
          next: () => {
            this.success = true;
          },
          error: (error) => {
            this.error = true;
          },
          complete: () => {
            this.loading = false;
          }
       });
    }
  }

}
