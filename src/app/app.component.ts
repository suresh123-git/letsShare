import { Component } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { InitialScreenComponent } from './initial-screen/initial-screen.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[HomePageComponent, InitialScreenComponent],
  standalone:true
})
export class AppComponent {
  title = 'letsShare';
}
