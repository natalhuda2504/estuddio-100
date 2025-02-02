import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pages } from '../models/enums';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  Pages = Pages;
  currentPage: Pages = Pages.Home;

  updatePage(redirectPage: Pages){
    this.currentPage = redirectPage;
  }
}
