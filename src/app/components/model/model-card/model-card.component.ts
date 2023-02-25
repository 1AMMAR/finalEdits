import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.css']
})
export class ModelCardComponent {
  modelName: string;
  stats: string;
  constructor(readonly route:Router) {
    this.modelName = "banana";
    this.stats="stats";
  }
}
