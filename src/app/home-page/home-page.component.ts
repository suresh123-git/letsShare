import { Component, OnInit } from '@angular/core';
import { NgIf,NgClass } from '@angular/common';
import { count } from 'rxjs';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  standalone:true,
  imports: [NgIf,NgClass]
})
export class HomePageComponent implements OnInit{
  counter: number = 1;
  ngOnInit(): void {
  }
  counterIncrement(count: any) {
    this.counter = count
    console.log(this.counter);
    
  }

  changecolor() {
    if(this.counter == 1) {
      return 'green'
    } else if (this.counter == 2) {
      return 'chocolate'
    } else if (this.counter == 3) {
      return 'greenyellow'
    } else {
      return 'violet'
    }
  }
}
