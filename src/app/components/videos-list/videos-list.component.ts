import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent {
  videoTitle: string;
  thumbnail: string;
  color: string;
  date: string;
  size: number;
  constructor (readonly router: Router)
  {
    this.thumbnail = "";
    this.videoTitle = "Video Title";
    this.color="red";
    this.date="monday";
    this.size=5;
  }
}
