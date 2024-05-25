import { Component } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[HomePageComponent],
  standalone:true
})
export class AppComponent {
  title = 'letsShare';
}
