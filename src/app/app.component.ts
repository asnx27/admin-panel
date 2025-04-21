import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { USERS } from '../data/users';
import { PRODUCTS } from '../data/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'adminP';
}
export class DashboardComponent {
  USERS = USERS;
  PRODUCTS = PRODUCTS;
}
