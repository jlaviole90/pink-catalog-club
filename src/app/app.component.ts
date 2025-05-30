import { Component } from '@angular/core';
import { PinkHorseComponent } from './pink-horse/pink-horse.component';

@Component({
  selector: 'app-root',
  imports: [PinkHorseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pink-catalog-club';
}
