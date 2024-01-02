// newsletter.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent {
  constructor(private router: Router) {}

  navigateToAddNewsletter(): void {
    this.router.navigate(['/add-newsletter']);
  }
}
