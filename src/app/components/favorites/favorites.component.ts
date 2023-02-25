import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  modelName: string;
  stats: string;
  constructor(readonly route:Router) {
    this.modelName = "banana";
    this.stats="stats";
  }
}
